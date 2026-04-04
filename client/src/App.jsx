import { Navbar } from "./components/navbar/Navbar"
import { AppRouter } from "./router/AppRouter"
import { Loader } from "./components/loader/Loader"
import { Searchbar } from "./components/searchbar/SearchBar"
import './App.css'
function App() {
  return (
    <>
      {/* <Loader></Loader> */}
      <Navbar />
      <div className="content">
        <Searchbar />
        <AppRouter />
      </div>

    </>
  )
}

export default App
