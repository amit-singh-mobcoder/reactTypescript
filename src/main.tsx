import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {CounterProvider} from './provider/Counter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CounterProvider>
    <App />
    </CounterProvider>
  </StrictMode>,
)
