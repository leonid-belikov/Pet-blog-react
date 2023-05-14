import React, { useCallback } from 'react'
import styles from './style.module.scss'
import './adaptive.scss'
import portrait from '../../assets/images/portrait.svg'
import GradientBorderButton from '../../common/components/gradient-border-button'
import socnets from '../../assets/socnets'
import SkillSet from '../../common/components/skill-set'


function AboutPage() {
  const handleContactBtnClick = useCallback(() => {
    let element: HTMLAnchorElement | null = document.createElement('a')
    const link = socnets.find(item => item.name === 'linkedin')?.link
    if (!link) return
    element.setAttribute('href', link)
    element.setAttribute('target', '_blank')
    element.setAttribute('rel', 'noopener noreferrer')
    element.click()
    element = null
  }, [])

  return (
    <div data-testid='about-page' className={styles['about-page'] + ' about-page'}>
      <div data-testid='portrait' className={styles['portrait']}>
        <img src={portrait} alt=''/>
      </div>
      <div data-testid='description' className={styles['description'] + ' description'}>
        <div className={styles['title']}>
          <p>
            Hi, I'm Leonid
          </p>
          <p>
            Welcome to my page
          </p>
        </div>
        <div className={styles['text']}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar in, viverra duis eleifend sociosqu at
          tempor risus nam. Dapibus ad tellus primis ridiculus ipsum pharetra ultricies dis eget. Dapibus ad tellus
          primis ridiculus ipsum pharetra ultricies dis eget.
        </div>
        <GradientBorderButton
          className={styles['contact-btn'] + ' contact-btn'}
          text='Contact me'
          background='dark'
          width={150}
          onClick={handleContactBtnClick}/>
      </div>
      <div className={styles['skills-info'] + ' skills-info'}>
        <SkillSet/>
        <div data-testid='experience' className={styles['experience']}>
          Experience
        </div>
      </div>
    </div>
  )
}

export default AboutPage
