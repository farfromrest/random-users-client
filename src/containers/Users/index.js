import React from 'react'

import useRandomUsers from '../../hooks/useRandomUsers'
import Users from '../../components/Users'

function usersSelector({ users, searchText }) {
  const lowerCaseSearchText = searchText.toLowerCase()

  if (searchText !== '') {
    return users.filter(user => {
      return user.name.toLowerCase().indexOf(lowerCaseSearchText) > -1
    })
  }

  return users
}

function UsersContainer(props) {
  const { searchText } = props
  const { isLoading, users } = useRandomUsers()

  return (
    <Users users={usersSelector({ users, searchText })} isLoading={isLoading} />
  )
}

export default UsersContainer
