import { useLocation } from "react-router"
import { Outlet } from "react-router";
import { Navbar } from "../components/navbar/Navbar";
import { Searchbar } from "../components/searchbar/SearchBar";
export const Layout = () => {
    const location = useLocation();
    const isHome = location === '/';

    return(
      <>
      <Navbar/>
      {!isHome && <Searchbar/>}
      <Outlet/>
      </>
    )
}