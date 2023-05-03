import { screen } from '@testing-library/react'
import { renderApp } from './setup/test/renderApp'
import {
  ABOUT_PATH,
  DEFAULT_PATH,
  DEMO_MENU_PATH, EMPLOYEES_PATH,
  NONEXISTENT_PATH,
  TASK_MANAGER_PATH,
  TASKS_PATH, TOOLS_PATH
} from './router/routes'

describe('App component', () => {
  const fullTasksPath = `${TASK_MANAGER_PATH}/${TASKS_PATH}`
  const fullEmployeesPath = `${TASK_MANAGER_PATH}/${EMPLOYEES_PATH}`
  const fullToolsPath = `${TASK_MANAGER_PATH}/${TOOLS_PATH}`

  it('should render the app container', () => {
    renderApp()
    expect(screen.getByTestId('app')).toBeInTheDocument()
  })

  it('should render the main page by default', () => {
    renderApp(DEFAULT_PATH)
    expect(screen.getByTestId('main-page')).toBeInTheDocument()
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
    expect(screen.getByTestId('tasks-page')).toBeInTheDocument()
  })

  it("should render the task-manager-employees page with route '/task-manager/employees'", () => {
    renderApp(fullEmployeesPath)
    expect(screen.getByTestId('employees-page')).toBeInTheDocument()
  })

  it("should render the task-manager-tools page with route '/task-manager/tools'", () => {
    renderApp(fullToolsPath)
    expect(screen.getByTestId('tools-page')).toBeInTheDocument()
  })

  it("should render the not-found page with route '/nonexistent'", () => {
    renderApp(NONEXISTENT_PATH)
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
  })
})
