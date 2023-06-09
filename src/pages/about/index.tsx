import React, { useCallback } from 'react'
import styles from './style.module.scss'
import './adaptive.scss'
import portrait from '../../assets/images/portrait.svg'
import image from '../../assets/images/Typing_man.svg'
import GradientBorderButton from '../../common/components/gradient-border-button'
import socnets from '../../assets/socnets'
import SkillSet from '../../common/components/skill-set'
import Timeline from './components/timeline'
import { openLinkInNewTab, scrollToElementById } from '../../common/utils/helpers'


function AboutPage() {
  const linkedin = socnets.find(item => item.name === 'linkedin')?.link

  const getExperienceValue = () => {
    const now = new Date()
    return now.getFullYear() - 2018
  }

  const handleContactBtnClick = useCallback(() => {
    if (!linkedin) return
    openLinkInNewTab(linkedin)
  }, [linkedin])

  const handleLearnBtnClick = useCallback(() => {
    scrollToElementById('timeline')
  }, [])

  return (
    <div data-testid='about-page' className={styles['about-page'] + ' about-page'}>
      <div data-testid='portrait' className={styles['portrait']}>
        <div className={styles['img-wrap']}>
          <div className={styles['img-wrap-2']}>
            <img src={portrait} alt=''/>
          </div>
        </div>
      </div>
      <div data-testid='description-card-hello' className={styles['description-card'] + ' description'}>
        <div className={styles['title']}>
          <span>Hi, I'm Leonid</span>
          <span>Frontend web developer</span>
        </div>
        <GradientBorderButton
          className={styles['contact-btn'] + ' contact-btn'}
          text='Contact me'
          width={150}
          onClick={handleContactBtnClick}/>
      </div>
      {/*TODO: Redesign this section*/}
      <div className={styles['skills-info'] + ' skills-info'}>
        <SkillSet/>
        <div data-testid='experience' className={styles['experience']}>
          <div className={styles['title']}>
            Experience
          </div>
          <div className={styles['figure']}>
            <div className={styles['value']}>
              {getExperienceValue()}
            </div>
            <div className={styles['units']}>
              years
            </div>
          </div>
          <div className={styles['picture']}>
            <img src={image} alt=''/>
          </div>
          <div className={styles['learn-more-btn']}>
            <GradientBorderButton
              text='Learn more'
              background='light'
              width={150}
              onClick={handleLearnBtnClick}/>
          </div>
        </div>
      </div>
      {/*TODO: Add card titles*/}
      <div data-testid='description-card-1' className={styles['description-card'] + ' description'}>
        <div className={styles['title']}>
          If you are hiring
        </div>
        <div className={styles['text']}>
          I made this site to show my abilities and to tell a little about my skills and experience. I'm currently looking for a new job, so if you're hiring, maybe this is a beginning of our cooperation. If not, please share this link with someone who is looking for a frontend developer and feel free to add me in your connections on <a href={linkedin || '#'} target='_blank' rel='noopener noreferrer'>linkedin.com</a>. It would be really helpful for me, and I'll be very grateful ^_^
        </div>
      </div>
      <div data-testid='description-card-2' className={styles['description-card'] + ' description'}>
        <div className={styles['title']}>
          Look at my work
        </div>
        <div className={styles['text']}>
          Now I'm leading frontend development on my current company. And here are some of the sites I'm responsible for: <a href='https://lk.app-work.org' target='_blank' rel='noopener noreferrer'>app-work.org</a>, <a href='https://developer.get-work.app/en/login' target='_blank' rel='noopener noreferrer'>get-work.app</a>. Unfortunately, I can't present their source code because of NDA, but you can get the source code of current site <a href='https://github.com/leonid-belikov/Pet-blog-react' target='_blank' rel='noopener noreferrer'>here</a>.
        </div>
      </div>
      <div data-testid='description-card-3' className={styles['description-card'] + ' description'}>
        <div className={styles['title']}>
          What's the matter?
        </div>
        <div className={styles['text']}>
          Probably you would like to wonder why I decided to change my job. Well, the answer is quite clear. I'm from Russia, and I was forced to leave this country last year because of its inhuman aggression against Ukraine. Now I live in Turkey and would like to stop any relationships with the state of Russia. And on the other hand, I feel like I'm ready for more challenging projects.
        </div>
      </div>
      <div data-testid='description-card-4' className={styles['description-card'] + ' description'}>
        <div className={styles['title']}>
          PS
        </div>
        <div className={styles['text']}>
          Please do not judge me strictly for the design :) I am not a designer.
        </div>
      </div>
      <Timeline/>
    </div>
  )
}

export default AboutPage
