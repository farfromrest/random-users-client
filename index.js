import React from 'react'
import { render } from 'react-dom'

import Users from './containers/Users'
import './reset.css'
import './base.css'

function App() {
  return <Users />
}

render(<App />, document.getElementById('root'))
