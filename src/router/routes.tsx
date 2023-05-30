import StartPage from '../pages/start'
import AboutPage from '../pages/about'
import DemoMenu from '../pages/demo-menu'
import TasksPage from '../pages/task-manager/tasks'
import EmployeesPage from '../pages/task-manager/employees'
import ToolsPage from '../pages/task-manager/tools'
import NotFoundPage from '../pages/not-found'
import MainLayout from '../common/layouts/main'
import { RouteObject } from 'react-router-dom'
import MediaQueryChecker from '../common/components/media-query-checker'
import {
  ABOUT_PATH,
  DEFAULT_PATH,
  DEMO_MENU_PATH,
  EMPLOYEES_PATH,
  TASK_MANAGER_PATH,
  TASKS_PATH, TOOLS_PATH
} from '../common/utils/constants'


export type RouteHandle = {
  title?: string
}

const wrapped = (page: JSX.Element, mainLayout: boolean = true) => {
  const content = mainLayout ? <MainLayout>{page}</MainLayout> : page
  return <MediaQueryChecker>{content}</MediaQueryChecker>
}

const routes: Array<RouteObject> = [
  {
    path: DEFAULT_PATH,
    element: wrapped(<StartPage/>, false)
  },
  {
    path: ABOUT_PATH,
    element: wrapped(<AboutPage/>),
    handle: { title: 'about me' }
  },
  {
    path: DEMO_MENU_PATH,
    element: wrapped(<DemoMenu/>),
    handle: { title: 'demo' }
  },
  {
    path: TASK_MANAGER_PATH,
    handle: { title: 'task manager' },
    children: [
      {
        path: TASKS_PATH,
        element: wrapped(<TasksPage/>)
      },
      {
        path: EMPLOYEES_PATH,
        element: wrapped(<EmployeesPage/>)
      },
      {
        path: TOOLS_PATH,
        element: wrapped(<ToolsPage/>)
      },
    ]
  },
  {
    path: '/*',
    element: wrapped(<NotFoundPage/>)
  }
]

export default routes
