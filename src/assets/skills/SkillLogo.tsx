import React from 'react'
import skills from './index'
import styles from './style.module.scss'


type Data = {
  name: string
  size?: number
}

function SkillLogo(props: Data) {
  const skill = skills.find(item => item.name === props.name)
  if (!skill) return null

  const classList = [styles['skill-logo']]
  if (styles[`${props.name}-logo`]) classList.push(styles[`${props.name}-logo`])

  const style: React.CSSProperties = {}
  if (props.size) {
    style.width = props.size
    style.height = props.size
  }

  return (
    <div
      data-testid={`${props.name}-logo`}
      style={style}
      className={classList.join(' ')}>
      <img src={skill.logo} alt=''/>
    </div>
  )
}

export default SkillLogo
