import React from 'react';
import OneUser from './oneUser';

const UserList = (props) => {
  return (
    <div className="users-list">
      <div className="users-list__buttons">
        <div onClick={() => props.handleCategory(1)}>ПРИСУТСТВУЮТ</div>
        <div onClick={() => props.handleCategory(2)}>ВЫБЫВШИЕ</div>
      </div>
      <table>
      <tbody>
        <tr>
          <th>№ ИБ</th>
          <th>ФИО</th>
          <th>{props.category === 1 ? 'Палата' : 'Причина выбывания'}</th>
        </tr>
        {props.list.map((item) => <OneUser key={item.historyNumber} value={item} userClick={props.userClick}/>)}
      </tbody>
      </table>
    </div>
  )
};

export default UserList;