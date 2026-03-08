import { Link } from 'react-router'
import './Navbar.css'
export const Navbar = () => {
   return( <nav>
        <h2 className='nav-logo'>SnapShop</h2>
        <ul className="nav-menu">
            <Link to='/' className='nav-menu primary'>Home</Link>
            <li className="nav-menu primary">Categories</li>
            <li className="nav-menu primary">Deals</li>
            <li className="nav-menu primary">About</li>
        </ul>
    </nav>)
}