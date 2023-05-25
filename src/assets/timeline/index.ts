import { SkillEnum } from '../skills'


enum Align {
  Left = 'left',
  Right = 'right',
}

export type TimelineStep = {
  id: number,
  skills: Array<SkillEnum>,
  alignment: Align,
  skillsPosition: Align,
  description: string,
  commercial: boolean,
  year?: number,
}

const timeline: Array<TimelineStep> = [
  {
    id: 1,
    skills: [SkillEnum.html, SkillEnum.css],
    alignment: Align.Right,
    skillsPosition: Align.Left,
    description: 'I got the idea to figure out how websites work, so I started learning HTML and CSS on my own in my spare time. You can find <a href=\'https://github.com/leonid-belikov/starnight\' target=\'_blank\' rel=\'noopener noreferrer\'>here</a> one of my projects from that time.',
    commercial: false,
    year: 2017
  },
  {
    id: 2,
    skills: [SkillEnum.js, SkillEnum.git],
    alignment: Align.Left,
    skillsPosition: Align.Right,
    description: 'I decided to delve into web development, so I took a professional retraining course in web development at <a href=\'https://en.itmo.ru\' target=\'_blank\' rel=\'noopener noreferrer\'>ITMO University</a>. The first part of training consisted of learning frontend technologies such as HTML, CSS, JavaScript, and related ones such as Git.',
    commercial: false,
    year: 2018
  },
  {
    id: 3,
    skills: [SkillEnum.php, SkillEnum.mysql],
    alignment: Align.Right,
    skillsPosition: Align.Left,
    description: 'The second part was dedicated to the backend technologies. I learned PHP and MySQL. And in the end I applied all my knowledge in <a href=\'https://github.com/leonid-belikov/Studio_project\' target=\'_blank\' rel=\'noopener noreferrer\'>the graduate work</a>. Also at that time I realized that I mostly prefer dealing with the frontend :)',
    commercial: false
  },
  {
    id: 4,
    skills: [SkillEnum.html, SkillEnum.css, SkillEnum.js],
    alignment: Align.Left,
    skillsPosition: Align.Left,
    description: 'I switched my job and started working as a frontend developer at Tensor, a large company that develops business process automation tools. My main responsibility was fixing bugs under the guidance of a teamlead.',
    commercial: true
  },
  {
    id: 5,
    skills: [SkillEnum.python, SkillEnum.postgresql],
    alignment: Align.Left,
    skillsPosition: Align.Right,
    description: 'Later, the teamlead suggested that I deal with the backend as well. I agreed and started figuring it out and learning Python and PostgreSQL at the same time.',
    commercial: true,
    year: 2019
  },
  {
    id: 6,
    skills: [SkillEnum.react, SkillEnum.redux],
    alignment: Align.Left,
    skillsPosition: Align.Right,
    description: 'After half a year I was again convinced that I prefer the frontend :)<br>I started learning React and Redux on my own and developed <a href=\'https://github.com/leonid-belikov/resume\' target=\'_blank\' rel=\'noopener noreferrer\'>a portfolio</a> using them.',
    commercial: false
  },
  {
    id: 7,
    skills: [SkillEnum.react, SkillEnum.ts, SkillEnum.rxjs, SkillEnum.akita],
    alignment: Align.Right,
    skillsPosition: Align.Left,
    description: 'I found a new job in a small startup, that develops an online marketplace. I immediately became the single frontend developer because the previous developer was a freelancer and he stopped working with this company.<br><br>So I got two project to deal with. The first was a private account for visitors. It was developed with React, TypeScript and quite unusual state manager Akita in combination with RxJS. That set of technologies seemed too complicated for me, but I successfully figured it out.',
    commercial: true,
    year: 2020
  },
  {
    id: 8,
    skills: [SkillEnum.vue, SkillEnum.vuex],
    alignment: Align.Right,
    skillsPosition: Align.Left,
    description: 'And the second one was an account for administrator and it was developed with Vue and Vuex. That was my first meeting with Vue and I was really impressed. Although, I had to work hard in very beginning to be able to solve issues and learn the whole bunch of unfamiliar technologies at the same time :)',
    commercial: true
  },
  {
    id: 9,
    skills: [SkillEnum.redux],
    alignment: Align.Left,
    skillsPosition: Align.Right,
    description: 'I became a mentor for a new junior frontend developer and the first thing I did was organize a rewrite of our visitors\' account. Finally, I got rid of excessive complexity, removed Akita, RxJS and event bus, and applied Redux instead.',
    commercial: true,
    year: 2021
  },
  {
    id: 10,
    skills: [SkillEnum.vue, SkillEnum.vuex],
    alignment: Align.Left,
    skillsPosition: Align.Right,
    description: 'At the same time I was invited as a part-time frontend developer to another project. It was also a small startup that was developing a tool for automating warehouse processes. I started frontend development from scratch using Vue and Vuex.',
    commercial: true
  },
  {
    id: 11,
    skills: [SkillEnum.jest, SkillEnum.webdriverio],
    alignment: Align.Right,
    skillsPosition: Align.Left,
    description: 'I started developing this project to show my abilities and at the same time to learn and practice with testing frameworks like Jest and WebdriverIO. Development is still ongoing and you can see the source code <a href=\'https://github.com/leonid-belikov/Pet-blog-react\' target=\'_blank\' rel=\'noopener noreferrer\'>here</a>.',
    commercial: false,
    year: 2023
  }
]

export default timeline
