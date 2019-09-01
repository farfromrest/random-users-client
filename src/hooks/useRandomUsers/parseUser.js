// The random user api returns a bunch of data we don't need
// and in a more structured shape than we need. This takes
// that response and gives a simple object back of just what
// we want.

function parseUser(user) {
  const { login, name, picture, email, phone, location } = user

  return {
    id: login.uuid,
    name: `${name.first} ${name.last}`,
    photo: picture.large,
    email,
    phone,
    city: location.city,
    state: location.state
  }
}

export default parseUser
