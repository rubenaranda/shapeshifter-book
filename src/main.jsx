import React from 'react'
import ReactDOM from 'react-dom/client'
import Books from './components/Book'
import './style.js'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { testTheme } from './styles/index'


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <ThemeProvider theme={testTheme}>
      <Books />
    </ThemeProvider>
  </>
)
