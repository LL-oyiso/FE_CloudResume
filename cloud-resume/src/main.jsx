import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

 import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Aboutme from './components/Aboutme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Hero />
    <Aboutme />
  </React.StrictMode>,
)
