import React from 'react'

import UserCard from '../UserCard'
import style from './style.module.css'

function Users(props) {
  const { users, isLoading } = props

  if (isLoading) {
    return `Fetching users...`
  }

  if (!users.length) {
    return 'No users found.'
  }

  return (
    <div className={style.wrapper}>
      {users.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  )
}

export default Users
