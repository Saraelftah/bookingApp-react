import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import './index.css'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { store } from "./store/index.js";



createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
      <Toaster />
      <App />
    </Provider> 
  // </StrictMode>,
)
