import { FETCHED_USERS, UPDATE_USER } from './actions'

export const initialState = { ids: [], entities: {} }

// Reducer for users with ids in an array and entities
// being a object whos keys are the ids to allow for
// quicker updates.
function reducer(state, action) {
  switch (action.type) {
    case FETCHED_USERS:
      return action.payload.reduce((acc, user) => {
        acc.ids.push(user.id)
        acc.entities[user.id] = user
        return acc
      }, initialState)

    case UPDATE_USER:
      const { id, user } = action.payload
      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: {
            ...state.entities[id],
            ...user
          }
        }
      }
    default:
      return state
  }
}

export default reducer
