import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error(
    '[main.tsx] Root element #root not found in the DOM. ' +
    'Ensure index.html contains <div id="root"></div>.',
  )
}

createRoot(rootElement).render(<App />)
