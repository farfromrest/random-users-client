import usersSelector from '../selector'
import { SORT_BY } from '../../../constants'

const users = [{ name: 'Apple' }, { name: 'Cat' }, { name: 'Banana' }]

describe('usersSelectors', () => {
  it('should filter users by name', () => {
    expect(usersSelector({ users, searchText: 'ca' })).toEqual([
      { name: 'Cat' }
    ])
  })

  it('should sort users by name', () => {
    expect(usersSelector({ users, sortBy: SORT_BY.NAME })).toEqual([
      { name: 'Apple' },
      { name: 'Banana' },
      { name: 'Cat' }
    ])
  })

  it('should sort users by name in reverse order', () => {
    expect(usersSelector({ users, sortBy: SORT_BY.NAME_REVERSE })).toEqual([
      { name: 'Cat' },
      { name: 'Banana' },
      { name: 'Apple' }
    ])
  })
})
