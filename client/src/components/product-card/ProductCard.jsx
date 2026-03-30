export const ProductCard = ({ title, price, rating, img, url }) => {
    return (
        <div className="product-card">
            <div className="product-img">
                <img src={img} alt={title} />
            </div>
            <div className="product-details">
                <h2>{title}</h2>
                <p>{price}</p>
                <p>{rating}</p>
            </div>
        </div>
    )
}