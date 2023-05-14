import akita from './images/logo_akita.png'
import css from './images/logo_css.png'
import git from './images/logo_git.png'
import html from './images/logo_html.png'
import jest from './images/logo_jest.png'
import js from './images/logo_js.png'
import mysql from './images/logo_mysql.png'
import php from './images/logo_php.png'
import postgresql from './images/logo_postgresql.png'
import python from './images/logo_python.png'
import react from './images/logo_react.png'
import redux from './images/logo_redux.png'
import rxjs from './images/logo_rxjs.png'
import ts from './images/logo_ts.png'
import vue from './images/logo_vue.png'
import vuex from './images/logo_vuex.png'
import webdriverio from './images/logo_webdriverio.png'

export type Skill = {
  name: string,
  logo: string
}

const skills: Array<Skill> = [
  { name: 'akita', logo: akita },
  { name: 'css', logo: css },
  { name: 'git', logo: git },
  { name: 'html', logo: html },
  { name: 'jest', logo: jest },
  { name: 'js', logo: js },
  { name: 'mysql', logo: mysql },
  { name: 'php', logo: php },
  { name: 'postgresql', logo: postgresql },
  { name: 'python', logo: python },
  { name: 'react', logo: react },
  { name: 'redux', logo: redux },
  { name: 'rxjs', logo: rxjs },
  { name: 'ts', logo: ts },
  { name: 'vue', logo: vue },
  { name: 'vuex', logo: vuex },
  { name: 'webdriverio', logo: webdriverio },
]

export default skills
