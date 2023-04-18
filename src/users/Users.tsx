import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export type UserType = {
  id: number,
  name: string
}

function Users() {

  const [users, setUsers] = useState<Array<UserType>>([])

  const loadUsers = async () => {
    const resp = await axios('https://jsonplaceholder.typicode.com/users')
    setUsers(resp.data)
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <div data-testid="users-page">
      Users page
      {users.map(user => (
        <Link
          to={`/users/${user.id}`}
          key={user.id}
          data-testid="user-item">
          {user.name}
        </Link>
      ))}
    </div>
  )
}

export default Users
