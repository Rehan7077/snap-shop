import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import './CompareProduct.css'
export const CompareProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/products/${id}`)
                const data = await res.json()
                setProduct(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchProduct();

    }, [id])

    if (loading) return <h1>error</h1>
    if (error) return <p>{error}</p>

    const prices = product.stores.map((store)=> store.price)
    const lowest = Math.min(...prices )

    return (
        <div className="comparison-sec">
            <h1 className="compare-title">Compare Prices</h1>

            <div className="product-header">
                <img src={product.image} alt={product.title} />
                <div>
                    <h2>{product.title}</h2>
                    <p>{product.variant}</p>
                </div>
            </div>

            <div className="stores-grid">
              

                {product.stores?.map((store, index) => (
                    
                    <Link to={store.buyLink} className={`store-card ${store.price === lowest ? "best" : ""}`} key={index}>
                        <h3>{store.name}</h3>
                        <p>₹{store.price.toLocaleString()}</p>
                        {store.price === lowest && <span className="badge">Best Price</span>}
                    </Link>
                ))}
            </div>
        </div>
    )
}