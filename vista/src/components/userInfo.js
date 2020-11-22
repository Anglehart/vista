import React from 'react';

const UserInfo = (props) => {
  
  function get_age(date) {
    if (!date) return '';
    return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000) | 0);
  }

  return (
    <div className="user-info">
      <div className="user-info__title">
        <div>Информация о пациенте</div>
        <div className="user-info__icon">&lt;</div>
      </div>
      <ul>
        <li>ФИО: <span className="user-info__line">{props.current.firstName} {props.current.patrName} {props.current.lastName}</span></li>
        <li>Возраст: <span className="user-info__line">{get_age(props.current.birthDate)}</span></li>
        <li>Диагноз: <span className="user-info__line">{props.current.diagnosis}</span></li>
      </ul>
    </div>
  )
};

export default UserInfo;