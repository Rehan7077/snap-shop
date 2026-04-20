import { useSearchParams } from "react-router-dom"
import { Searchbar } from "../../components/searchbar/SearchBar"
import { useEffect, useState } from "react"
import { useApp } from "../../context/AppContext"
import amazonLogo from '../../assets/logos/amazon.png'
import flipkartLogo from "../../assets/logos/flipkart.png"
import { ProductCard } from "../../components/product-card/ProductCard"
import "./ProductList.css"

export const ProductList = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")
  const [amazon, setAmazon] = useState([])
  const [flipkart, setFlipkart] = useState([])
  const [selectedAmazonIdx, setSelectedAmazonIdx] = useState(null)
  const [selectedFlipkartIdx, setSelectedFlipkartIdx] = useState(null)
  const { error, loading, showLoader, hideLoader, showError, hideError } = useApp();


  useEffect(() => {
    if (!query) return;
    setAmazon([])
    setFlipkart([])
    setSelectedAmazonIdx(null)
    setSelectedFlipkartIdx(null)

    const fetchProducts = async () => {
      showLoader()
      hideError()
      try {
        const res = await fetch(
          `http://localhost:5000/api/products?search=${query}`
        )

        if (!res.ok) {
          let errorData = await res.json()
          throw new Error(errorData.message)
        }

        const data = await res.json()
        console.log(data)
        setAmazon(data.amazon)
        setFlipkart(data.flipkart)

      } catch (err) {
        showError(err)
        console.log("Failed to fetch error", err)

      } finally {
        hideLoader()
      }
    }

    fetchProducts()

  }, [query])

  return (
    <div className="product-page">
      <div className="amazon">
        <div className="amazon-header">
          <h3 className="logo amazon-logo">Amazon</h3>
          <h4>Results</h4>
          <h4>{amazon.length} Found</h4>
        </div>

        {amazon.map((product, idx) => (
          <ProductCard key={idx} {...product} isSelected={selectedAmazonIdx === idx} onSelect={() => setSelectedAmazonIdx(idx)} />
        ))}
      </div>

      <div className="flipkart">
        <div className="flipkart-header">
          <h3 className="logo flipkart-logo">Flipkart</h3>
          <h4>Results</h4>
          <h4>{flipkart.length} Found</h4>
        </div>

        {flipkart.map((product, idx) => (
          <ProductCard key={idx} {...product} isSelected={selectedFlipkartIdx === idx} onSelect={()=>setSelectedFlipkartIdx(idx)} />
        ))}
      </div>
    </div>
  )

}
