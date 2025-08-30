import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/responsive.css'
// import { registerServiceWorker } from "./utils/registerServiceWorker";
// import PwaWrapper from "./components/pwa/PwaWrapper";

const rootElement = document.getElementById('root')!

// Clear loading screen
rootElement.innerHTML = ''

ReactDOM.createRoot(rootElement).render(<App />)

// Register service worker for PWA capabilities
// registerServiceWorker();
