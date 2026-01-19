import './Navbar.css'
export const Navbar = () => {
   return( <nav>
        <h2 className='nav-logo'>SnapShop</h2>
        <ul className="nav-menu">
            <li className="nav-menu primary">Categories</li>
            <li className="nav-menu primary">Deals</li>
            <li className="nav-menu primary">About</li>
        </ul>
    </nav>)
}