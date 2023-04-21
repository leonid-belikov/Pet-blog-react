import React, { useCallback, useEffect, useState } from 'react'
import { UserType } from '../users/Users'
import axios, { AxiosResponse } from 'axios'
import User from './User'

function UsersForTest() {
  const [users, setUsers] = useState<Array<UserType>>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios('https://jsonplaceholder.typicode.com/users')
      .then((response: AxiosResponse<Array<UserType>>) => {
        setTimeout(() => {
          setUsers(response.data)
          setLoading(false)
        }, 1000)
      })
  }, [])

  const onDelete = useCallback((id: number): void => {
    setUsers(users.filter(user => user.id !== id))
  }, [users])

  return (
    <div>
      {loading && <h1 id='users-loading'>Идет загрузка...</h1>}
      {users.length && (
        <div id='users-list'>
          {users.map(user => (
            <User key={user.id} onDelete={onDelete} user={user}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default UsersForTest
