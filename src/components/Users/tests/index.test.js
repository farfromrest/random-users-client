import React from 'react'
import { render } from '@testing-library/react'

import Users from '../'

describe('Users', () => {
  it('should render a loading message', () => {
    const { getByText } = render(<Users isLoading />)
    getByText('Fetching users...')
  })

  it('should render a error message', () => {
    const { getByText } = render(<Users error />)
    getByText('Sorry, something went wrong, try again.')
  })

  it('should render users', () => {
    const { getByText } = render(
      <Users users={[{ id: 1, name: 'John Doe' }]} />
    )
    getByText('John Doe')
  })
})
