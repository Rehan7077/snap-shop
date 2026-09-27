import { Navbar } from "./components/navbar/Navbar"
import { AppRouter } from "./router/AppRouter"
import { Searchbar } from "./components/searchbar/Searchbar"

import './App.css'
function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Searchbar />
        <AppRouter />
      </div>

    </>
  )
}

export default App
