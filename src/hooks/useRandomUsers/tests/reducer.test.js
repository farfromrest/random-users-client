import { FETCHED_USERS, UPDATE_USER } from '../actions'
import reducer, { initialState } from '../reducer'

describe('reducer', () => {
  describe('FETCHED_USERS', () => {
    it('should add users to the state with an array of ids and and object of entities keyd by id', () => {
      const users = [
        { id: 1, name: 'apple' },
        { id: 2, name: 'banana' },
        { id: 3, name: 'cat' }
      ]
      expect(
        reducer(initialState, { type: FETCHED_USERS, payload: users })
      ).toEqual({
        ids: [1, 2, 3],
        entities: {
          1: { id: 1, name: 'apple' },
          2: { id: 2, name: 'banana' },
          3: { id: 3, name: 'cat' }
        }
      })
    })
  })

  describe('UPDATE_USER', () => {
    it('should update a user', () => {
      expect(
        reducer(
          {
            ids: [1, 2, 3],
            entities: {
              1: { id: 1, name: 'apple' },
              2: { id: 2, name: 'banana' },
              3: { id: 3, name: 'cat' }
            }
          },
          {
            type: UPDATE_USER,
            payload: {
              id: 2,
              user: {
                name: 'pineapple'
              }
            }
          }
        )
      ).toEqual({
        ids: [1, 2, 3],
        entities: {
          1: { id: 1, name: 'apple' },
          2: { id: 2, name: 'pineapple' },
          3: { id: 3, name: 'cat' }
        }
      })
    })
  })
})
