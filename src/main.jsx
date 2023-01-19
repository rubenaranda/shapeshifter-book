import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.js'
import App from './components/App/index'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { testTheme } from './styles/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ThemeProvider theme={testTheme}>
      <App />
    </ThemeProvider>
  </>
)
