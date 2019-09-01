import React from 'react';

import style from './style.module.scss';

console.log(style)
function UserCard(props) {
  const { name, photo, email, phone, city, state } = props
  
  return (
    <div className={style.wrapper}>
      <div className={style.name}{name}
      <img src={photo} />{email} {phone} {city}, {state}
    </div>
  );
}

export default UserCard;