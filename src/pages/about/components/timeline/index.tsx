import React from 'react'
import styles from './style.module.scss'
import './adaptive.scss'
import timeline, { TimelineStep } from '../../../../assets/timeline'
import socnets from '../../../../assets/socnets'
import SkillLogo from '../../../../assets/skills/SkillLogo'
import GradientBorderButton from '../../../../common/components/gradient-border-button'
import image_1 from '../../../../assets/images/Information_tab.svg'
import image_2 from '../../../../assets/images/Hand_coding.svg'
import image_3 from '../../../../assets/images/Bug_fixing.svg'
import image_4 from '../../../../assets/images/Code_typing.svg'
import image_5 from '../../../../assets/images/Flying_without_bg.svg'
import image_6 from '../../../../assets/images/Hacker.svg'
import image_coins from '../../../../assets/images/coins.png'
import { openLinkInNewTab } from '../../../../common/utils/helpers'
import { Tooltip } from 'antd'


function Timeline() {
  const classList = [
    'timeline',
    styles['timeline']
  ].join(' ')

  const handleNewTwistBtnClick = () => {
    const link = socnets.find(item => item.name === 'linkedin')?.link
    if (!link) return
    openLinkInNewTab(link)
  }

  const getStepClassList = (item: TimelineStep): string => {
    return [
      'timeline-step',
      styles['timeline-step'],
      styles[`${item.skillsPosition}-position`],
      styles[`${item.alignment}-align`]
    ].join(' ')
  }

  return (
    <div data-testid='timeline' className={classList} id='timeline'>
      {timeline.map(item => (
        <div
          key={item.id}
          id={'timeline-step-' + item.id}
          className={getStepClassList(item)}>
          <div className={styles['year']}>
            {item.year}
          </div>
          <div className={'info ' + styles['info']}>
            <div className={'skills ' + styles['skills']}>
              {item.commercial && (
                <Tooltip title='Commercial experience' arrow={false}>
                  <img src={image_coins} className={'coins ' + styles['coins']} alt=''/>
                </Tooltip>
              )}
              <div className={'skills-wrap ' + styles['skills-wrap']}>
                {item.skills.map(skill => (
                  <SkillLogo key={skill} name={skill} size={30}/>
                ))}
              </div>
            </div>
            <div className={styles['description']}>
              {item.description}
            </div>
          </div>
        </div>
      ))}
      <GradientBorderButton
        className={'add-twist-btn ' + styles['add-twist-btn']}
        text='Add new twist'
        width={200}
        onClick={handleNewTwistBtnClick}/>
      <img className={styles['image-1']} src={image_1} alt=''/>
      <img className={styles['image-2']} src={image_2} alt=''/>
      <img className={styles['image-3']} src={image_3} alt=''/>
      <img className={styles['image-4']} src={image_4} alt=''/>
      <img className={styles['image-5']} src={image_5} alt=''/>
      <img className={styles['image-6']} src={image_6} alt=''/>
    </div>
  )
}

export default Timeline
