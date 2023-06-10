import React, { useCallback } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Tabs } from 'antd'
import styles from './style.module.scss'
import { EMPLOYEES_PATH, TASK_MANAGER_PATH, TASKS_PATH, TOOLS_PATH } from '../../common/utils/constants'


const tabs: Array<{ key: string, label: string, path: string }> = [
  {
    key: '1',
    label: 'Tasks',
    path: TASK_MANAGER_PATH + '/' + TASKS_PATH
  },
  {
    key: '2',
    label: 'Employees',
    path: TASK_MANAGER_PATH + '/' + EMPLOYEES_PATH
  },
  {
    key: '3',
    label: 'Tools',
    path: TASK_MANAGER_PATH + '/' + TOOLS_PATH
  }
]

function TaskManagerPage() {

  const location = useLocation()
  const navigate = useNavigate()

  const activeTabKey = (() => {
    const tab = tabs.find(item => item.path === location.pathname)
    return tab?.key ?? '1'
  })()

  const handleTabChange = useCallback((tabKey: string) => {
    const path = tabs.find(item => item.key === tabKey)!.path
    navigate(path)
  }, [])

  return (
    <div data-testid='task-manager-page' className={styles['task-manager-page']}>
      <Tabs defaultActiveKey={activeTabKey} items={tabs} onChange={handleTabChange}/>
      <Outlet/>
    </div>
  )
}

export default TaskManagerPage
