import React from 'react'
import skills, { SkillEnum } from './index'
import styles from './style.module.scss'
import { Tooltip } from 'antd'


type Data = {
  name: SkillEnum
  size?: number
  onClick?: () => void
}

function SkillLogo(props: Data) {
  const skill = skills.find(item => item.name === props.name)
  if (!skill) return null

  const classList = [styles['skill-logo']]
  if (styles[`${props.name}-logo`]) classList.push(styles[`${props.name}-logo`])
  if (props.onClick) classList.push(styles[`clickable`])

  const style: React.CSSProperties = {}
  if (props.size) {
    style.width = props.size
    style.height = props.size
  }

  return (
    <Tooltip title={skill.name} arrow={false} placement={'bottom'}>
      <div
        data-testid={`${props.name}-logo`}
        style={style}
        className={classList.join(' ')}
        onClick={props.onClick}>
        <img src={skill.logo} alt=''/>
      </div>
    </Tooltip>
  )
}

export default SkillLogo
