import { Home } from "./pages/Home/Home"
import { Navbar } from "./components/navbar/Navbar"
import { AppRouter } from "./router/AppRouter"
function App() {
  return (
    <>
      <Navbar/>
      <AppRouter/>
    </>
  )
}

export default App
