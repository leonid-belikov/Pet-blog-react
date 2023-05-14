import React from 'react'
import SkillLogo from '../../../assets/skills/SkillLogo'
import styles from './style.module.scss'

function SkillSet() {
  return (
    <div data-testid='skill-set' className={styles['skill-set']}>
      <SkillLogo name='js'/>
      <SkillLogo name='ts'/>
      <SkillLogo name='jest'/>
      <SkillLogo name='react'/>
      <SkillLogo name='vue'/>
      <SkillLogo name='html'/>
      <SkillLogo name='redux'/>
      <SkillLogo name='vuex'/>
      <SkillLogo name='css'/>
    </div>
  )
}

export default SkillSet
