import React from 'react';
import OneUser from './oneUser';

const UserList = (props) => {
  let firstBtn = '';
  let secondBtn = '';
  if (props.category === 1) {
    firstBtn = 'active-btn';
    secondBtn = '';
  } else {
    firstBtn = '';
    secondBtn = 'active-btn';
  }
  
  let list = [];
  if (props.category === 1) {
    list = props.present;
  } else {
    list = props.quitting;
  }
  
  return (
    <div className="users-list">
      <div className="users-list__buttons">
        <div className={firstBtn} onClick={() => props.handleCategory(1)}>ПРИСУТСТВУЮТ({props.present.length || 0})</div>
        <div className={secondBtn} onClick={() => props.handleCategory(2)}>ВЫБЫВШИЕ({props.quitting.length || 0})</div>
      </div>
      <table>
      <tbody>
        <tr>
          <th>№ ИБ</th>
          <th>ФИО</th>
          <th>{props.category === 1 ? 'Палата' : 'Причина выбывания'}</th>
        </tr>
        {list.map((item) => <OneUser key={item.historyNumber} value={item} userClick={props.userClick} current={props.current}/>)}
      </tbody>
      </table>
    </div>
  )
};

export default UserList;