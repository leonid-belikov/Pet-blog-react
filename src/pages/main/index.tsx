import React from 'react'
import { NavLink } from 'react-router-dom'
import { ABOUT_PATH, DEMO_MENU_PATH } from '../../router/routes'

function MainPage() {
  return (
    <div data-testid='main-page'>
      <h1>main-page</h1>
      <NavLink to={ABOUT_PATH}>
        <button className='btn' data-testid='about-link'>
          About me
        </button>
      </NavLink>
      <NavLink to={DEMO_MENU_PATH}>
        <button className='btn' data-testid='demo-link'>
          Try demo
        </button>
      </NavLink>
    </div>
  )
}

export default MainPage
