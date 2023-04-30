import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import { Counter } from './features/counter/Counter'
import './App.css'
import axios from './axios'
import { AxiosResponse } from 'axios'

function App() {

  const [msg, setMsg] = useState<string>('')

  useEffect(() => {
    axios('article')
      .then((response: AxiosResponse<{msg: string}>) => { setMsg(response.data.msg) })
  }, [])

  const handleFileInput = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    event.preventDefault()
    const file = event.target.files?.item(0)
    if (file) {
      console.log(file)
      debugger
      const image = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
          resolve(reader.result?.toString() ?? '')
        }
      })
      console.log(image)
      debugger
      const result = await axios.post(`https://api.imgbb.com/1/upload/?key=b07cf430e01f870db9a2d31bd2f2fce9&name=test`, { image })
      console.log(result)
      debugger
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        { msg }
        <input type='file' onInput={handleFileInput}/>
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
