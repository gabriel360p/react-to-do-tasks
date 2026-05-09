import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./pages/Home.jsx"
import {GlobalStyles} from "./src/styles/GlobalStyles.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <Home />
  </StrictMode>,
)
