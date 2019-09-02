import { useEffect, useState, useReducer } from 'react'

import parseUser from './parseUser'
import reducer, { initialState } from './reducer'
import { FETCHED_USERS, UPDATE_USER } from './actions'

const API_URL = `https://randomuser.me/api/`

function useRandomUsers(numberOfResults = 5) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  const [usersState, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch(`${API_URL}?results=${numberOfResults}`)
      .then(results => results.json())
      .then(json => {
        dispatch({
          type: FETCHED_USERS,
          payload: json.results.map(parseUser)
        })
        setIsLoading(false)
      })
      .catch(error => {
        setError(error)
        setIsLoading(false)
      })
  }, [numberOfResults])

  function handleUpdateUser(id, user) {
    dispatch({
      type: UPDATE_USER,
      payload: { id, user }
    })
  }

  return {
    users: usersState.ids.map(id => usersState.entities[id]),
    isLoading,
    onUpdateUser: handleUpdateUser,
    error
  }
}

export default useRandomUsers
