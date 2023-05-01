import React from 'react'
import styles from './App.module.scss'
import Router from './router'

function App() {

  return (
    <div className={styles.app} data-testid='app'>
      <Router/>
    </div>
  )
}

export default App
