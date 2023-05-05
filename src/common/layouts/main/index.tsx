import React from 'react'
import '../../style/layouts.scss'

function MainLayout(props: { children: JSX.Element }) {
  return (
    <div className='main-layout'>
      <div data-testid='header' className='main-layout__header'>I'm header</div>
      <div className='main-layout__content'>
        <div className='container'>
          {props.children}
        </div>
      </div>
      <div data-testid='footer' className='main-layout__footer'>I'm footer</div>
    </div>
  )
}

export default MainLayout
