import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/main'
import NotFoundPage from '../pages/not-found'
import AboutPage from '../pages/about'
import DemoMenu from '../pages/demo-menu'
import {
  ABOUT_PATH,
  DEFAULT_PATH,
  DEMO_MENU_PATH,
  EMPLOYEES_PATH,
  TASK_MANAGER_PATH,
  TASKS_PATH,
  TOOLS_PATH
} from './routes'
import TasksPage from '../pages/task-manager/tasks'
import EmployeesPage from '../pages/task-manager/employees'
import ToolsPage from '../pages/task-manager/tools'

function Router() {
  return (
    <Routes>
      <Route path={DEFAULT_PATH} element={<MainPage/>}/>
      <Route path={ABOUT_PATH} element={<AboutPage/>}/>
      <Route path={DEMO_MENU_PATH} element={<DemoMenu/>}/>
      <Route path={TASK_MANAGER_PATH}>
        <Route path={TASKS_PATH} element={<TasksPage/>}/>
        <Route path={EMPLOYEES_PATH} element={<EmployeesPage/>}/>
        <Route path={TOOLS_PATH} element={<ToolsPage/>}/>
      </Route>
      <Route path='/*' element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default Router
