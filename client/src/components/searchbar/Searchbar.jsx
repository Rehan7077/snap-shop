import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Searchbar.css'

export const Searchbar = () => {
    const [urlQuery, setUrlQuery] = useState('')
    const navigate = useNavigate()
    const handleSearch = (e) => {
        if (!urlQuery) return;
        navigate(`/products?q=${encodeURIComponent(urlQuery)}`)
    }

    return (
        <div className="hero-search">
            <input type="text" placeholder="Search products..." name='searchbar' value={urlQuery} onChange={(e) => setUrlQuery(e.target.value)} />
            <button onClick={handleSearch} aria-label='Compare Prices' className="btn-primary">Search Products</button>
        </div>
    )
}