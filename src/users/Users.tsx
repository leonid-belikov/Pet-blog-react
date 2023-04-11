import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

type User = {
  id: number,
  name: string
}

function Users() {

  const [users, setUsers] = useState<Array<User>>([])

  const loadUsers = async () => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
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
