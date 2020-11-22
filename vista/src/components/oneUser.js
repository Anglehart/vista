import React from 'react';

const OneUser = (props) => {
  let classes = '';
  if (props.current.historyNumber === props.value.historyNumber) {
    classes = 'active-row';
  }
  return (
    <tr onClick={() => props.userClick(props.value)} className={classes}>
      <td>{props.value.historyNumber}</td>
      <td>{props.value.firstName} {props.value.patrName} {props.value.lastName}</td>
      <td>{props.value.bedNumber || props.value.cause}</td>
    </tr>
  )
};

export default OneUser;