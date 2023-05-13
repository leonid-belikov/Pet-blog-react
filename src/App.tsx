import React, { useEffect } from 'react'
import styles from './App.module.scss'
import router from './router'
import MediaQueryChecker from './common/components/media-query-checker'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {
  const classList = [
    'app-container',
    styles.app
  ].join(' ')

  useEffect(() => {
    document.documentElement.classList.add('has-opened')
  }, [])

  return (
    <MediaQueryChecker>
      <div className={classList} data-testid='app'>
        <RouterProvider router={router}/>
        <Toaster toastOptions={{
          position: 'bottom-center',
          style: {
            background: 'white'
          },
          success: {
            iconTheme: {
              primary: '#62B641',
              secondary: '#e4e6ff'
            }
          }
        }}/>
      </div>
    </MediaQueryChecker>
  )
}

export default App
