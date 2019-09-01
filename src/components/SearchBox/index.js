import React from 'react'

import style from './style.module.css'

function SearchBox(props) {
  return <input type="search" {...props} className={style.input} />
}

export default SearchBox
