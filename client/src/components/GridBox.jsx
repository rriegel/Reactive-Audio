import React from 'react';
import './GridBox.css';
import classNames from 'classnames';

export default function GridBox({ i, value, row, boxToggle, active }) {

  const boxClasses = classNames({
    "box": true,
    "clicked": value === 1,
    "active": i === active
  });

  return (
    <td>
      <div
        className="inset"
        onClick={ () => { boxToggle(row, i) } }
      >
        <div className={ boxClasses }>
        </div>
      </div>
    </td>
  )
};
