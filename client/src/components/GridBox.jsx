import React from 'react';
import './GridBox.css';
import classNames from 'classnames';

export default function GridBox({ i, value, row, boxToggle }) {

  const boxClasses = classNames({
    "box": true,
    "clicked": value === 1
  });

  return (
    <td>
      <div
        className={ boxClasses }
        onClick={ () => { boxToggle(row, i) } }>
      </div>
    </td>
  )
};
