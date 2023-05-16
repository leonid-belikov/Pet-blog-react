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


export enum SkillEnum {
  akita = 'Akita',
  css = 'CSS',
  git = 'Git',
  html = 'HTML',
  jest = 'Jest',
  js = 'JavaScript',
  mysql = 'MySQL',
  php = 'PHP',
  postgresql = 'PostgreSQL',
  python = 'Python',
  react = 'React',
  redux = 'Redux',
  rxjs = 'RxJS',
  ts = 'TypeScript',
  vue = 'Vue',
  vuex = 'Vuex',
  webdriverio = 'WebdriverIO'
}

export type Skill = {
  name: SkillEnum,
  logo: string
}

const skills: Array<Skill> = [
  { name: SkillEnum.akita, logo: akita },
  { name: SkillEnum.css, logo: css },
  { name: SkillEnum.git, logo: git },
  { name: SkillEnum.html, logo: html },
  { name: SkillEnum.jest, logo: jest },
  { name: SkillEnum.js, logo: js },
  { name: SkillEnum.mysql, logo: mysql },
  { name: SkillEnum.php, logo: php },
  { name: SkillEnum.postgresql, logo: postgresql },
  { name: SkillEnum.python, logo: python },
  { name: SkillEnum.react, logo: react },
  { name: SkillEnum.redux, logo: redux },
  { name: SkillEnum.rxjs, logo: rxjs },
  { name: SkillEnum.ts, logo: ts },
  { name: SkillEnum.vue, logo: vue },
  { name: SkillEnum.vuex, logo: vuex },
  { name: SkillEnum.webdriverio, logo: webdriverio },
]

export default skills
