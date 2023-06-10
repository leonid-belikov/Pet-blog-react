import { render, screen, within } from '@testing-library/react'
import { renderApp } from './setup/test/renderApp'
import {
  ABOUT_PATH,
  DEFAULT_PATH,
  DEMO_MENU_PATH,
  EMPLOYEES_PATH,
  NONEXISTENT_PATH,
  TASK_MANAGER_PATH,
  TASKS_PATH,
  TOOLS_PATH
} from './common/utils/constants'
import App from './App'

describe('App component', () => {
  const fullTasksPath = `${TASK_MANAGER_PATH}/${TASKS_PATH}`
  const fullEmployeesPath = `${TASK_MANAGER_PATH}/${EMPLOYEES_PATH}`
  const fullToolsPath = `${TASK_MANAGER_PATH}/${TOOLS_PATH}`

  it('should render the app container', () => {
    render(<App/>)
    expect(screen.getByTestId('app')).toBeInTheDocument()
  })

  // TODO: Fix all the tests!!!!!!!!!!!!!!!!!!!!

  it('should render the main page by default', () => {
    renderApp(DEFAULT_PATH)
    expect(screen.getByTestId('start-page')).toBeInTheDocument()
  })

  it("should render the about page with route '/about'", () => {
    renderApp(ABOUT_PATH)
    expect(screen.getByTestId('about-page')).toBeInTheDocument()
  })

  it("should render the demo-menu page with route '/demo'", () => {
    renderApp(DEMO_MENU_PATH)
    expect(screen.getByTestId('demo-menu-page')).toBeInTheDocument()
  })

  it("should render the task-manager-tasks page with route '/task-manager/tasks'", () => {
    renderApp(fullTasksPath)
    const taskManagerPage = screen.getByTestId('task-manager-page')
    expect(within(taskManagerPage).getByTestId('tasks-page')).toBeInTheDocument()
  })

  it("should render the task-manager-employees page with route '/task-manager/employees'", () => {
    renderApp(fullEmployeesPath)
    const taskManagerPage = screen.getByTestId('task-manager-page')
    expect(within(taskManagerPage).getByTestId('employees-page')).toBeInTheDocument()
  })

  it("should render the task-manager-tools page with route '/task-manager/tools'", () => {
    renderApp(fullToolsPath)
    const taskManagerPage = screen.getByTestId('task-manager-page')
    expect(within(taskManagerPage).getByTestId('tools-page')).toBeInTheDocument()
  })

  it("should render the not-found page with route '/nonexistent'", () => {
    renderApp(NONEXISTENT_PATH)
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
  })
})
