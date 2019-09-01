import React from 'react'

import { SORT_BY } from '../../constants'
import style from './style.module.css'

function SortBox(props) {
  const { sortBy, ...rest } = props
  const buttonText = (sortBy => {
    switch (sortBy) {
      case SORT_BY.NAME:
        return 'Sorted by name'
      case SORT_BY.NAME_REVERSE:
        return 'Sorted by name in reverse'
      default:
        return 'Unsorted'
    }
  })(sortBy)

  return (
    <button {...rest} className={style.button}>
      {buttonText}
    </button>
  )
}

export default SortBox
