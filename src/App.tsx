import React from 'react'
import './App.css'
import RouterView from './router/RouterView'
import Navbar from './components/Navbar/Navbar'
import { Counter } from './features/counter/Counter'

/*
function App() {

  const [data, setData] = useState<{} | null>(null)
  const [toggle, setToggle] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  const onClick = () => {
    setToggle(prev => !prev)
  }

  const onInput = event => {
    const _value = event.target.value
    setValue(_value)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({})
    }, 100)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div>
      <h1 data-testid='value-elem'>{ value }</h1>
      { toggle && <div data-testid='toggle-elem'>toggle</div> }
      { data && <div className='color-red'>data</div> }
      <button data-testid='toggle-btn' onClick={ onClick }>click me</button>
      <input type="text" placeholder="input value..." value={ value } onInput={ onInput }/>
    </div>
  )
}
*/

function App() {
  return (
    <div>
      <Navbar/>
      <Counter/>
      <RouterView/>
    </div>
  )
}

export default App
