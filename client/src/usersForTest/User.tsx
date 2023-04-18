import React, { useCallback } from 'react'
import { UserType } from '../users/Users'


type Data = {
  user: UserType,
  onDelete: (id: number) => void
}

function User(props: Data) {
  const handleClickDelete = () => {
    props.onDelete(props.user.id)
  }

  return (
    <div id='user-element'>
      {props.user.name}
      <button id='user-delete' onClick={handleClickDelete}>
        delete
      </button>
    </div>
  )
}

export default User
