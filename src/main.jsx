import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import App from '../src/components/App'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { store } from './redux/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <Toaster position='top-right' toastOptions={{duration: 1000}}></Toaster>
  </StrictMode>
)
