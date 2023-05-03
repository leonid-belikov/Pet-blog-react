import React, { useEffect } from 'react'
import styles from './App.module.scss'
import Router from './router'
import MediaQueryChecker from './common/components/media-query-checker'

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
        <Router/>
      </div>
    </MediaQueryChecker>
  )
}

export default App
