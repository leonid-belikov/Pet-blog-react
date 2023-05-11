import StartPage from '../pages/start'
import AboutPage from '../pages/about'
import DemoMenu from '../pages/demo-menu'
import TasksPage from '../pages/task-manager/tasks'
import EmployeesPage from '../pages/task-manager/employees'
import ToolsPage from '../pages/task-manager/tools'
import NotFoundPage from '../pages/not-found'
import MainLayout from '../common/layouts/main'
import { RouteObject } from 'react-router-dom'


export const DEFAULT_PATH = '/'
export const ABOUT_PATH = '/about'
export const DEMO_MENU_PATH = '/demo'
export const TASK_MANAGER_PATH = '/task-manager'
export const TASKS_PATH = 'tasks'
export const EMPLOYEES_PATH = 'employees'
export const TOOLS_PATH = 'tools'
export const NONEXISTENT_PATH = '/nonexistent'

export type RouteHandle = {
  title?: string
}

const wrapped = (page: JSX.Element) => <MainLayout>{page}</MainLayout>

const routes: Array<RouteObject> = [
  {
    path: DEFAULT_PATH,
    element: <StartPage/>
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
