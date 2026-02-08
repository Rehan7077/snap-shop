import { useSearchParams } from "react-router-dom"
import { Searchbar } from "../../components/searchbar/SearchBar"
import { useEffect, useState } from "react"
import './ProductList.css'
export const ProductList = () => {
  const [searchParam] = useSearchParams()
  const query = searchParam.get("q")

  const [products, setProducts] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    if (!query) return


    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products?search=${query}`)

        if (!response.ok) {
          throw new Error("Failed to fetch products")
        }

        const data = await response.json()
        setProducts(data)
        console.log(data)
      } catch (err) {
        setError(err.message)
      }
    }

    fetchProducts()
  }, [query])

  return (
    <div className="product-page">
      
        <Searchbar />
  
      

      {error && <p>{error}</p>}

      <section className="card-section">
        <div className="products">
          {products.length === 0 && !error && (
            <p>No products found</p>
          )}

          {products.map((product) => (
            <div className="product-card" key={product._id}>
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
              />
              <p>{product.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
