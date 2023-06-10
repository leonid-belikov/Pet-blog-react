import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './style.module.scss'
import LogoShort from '../../assets/brand/LogoShort'
import GradientBorderButton from '../../common/components/gradient-border-button'
import SocNetLinks from '../../common/components/soc-net-links'
import { ABOUT_PATH, DEMO_MENU_PATH } from '../../common/utils/constants'

function StartPage() {
  const classList = [
    'page-container',
    'start-page',
    styles['start-page']
  ].join(' ')

  return (
    <div data-testid='start-page' className={classList}>
      <SocNetLinks className={styles['soc-net-links']} fill={'#525a9c'}/>
      <LogoShort className={styles['start-page-logo']}/>
      <div
        className={styles.title + ' title-name ' + styles.name}
        data-testid='name'>
        LEONID
      </div>
      <div
        className={styles.title + ' title-surname ' + styles.surname}
        data-testid='surname'>
        BELIKOV
      </div>
      <NavLink
        to={ABOUT_PATH}
        data-testid='about-link'
        className={styles['about-link'] + ' about-link'}>
        <GradientBorderButton text='About me'/>
      </NavLink>
      <NavLink
        to={DEMO_MENU_PATH}
        data-testid='demo-link'
        className={styles['demo-link'] + ' demo-link'}>
        <GradientBorderButton text='Try demo'/>
      </NavLink>
    </div>
  )
}

export default StartPage
