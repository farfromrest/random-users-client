import usersSelector from '../selector'

const users = [{ name: 'Apple' }, { name: 'Cat' }, { name: 'Banana' }]
describe('usersSelectors', () => {
  it('will filter users by name', () => {
    expect(usersSelector({ users, searchText: 'ca' })).toEqual([
      { name: 'Cat' }
    ])
  })
  it('will sort users by name', () => {
    expect(usersSelector({ users, sortBy: 'name' })).toEqual([
      { name: 'Apple' },
      { name: 'Banana' },
      { name: 'Cat' }
    ])
  })
})
