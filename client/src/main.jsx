import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"
import App from './App.jsx'
import { SearchProvider } from './context/SearchContext.jsx'

import './index.css'



createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <App />
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>



)
