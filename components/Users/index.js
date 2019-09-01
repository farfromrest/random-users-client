import React from 'react'

import UserCard from '../UserCard'
import style from './style.module.css'

function Users(props) {
  const { users, isLoading } = props

  if (isLoading) {
    return `Fetching users...`
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
