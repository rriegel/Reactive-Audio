import React from 'react';
import './GridBox.css';

export default function GridBox({ i, value, row, boxToggle }) {
  return (
    <td>
      <div
        className={ value === 1 ? "box clicked" : "box" }
        onClick={ () => { boxToggle(row, i) } }>
      </div>
    </td>
  )
};
