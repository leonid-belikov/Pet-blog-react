import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import { Counter } from './features/counter/Counter'
import './App.css'
import axios from './axios'
import { AxiosResponse } from 'axios'

function App() {

  const [msg, setMsg] = useState<string>('')

  useEffect(() => {
    axios.post('article', { text: 'kukue*ta' })
      .then((response: AxiosResponse<{msg: string}>) => { setMsg(response.data.msg) })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        { msg }
        <img src={logo} className="App-logo" alt="logo"/>
        <Counter/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="src/App"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="src/App"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="src/App"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="src/App"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  )
}

export default App
