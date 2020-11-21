import React from 'react';

const UserInfo = (props) => {
  
  function get_age(date) {
    if (!date) return '';
    return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000) | 0);
  }

  return (
    <div className="user-info">
      <ul>
        <li>ФИО {props.current.firstName} {props.current.patrName} {props.current.lastName}</li>
        <li>Возраст {get_age(props.current.birthDate)}</li>
        <li>Диагноз {props.current.diagnosis}</li>
      </ul>
    </div>
  )
};

export default UserInfo;