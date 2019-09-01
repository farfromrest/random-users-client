import React from 'react'

import './style.css'

function UserCard(props) {
  const { name, photo, email, phone, city, state } = props

  return (
    <div className="user-card">
      <header className="user-card__header">
        <button className="user-card__editButton">Edit User</button>
        <div className="user-card__name">{name}</div>
        <div className="user-card__photo">
          <img src={photo} alt={`Photo of ${name}`} />
        </div>
      </header>
      <div className="user-card__email">{email}</div>
      <div className="user-card__email">{phone}</div>
      <div className="user-card__email">
        {city}, {state}
      </div>
    </div>
  )
}

export default UserCard
