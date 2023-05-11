import React from 'react'
import '../../style/layouts.scss'
import LogoShort from '../../../assets/brand/LogoShort'
import SocNetLinks from '../../components/soc-net-links'
import { useMatches } from 'react-router-dom'
import { RouteHandle } from '../../../router/routes'


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
        <LogoShort/>
        <div data-testid='page-title' className='page-title'>{title}</div>
        <SocNetLinks/>
      </div>
      <div className='main-layout__content'>
        <div className='container'>
          {props.children}
        </div>
      </div>
      <div data-testid='footer' className='main-layout__footer'>
        <SocNetLinks/>
      </div>
    </div>
  )
}

export default MainLayout
