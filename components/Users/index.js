import React from 'react';

import UserCard from '../UserCard/index.js'

function Users(props) {
  const { users, isLoading } = props;

  return <div>{users.map(user => (
    <UserCard key={user.id} {...user} />
  ))}</div>;
}

export default Users;