import React from 'react'

import useRandomUsers from '../../hooks/useRandomUsers'
import Users from '../../components/Users'
import usersSelector from './selector'

function UsersContainer(props) {
  const { searchText, sortBy } = props
  const { isLoading, users } = useRandomUsers()

  return (
    <Users
      users={usersSelector({ users, searchText, sortBy })}
      isLoading={isLoading}
    />
  )
}

export default UsersContainer
