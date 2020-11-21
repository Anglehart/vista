import React from 'react';

const OneUser = (props) => {
  return (
    <tr onClick={() => props.userClick(props.value)}>
      <td>{props.value.historyNumber}</td>
      <td>{props.value.firstName} {props.value.patrName} {props.value.lastName}</td>
      <td>{props.value.bedNumber || props.value.cause}</td>
    </tr>
  )
};

export default OneUser;