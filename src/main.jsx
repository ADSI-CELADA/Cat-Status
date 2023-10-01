import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './app.css'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <NextUIProvider>
        <main className='purple-dark text-foreground bg-background'>
          <App />
        </main>
      </NextUIProvider>
    </BrowserRouter>
)
