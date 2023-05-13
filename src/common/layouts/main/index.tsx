import React from 'react'
import '../../style/layouts.scss'
import LogoShort from '../../../assets/brand/LogoShort'
import SocNetLinks from '../../components/soc-net-links'
import { NavLink, useMatches } from 'react-router-dom'
import { DEFAULT_PATH, RouteHandle } from '../../../router/routes'
import LogoFull from '../../../assets/brand/LogoFull'


function MainLayout(props: { children: JSX.Element }) {
  const matches = useMatches()
  const match = matches.find(item => {
    const handle = item.handle as RouteHandle
    return handle?.title
  })
  const handle = match?.handle as RouteHandle
  const title = handle?.title ?? ''


  return (
    <div className='main-layout'>
      <div data-testid='header' className='main-layout__header'>
        <NavLink to={DEFAULT_PATH}>
          <LogoShort/>
        </NavLink>
        <div data-testid='page-title' className='page-title'>{title}</div>
        <SocNetLinks/>
      </div>
      <div className='main-layout__content'>
        <div className='container'>
          {props.children}
        </div>
      </div>
      <div data-testid='footer' className='main-layout__footer'>
        <div className='main-information'>
          <NavLink to={DEFAULT_PATH}>
            <LogoFull/>
          </NavLink>
          <SocNetLinks fill={'#525a9c'}/>
        </div>
        2023
      </div>
    </div>
  )
}

export default MainLayout
