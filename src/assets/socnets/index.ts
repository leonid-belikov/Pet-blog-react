export type SocNet = {
  name: string,
  link: string,
  action: 'move' | 'copy'
}

const socnets: Array<SocNet> = [
  {
    name: 'github',
    link: 'https://github.com/leonid-belikov',
    action: 'move'
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/belikov-frontend',
    action: 'move'
  },
  {
    name: 'leetcode',
    link: 'https://leetcode.com/Leonid88',
    action: 'move'
  },
  {
    name: 'gmail',
    link: 'lifeisgym@gmail.com',
    action: 'copy'
  },
]

export default socnets
