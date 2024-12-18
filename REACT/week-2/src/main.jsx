import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import App from './useCallback/App' 
// import App from './useContext/App'
// import App from './useReducer/App'
// import App from './Lazy/App'
// import App from './useRef/App'
import App from './HOC/App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
