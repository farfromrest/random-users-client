import React from 'react'

import UserCard from '../UserCard'
import './style.css'

function Users(props) {
  const { users, isLoading } = props

  if (isLoading) {
    return `Fetching users...`
  }

  return (
    <div className="users">
      {users.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  )
}

export default Users
