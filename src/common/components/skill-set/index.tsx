import React from 'react'
import SkillLogo from '../../../assets/skills/SkillLogo'
import styles from './style.module.scss'
import { SkillEnum } from '../../../assets/skills'
import { scrollToElementById } from '../../utils/helpers'

function SkillSet() {
  return (
    <div data-testid='skill-set' className={styles['skill-set']}>
      <SkillLogo name={SkillEnum.js} onClick={() => scrollToElementById('timeline-step-4')}/>
      <SkillLogo name={SkillEnum.ts} onClick={() => scrollToElementById('timeline-step-7')}/>
      <SkillLogo name={SkillEnum.jest} onClick={() => scrollToElementById('timeline-step-11')}/>
      <SkillLogo name={SkillEnum.react} onClick={() => scrollToElementById('timeline-step-7')}/>
      <SkillLogo name={SkillEnum.vue} onClick={() => scrollToElementById('timeline-step-8')}/>
      <SkillLogo name={SkillEnum.html} onClick={() => scrollToElementById('timeline-step-4')}/>
      <SkillLogo name={SkillEnum.redux} onClick={() => scrollToElementById('timeline-step-9')}/>
      <SkillLogo name={SkillEnum.vuex} onClick={() => scrollToElementById('timeline-step-8')}/>
      <SkillLogo name={SkillEnum.css} onClick={() => scrollToElementById('timeline-step-4')}/>
    </div>
  )
}

export default SkillSet
