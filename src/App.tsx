import React, { useEffect } from 'react'
import styles from './App.module.scss'
import router from './router'
import MediaQueryChecker from './common/components/media-query-checker'
import { RouterProvider } from 'react-router-dom'

function App() {
  const classList = [
    'app-container',
    styles.app
  ].join(' ')

  useEffect(() => {
    document.body.classList.add('has-opened')
  }, [])

  return (
    <MediaQueryChecker>
      <div className={classList} data-testid='app'>
        <RouterProvider router={router}/>
      </div>
    </MediaQueryChecker>
  )
}

export default App
