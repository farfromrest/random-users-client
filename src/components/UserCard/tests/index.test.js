import React from 'react'
import { render, fireEvent, getByDisplayValue } from '@testing-library/react'

import UserCard from '../'

const renderComponent = (overrideProps = {}) =>
  render(
    <UserCard
      id={1}
      name="John Doe"
      email="john@doe.com"
      city="austin"
      state="texas"
      phone="111-867-5309"
      {...overrideProps}
    />
  )
describe('UserCard', () => {
  it('should render the user information', () => {
    const { getByText } = renderComponent()

    getByText('John Doe')
    getByText('john@doe.com')
    getByText('austin, texas')
    getByText('111-867-5309')
  })

  it('should allow you to edit the user', () => {
    const onUpdateUser = jest.fn()
    const { getByText, getByDisplayValue } = renderComponent({
      onUpdateUser
    })

    fireEvent.click(getByText('Edit User'))

    fireEvent.change(getByDisplayValue('John Doe'), {
      target: { value: 'Jane Doe' }
    })

    fireEvent.click(getByText('Save User'))

    expect(onUpdateUser).toHaveBeenCalledWith(1, { name: 'Jane Doe' })
  })
})
