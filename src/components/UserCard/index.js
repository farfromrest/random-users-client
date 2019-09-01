import React from 'react'

import style from './style.module.css'

function UserCard(props) {
  const { name, photo, email, phone, city, state } = props

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <button className={style.editButton}>Edit User</button>
        <div className={style.name}>{name}</div>
        <div className={style.photo}>
          <img src={photo} alt={name} />
        </div>
      </header>
      <div className={style.email}>{email}</div>
      <div className={style.phone}>{phone}</div>
      <div className={style.location}>
        {city}, {state}
      </div>
    </div>
  )
}

export default UserCard
