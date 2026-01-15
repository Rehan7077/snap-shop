import { useState } from 'react'
import './Home.css'
import amazonLogo from '../../assets/logos/amazon.png'
import flipkartLogo from '../../assets/logos/flipkart.png'
export const Home = () => {
    const [searchbar, setSearchbar] = useState('')
    const handleInput = (e) => {
        setSearchbar(e.target.value)
    }
    return (
        <div className="home">
            <nav>
                <h2 className='nav-logo'>SnapShop</h2>
                <ul className="nav-menu">
                    <li className="nav-menu primary">Categories</li>
                    <li className="nav-menu primary">Deals</li>
                    <li className="nav-menu primary">About</li>
                </ul>
            </nav>
            <section className="hero">
                <h1 className="hero-heading">
                    Compare Prices of Electronics Across Top Stores

                </h1>
                <p className="hero-subheading">
                    Find the Best Deals on Mobiles, Laptops, Headphones & More

                </p>
                <div className="hero-search">
                    <input type="text" placeholder="Search products..." name='searchbar' value={searchbar} onChange={handleInput} />
                    <button aria-label='Compare Prices' className="btn-primary">Compare Prices</button>
                </div>
            </section>
            <section className='how-it-works'>
                <div className='section-title'>How SnapShop Works</div>
                <div className='steps'>
                    <div className='step-card'>
                        <span className="step-icon">🔍</span>
                        <h3>Search Products</h3>
                        <p>Enter the product name you want to buy.</p>
                    </div>
                    <div className="step-card">
                        <span className="step-icon">📊</span>
                        <h3>Compare Prices</h3>
                        <p>Compare prices from trusted e-commerce platforms.</p>
                    </div>
                    <div className="step-card">
                        <span className="step-icon">💰</span>
                        <h3>Buy at the Lowest Price</h3>
                        <p>Select the best deal and visit the store.</p>
                    </div>
                </div>
            </section>
            <section className='logo-section'>
                <h3 className='top-stores'>Top Stores</h3>
                <div className='logos'>
                    <div className='logo-image'><img src={amazonLogo} alt="Amazon Logo" /></div>
                    <div className="logo-image flipkart">
                        <img src={flipkartLogo} alt="Flipkart Logo" />
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="footer-links">
                    <a href="#about">About</a>
                    <a href="mailto:atif.rehan7077@gmail.com">Contact</a>
                    <a href="https://github.com/rehan7077" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <span className="tech-stack">Tech Stack: React, Node.js, Express, MongoDB</span>

                </div>
                <p className="copyright">
                    &copy; {new Date().getFullYear()} SnapShop. All rights reserved.
                </p>
            </footer>

        </div>
    )
}