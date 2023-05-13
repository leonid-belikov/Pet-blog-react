import React from 'react'
import styles from './style.module.scss'
import portrait from '../../assets/images/portrait.svg'


function AboutPage() {
  return (
    <div data-testid='about-page' className={styles['about-page']}>
      <div data-testid='portrait' className={styles['portrait']}>
        <img src={portrait} alt=''/>
      </div>
    </div>
  )
}

export default AboutPage
