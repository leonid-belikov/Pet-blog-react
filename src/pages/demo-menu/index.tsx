import React from 'react'
import styles from './style.module.scss'
import './adaptive.scss'
import menuItems from '../../assets/demo-menu'
import { NavLink } from 'react-router-dom'


function DemoMenu() {
  return (
    <div data-testid='demo-menu-page' className={styles['demo-menu-page'] + ' demo-menu-page'}>
      {menuItems.map(item => (
        <NavLink key={item.title} className={styles['menu-item'] + ' menu-item ' + item.title} to={item.to || ''}>
          <span className={styles['title']}>{ item.title }</span>
          {!item.to && (
            <div className={styles['process-msg']}>Sorry, this section is still under development</div>
          )}
        </NavLink>
      ))}
    </div>
  )
}

export default DemoMenu
