import React from 'react'

import style from './style.module.css'

function SearchBox(props) {
  const { className, ...rest } = props

  return (
    <input
      type="search"
      {...rest}
      className={`${style.input} ${className}`}
      placeholder="Search for users..."
      autoFocus
    />
  )
}

export default SearchBox
