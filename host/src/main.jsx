import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { JournalApp } from './JournalApp.jsx'
import { StoreProvider } from 'remoteStore/StoreProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
)
