import React, { useState } from 'react'
import { render } from 'react-dom'

import SearchBox from './components/SearchBox'
import Users from './containers/Users'
import './reset.css'
import './base.css'

function App() {
  const [searchText, setSearchText] = useState('')

  function handleChangeSearchText(event) {
    setSearchText(event.currentTarget.value)
  }

  return (
    <>
      <SearchBox value={searchText} onChange={handleChangeSearchText} />
      <Users searchText={searchText} />
    </>
  )
}

render(<App />, document.getElementById('root'))
