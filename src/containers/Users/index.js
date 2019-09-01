import React from 'react'

import { SORT_BY } from '../../constants'
import useRandomUsers from '../../hooks/useRandomUsers'
import Users from '../../components/Users'

function usersSelector({ users, searchText, sortBy }) {
  const lowerCaseSearchText = searchText.toLowerCase()

  let updatedUsers = [...users]

  if (lowerCaseSearchText !== '') {
    updatedUsers = updatedUsers.filter(user =>
      user.name.toLowerCase().includes(lowerCaseSearchText)
    )
  }

  switch (sortBy) {
    case SORT_BY.NAME:
      updatedUsers.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
      break
    case SORT_BY.NAME_REVERSE:
      updatedUsers.sort((a, b) => {
        return b.name.localeCompare(a.name)
      })
      break
    default:
      break
  }

  return updatedUsers
}

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
