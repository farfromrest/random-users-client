import { useEffect, useState } from 'react';

const API_URL = `https://randomuser.me/api/`

function parseUser(user) {
  const { id, name, picture, email, phone, location } = user;

  return {
    id: id.value,
    name: `${name.first} ${name.last}`,
    photo: picture.large,
    email,
    phone,
    city: location.city,
    state: location.state
  };
}

function useRandomUsers(results = 5) {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}?results=${results}`)
      .then(results => results.json())
      .then((json) => {
        setUsers(json.results.map(parseUser));
        setIsLoading(false);
      });
  }, []);

  return {
    users,
    isLoading
  }
}

export default useRandomUsers;