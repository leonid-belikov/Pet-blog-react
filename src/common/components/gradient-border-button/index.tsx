import React from 'react'
import styles from './style.module.scss'
import './adaptive.scss'

type Data = {
  text: string,
  background?: 'default' | 'dark' | 'light',
  onClick?: () => void,
  width?: number,
  className?: string
}

GradientBorderButton.defaultProps = {
  background: 'default',
  onClick: () => {},
  width: 140
}

function GradientBorderButton(props: Data) {
  const style = { width: props.width + 'px' }
  const classList = [
    'gradient-border-button',
    styles['gradient-border-button'],
    props.className ?? ''
  ].join(' ')

  return (
    <div
      data-testid='gradient-border-button'
      style={style}
      className={classList}
      onClick={props.onClick}>
      <button className={styles[`${props.background}-bg`]}>
        {props.text}
      </button>
    </div>
  )
}

export default GradientBorderButton
