import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import App from '../src/components/App'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { persistor, store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
    <Toaster position='top-right' toastOptions={{ duration: 1000 }}></Toaster>
  </StrictMode>
);