import { SearchContext } from '../../context/SearchContext'
import { useContext } from 'react'
import './Searchbar.css'

export const Searchbar = () => {
    const { searchTerm, setSearchTerm } = useContext(SearchContext)
    const handleInput = (e) => {
        setSearchTerm(e.target.value)
    }
    return (
        <div className="hero-search">
            <input type="text" placeholder="Search products..." name='searchbar' value={searchTerm} onChange={handleInput} />
            <button aria-label='Compare Prices' className="btn-primary">Compare Prices</button>
        </div>
    )
}