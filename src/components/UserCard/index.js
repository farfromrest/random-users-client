import React from "react";

import style from "./style.module.css";

function UserCard(props) {
  const { name, photo, email, phone, city, state } = props;

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <button className="user-card__edit-button">Edit User</button>
        <div className="user-card__name">{name}</div>
        <div className="user-card__photo">
          <img src={photo} alt={name} />
        </div>
      </header>
      <div className="user-card__email">{email}</div>
      <div className="user-card__phone">{phone}</div>
      <div className="user-card__location">
        {city}, {state}
      </div>
    </div>
  );
}

export default UserCard;
