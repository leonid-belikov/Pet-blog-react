import { TASK_MANAGER_PATH, TASKS_PATH } from '../../common/utils/constants'

export type MenuItem = {
  title: string,
  to?: string
}

const menuItems: Array<MenuItem> = [
  {
    title: 'Tasks',
    to: TASK_MANAGER_PATH + '/' + TASKS_PATH
  },
  {
    title: 'Store'
  },
  {
    title: 'Events'
  },
  {
    title: 'Gallery'
  },
  {
    title: 'News'
  },
  {
    title: 'Blog'
  }
]

export default menuItems
