import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import Users from './users/Users'
import UserDetailsPage from './pages/UserDetailsPage'

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
      <Link to="/" data-testid="main-link">main</Link>
      <Link to="/about" data-testid="about-link">about</Link>
      <Link to="/users" data-testid="users-link">users</Link>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:id' element={<UserDetailsPage/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}

export default App
