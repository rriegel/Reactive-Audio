import React from 'react';
import './Box.css';
import * as Tone from 'tone';

function Box ({ value, boxToggle }) {
  return (
    <td>
      <div
        className={ value === 1 ? "box clicked" : "box" }
        onClick={ () => {boxToggle(this.props.row, this.props.i)} }>
      </div>
    </td>
  )
}

export default Box;
