import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import userSlice from './redux/userSlice'
import loadingSlice from './redux/loadingSlice'
import { Provider } from 'react-redux'

export const store = configureStore({
  reducer: {
    userSlice: userSlice,
    loadingSlice: loadingSlice
  }
});

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <App />
  </Provider>
)
