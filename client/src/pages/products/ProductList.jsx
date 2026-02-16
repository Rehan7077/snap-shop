import { useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { Searchbar } from "../../components/searchbar/SearchBar"
import { useEffect, useState } from "react"
import "./ProductList.css"

export const ProductList = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")
  const [products, setProducts] = useState([])


  useEffect(() => {
    if (!query) return;

    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/products?search=${query}`
        )

        if (!res.ok) throw new Error("Failed to fetch products")

        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchProducts()

  }, [query])

  return (
    <div className="product-page">
      <div className="search-bar">
        <Searchbar />
      </div>

      {query && products.length === 0 && (
        <p className="error-message">No products found</p>
      )}


      <section className="card-section">
        <div className="products">
          {products.map((product) => (
            <Link to={`/compare/${product._id}`}
              key={product._id}
              className="product-link"
            >
              <div className="products-card" key={product.title}>
                <img src={product.image} alt={product.title} loading="lazy" />
                <h4 className="product-title">{product.title}</h4>
                <h4 className="product-variant">{product.variant}</h4>


                <h4 className="product-price">
                  {Math.min(
                    ...product.stores
                      .map(store => store.price)
                      .filter(price => price != null)
                  ) ? `₹${Math.min(...product.stores.map(s => s.price).filter(p => p != null)).toLocaleString()}` : "Price not available"}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
