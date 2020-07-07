import React from 'react';
import './UserItem.css';
import personUser from '../../../assets/images/ginger.png';

const UserItem = () => {
  return(
    <div className="user-item-container">
      <div className="user-item-messages">
        <label>Mensaje</label>
      </div>
      <img src={personUser} alt=""/>
    </div>
  )
};

export default UserItem;