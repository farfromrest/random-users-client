import React from 'react'

import './style.css'

function UserCard(props) {
  const { name, photo, email, phone, city, state } = props

  return (
    <div className="user-card">
      <header className="user-card__header">
        <button className={style.editButton}>Edit User</button>
        <div className={style.name}>{name}</div>
        <div className={style.photo}>
          <img src={photo} alt={`Photo of ${name}`} />
        </div>
      </header>
      <div className={style.email}>{email}</div>
      <div className={style.email}>{phone}</div>
      <div className={style.email}>
        {city}, {state}
      </div>
    </div>
  )
}

export default UserCard
