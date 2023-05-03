import React from 'react'
import styles from './style.module.scss'

type Data = {
  text: string,
  background?: 'default' | 'dark' | 'light',
  onClick?: () => void,
  width?: number
}

GradientBorderButton.defaultProps = {
  background: 'default',
  onClick: () => {},
  width: 120
}

function GradientBorderButton(props: Data) {
  const style = { width: props.width + 'px' }

  return (
    <div
      data-testid='gradient-border-button'
      style={style}
      className={styles['gradient-border-button']}
      onClick={props.onClick}>
      <button className={styles[`${props.background}-bg`]}>
        {props.text}
      </button>
    </div>
  )
}

export default GradientBorderButton
