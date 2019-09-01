import React from 'react';

import useRandomUsers from '../../hooks/useRandomUsers';
import Users from '../../components/Users';

function UsersContainer(props) {
  const { isLoading, users } = useRandomUsers();

  return <Users users={users} isLoading={isLoading} />;
}

export default UsersContainer;