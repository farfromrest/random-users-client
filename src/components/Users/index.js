import React from 'react'

import UserCard from '../UserCard'
import style from './style.module.css'

function Users(props) {
  const { users, isLoading, onUpdateUser, error } = props

  if (isLoading) {
    return <div className={style.status}>Fetching users...</div>
  }

  if (error) {
    return (
      <div className={style.status}>
        Sorry, something went wrong, try again.
      </div>
    )
  }

  if (!users.length) {
    return <div className={style.status}>Sorry, no users found.</div>
  }

  return (
    <div className={style.wrapper}>
      {users.map(user => (
        <UserCard key={user.id} {...user} onUpdateUser={onUpdateUser} />
      ))}
    </div>
  )
}

export default Users
