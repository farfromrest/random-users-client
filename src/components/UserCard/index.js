import React, { useState, useRef, useEffect } from 'react'

import style from './style.module.css'

function UserCard(props) {
  const { id, photo, email, phone, city, state, onUpdateUser } = props
  const nameInputEl = useRef(null)
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(props.name)

  function handleEditToggle(event) {
    event.preventDefault()

    setIsEditing(currentIsEditing => {
      if (currentIsEditing) {
        onUpdateUser(id, { name })
        return false
      } else {
        return true
      }
    })
  }

  useEffect(() => {
    if (isEditing) {
      nameInputEl.current.focus()
    }
  }, [isEditing])

  function handleNameChange(event) {
    setName(event.currentTarget.value)
  }

  return (
    <div className={style.wrapper} data-is-editing={isEditing}>
      <header className={style.header}>
        <button className={style.editButton} onClick={handleEditToggle}>
          {isEditing ? 'Save' : 'Edit'} User
        </button>
        <div className={style.name}>
          {isEditing ? (
            <form onSubmit={handleEditToggle}>
              <input
                ref={nameInputEl}
                value={name}
                onChange={handleNameChange}
                className={style.nameInput}
              />
            </form>
          ) : (
            name
          )}
        </div>
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
