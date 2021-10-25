import React from 'react';
import './Box.css';
import * as Tone from 'tone';

function Box ({ i, value, row, boxToggle }) {
  return (
    <td>
      <div
        className={ value === 1 ? "box clicked" : "box" }
        onClick={ () => {boxToggle(row, i)} }>
      </div>
    </td>
  )
}

export default Box;
