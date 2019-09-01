import { SORT_BY } from '../../constants'

// Takes the users and returns a sorted/filtered array based
// options passed in.

function usersSelector({ users, searchText = '', sortBy }) {
  const lowerCaseSearchText = searchText.toLowerCase()

  let updatedUsers = [...users] // no mutation ;)

  if (lowerCaseSearchText !== '') {
    // Lower case strings on both sides to be case-insensitive.
    // Only filters on name currently.
    updatedUsers = updatedUsers.filter(user =>
      user.name.toLowerCase().includes(lowerCaseSearchText)
    )
  }

  switch (sortBy) {
    case SORT_BY.NAME:
      updatedUsers.sort((a, b) => a.name.localeCompare(b.name))
      break
    case SORT_BY.NAME_REVERSE:
      updatedUsers.sort((a, b) => b.name.localeCompare(a.name))
      break
    default:
      break
  }

  return updatedUsers
}

export default usersSelector
