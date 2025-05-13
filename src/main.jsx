import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PlanetaProvider } from './context/PlanetaContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <PlanetaProvider>

    <App />
     </PlanetaProvider>
  </StrictMode>,
)
