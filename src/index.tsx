import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'
import './index.scss'
import { BrowserRouter as Router } from 'react-router-dom'

const container = document.getElementById('root')!
const root = createRoot(container)

const baseName = process.env.NODE_ENV === 'production' ? '/Pet-blog-react' : undefined
console.log(process.env.NODE_ENV)

root.render(
  <React.StrictMode>
    <Router basename={baseName}>
      <Provider store={store}>
        <App/>
      </Provider>
    </Router>
  </React.StrictMode>
)
