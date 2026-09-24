import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useApp } from "../../context/AppContext"
import { ProductCard } from "../../components/product-card/ProductCard"
import { Loader } from "../../components/loader/Loader"
import "./ProductList.css"

export const ProductList = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")
  const [amazon, setAmazon] = useState([])
  const [flipkart, setFlipkart] = useState([])
  const [amazonLoading, setAmazonLoading] = useState(true);
  const [flipkartLoading, setFlipkartLoading] = useState(true);
  const [selectedAmazonIdx, setSelectedAmazonIdx] = useState(null)
  const [selectedFlipkartIdx, setSelectedFlipkartIdx] = useState(null)
  const { error, showLoader, hideLoader, showError, hideError } = useApp();


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
        setAmazonLoading(false)
        setFlipkartLoading(false)

      } catch (err) {
        showError(err)
        console.log("Failed to fetch error", err)

      } finally {
        hideLoader()
      }
    }

    fetchProducts()

  }, [query])

  return (<>
    <button className="compare-btn">Compare</button>
    <div className="product-page">
      <div className="amazon">
        <div className="amazon-header">
          <h3 className="logo amazon-logo">Amazon</h3>
          <h4>Results</h4>
          <h4>{amazon.length} Found</h4>
        </div>

       {amazonLoading ? ( <Loader color="orange"/> ):(
         amazon.map((product, idx) => (
          <ProductCard key={idx} {...product} isSelected={selectedAmazonIdx === idx} onSelect={() => setSelectedAmazonIdx(idx)} />
        ))
       )}
      </div>

      <div className="flipkart">
        <div className="flipkart-header">
          <h3 className="logo flipkart-logo">Flipkart</h3>
          <h4>Results</h4>
          <h4>{flipkart.length} Found</h4>
        </div>

        {flipkartLoading ? (<Loader color="blue"/>):(flipkart.map((product, idx) => (
          <ProductCard key={idx} {...product} isSelected={selectedFlipkartIdx === idx} onSelect={() => setSelectedFlipkartIdx(idx)} />
        )))}
      </div>
    </div>
  </>
  )

}
