import React, { useState } from 'react'
import { render } from 'react-dom'

import { SORT_BY } from './constants'
import SearchBox from './components/SearchBox'
import SortBox from './components/SortBox'
import Users from './containers/Users'
import './reset.css'
import './base.css'

function App() {
  const [sortBy, setSortBy] = useState(SORT_BY.UNSORTED)
  const [searchText, setSearchText] = useState('')

  function handleChangeSearchText(event) {
    setSearchText(event.currentTarget.value)
  }

  function handleChangeSortBy() {
    setSortBy(currentSortBy => {
      switch (currentSortBy) {
        case SORT_BY.UNSORTED:
          return SORT_BY.NAME
        case SORT_BY.NAME:
          return SORT_BY.NAME_REVERSE
        default:
          return SORT_BY.UNSORTED
      }
    })
  }

  return (
    <>
      <SearchBox value={searchText} onChange={handleChangeSearchText} />
      <SortBox sortBy={sortBy} onClick={handleChangeSortBy} />
      <Users searchText={searchText} sortBy={sortBy} />
    </>
  )
}

render(<App />, document.getElementById('root'))
