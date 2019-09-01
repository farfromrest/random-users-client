import parseUser from '../parseUser'

const rawUser = {
  gender: 'male',
  name: { title: 'mr', first: 'matthew', last: 'anderson' },
  location: {
    street: '6713 carlton avenue',
    city: 'new plymouth',
    state: 'wellington',
    postcode: 74818,
    coordinates: { latitude: '64.8760', longitude: '-63.3162' },
    timezone: { offset: '+7:00', description: 'Bangkok, Hanoi, Jakarta' }
  },
  email: 'matthew.anderson@example.com',
  login: {
    uuid: 'b0da19eb-aca7-4e8e-a307-5bfccb6f7532',
    username: 'beautifulladybug422',
    password: 'caravan',
    salt: 'NXOB6F5O',
    md5: '3cc75b46b8661864a78fe45af4c2d1c4',
    sha1: 'a65442602bd0c590d4549ff988ea53a01df4f867',
    sha256: 'fc24fc499fb5567b35cb477d0be14afbff42cdec4481947f916a9d8effc981b0'
  },
  dob: { date: '1983-12-04T04:48:56Z', age: 35 },
  registered: { date: '2017-11-11T22:20:53Z', age: 1 },
  phone: '(764)-943-2167',
  cell: '(273)-658-8237',
  id: { name: '', value: null },
  picture: {
    large: 'https://randomuser.me/api/portraits/men/77.jpg',
    medium: 'https://randomuser.me/api/portraits/med/men/77.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/77.jpg'
  },
  nat: 'NZ'
}

describe('parseUser', () => {
  it('will parse the api response to a simplier object', () => {
    expect(parseUser(rawUser)).toEqual({
      id: 'b0da19eb-aca7-4e8e-a307-5bfccb6f7532',
      name: 'matthew anderson',
      email: 'matthew.anderson@example.com',
      phone: '(764)-943-2167',
      photo: 'https://randomuser.me/api/portraits/men/77.jpg',
      city: 'new plymouth',
      state: 'wellington'
    })
  })
})
