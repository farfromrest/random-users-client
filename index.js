import React from 'react'
import { render } from 'react-dom'

import Users from './containers/Users'
import './style.scss'

function App() {
  return <Users />
}

render(<App />, document.getElementById('root'))
