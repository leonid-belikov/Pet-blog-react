import React from 'react'
import socnets, { SocNet } from '../../../assets/socnets'
import GithubLogo from '../../../assets/socnets/GithubLogo'
import LeetcodeLogo from '../../../assets/socnets/LeetcodeLogo'
import LinkedinLogo from '../../../assets/socnets/LinkedinLogo'
import GmailLogo from '../../../assets/socnets/GmailLogo'
import toast from 'react-hot-toast'
import styles from './style.module.scss'


type Data = {
  fill: string,
  className: string
}

SocNetLinks.defaultProps = {
  fill: '#e4e6ff',
  className: ''
}

function SocNetLinks(props: Data) {

  const getLogo = (name: string): JSX.Element | null => {
    const mapper: {[k: string]: JSX.Element} = {
      github: <GithubLogo fill={props.fill}/>,
      leetcode: <LeetcodeLogo fill={props.fill}/>,
      linkedin: <LinkedinLogo fill={props.fill}/>,
      gmail: <GmailLogo fill={props.fill} className={styles['gmail-logo']}/>
    }
    return mapper[name] || null
  }

  const getHandler = (item: SocNet): (() => void) => {
    const defaultHandler = () => {}
    const moveHandler = (): void => {
      let link: HTMLAnchorElement | null = document.createElement('a')
      link.setAttribute('href', item.link)
      link.setAttribute('target', '_blank')
      link.setAttribute('rel', 'noopener noreferrer')
      link.click()
      link = null
    }
    const copyHandler = (): void => {
      navigator.clipboard.writeText(item.link)
      toast.success('E-mail copied', { id: 'copied' })
    }
    const mapper: {[k: string]: (() => void)} = {
      move: moveHandler,
      copy: copyHandler
    }
    return mapper[item.action] || defaultHandler
  }

  const classList = [
    'soc-net-links',
    props.className,
    styles['soc-net-links']
  ].join(' ')

  return (
    <div className={classList}>
      {socnets.map(item => {
        return (
          <div key={item.name} className={styles['soc-net-link']} onClick={getHandler(item)}>
            {getLogo(item.name)}
          </div>
        )
      })}
    </div>
  )
}

export default SocNetLinks
