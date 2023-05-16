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
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar in, viverra duis eleifend sociosqu at tempor risus nam. Dapibus ad tellus primis ridiculus ipsum pharetra ultricies dis eget.',
    commercial: false,
    year: 2017
  },
  {
    id: 2,
    skills: [SkillEnum.js, SkillEnum.git],
    alignment: Align.Left,
    skillsPosition: Align.Right,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar in, viverra duis eleifend sociosqu at tempor risus nam. Dapibus ad tellus primis ridiculus ipsum pharetra ultricies dis eget.',
    commercial: false,
    year: 2018
  },
  {
    id: 3,
    skills: [SkillEnum.php, SkillEnum.mysql],
    alignment: Align.Right,
    skillsPosition: Align.Left,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar in, viverra duis eleifend sociosqu at tempor risus nam. Dapibus ad tellus primis ridiculus ipsum pharetra ultricies dis eget.',
    commercial: false
  },
  {
    id: 4,
    skills: [SkillEnum.html, SkillEnum.css, SkillEnum.js],
    alignment: Align.Left,
    skillsPosition: Align.Left,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar in, viverra duis eleifend sociosqu at tempor risus nam. Dapibus ad tellus primis ridiculus ipsum pharetra ultricies dis eget.',
    commercial: true
  },
  {
    id: 5,
    skills: [SkillEnum.python, SkillEnum.postgresql],
    alignment: Align.Left,
    skillsPosition: Align.Right,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar in, viverra duis eleifend sociosqu at tempor risus nam. Dapibus ad tellus primis ridiculus ipsum pharetra ultricies dis eget.',
    commercial: true,
    year: 2019
  },
  {
    id: 6,
    skills: [SkillEnum.react, SkillEnum.redux],
    alignment: Align.Left,
    skillsPosition: Align.Right,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar in, viverra duis eleifend sociosqu at tempor risus nam. Dapibus ad tellus primis ridiculus ipsum pharetra ultricies dis eget.',
    commercial: false
  },
  {
    id: 7,
    skills: [SkillEnum.react, SkillEnum.ts, SkillEnum.rxjs, SkillEnum.akita],
    alignment: Align.Right,
    skillsPosition: Align.Left,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar in, viverra duis eleifend sociosqu at tempor risus nam. Dapibus ad tellus primis ridiculus ipsum pharetra ultricies dis eget.',
    commercial: true,
    year: 2020
  },
  {
    id: 8,
    skills: [SkillEnum.vue, SkillEnum.vuex],
    alignment: Align.Right,
    skillsPosition: Align.Left,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar in, viverra duis eleifend sociosqu at tempor risus nam. Dapibus ad tellus primis ridiculus ipsum pharetra ultricies dis eget.',
    commercial: true
  },
  {
    id: 9,
    skills: [SkillEnum.redux],
    alignment: Align.Left,
    skillsPosition: Align.Right,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar in, viverra duis eleifend sociosqu at tempor risus nam. Dapibus ad tellus primis ridiculus ipsum pharetra ultricies dis eget.',
    commercial: true,
    year: 2021
  },
  {
    id: 10,
    skills: [SkillEnum.vue, SkillEnum.vuex],
    alignment: Align.Left,
    skillsPosition: Align.Right,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar in, viverra duis eleifend sociosqu at tempor risus nam. Dapibus ad tellus primis ridiculus ipsum pharetra ultricies dis eget.',
    commercial: true
  },
  {
    id: 11,
    skills: [SkillEnum.jest, SkillEnum.webdriverio],
    alignment: Align.Right,
    skillsPosition: Align.Left,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar in, viverra duis eleifend sociosqu at tempor risus nam. Dapibus ad tellus primis ridiculus ipsum pharetra ultricies dis eget.',
    commercial: false,
    year: 2023
  }
]

export default timeline
