import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/index'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { testTheme } from './styles/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={testTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
