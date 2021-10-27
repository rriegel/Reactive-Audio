import React from 'react';
import GridBox from './GridBox.jsx';
import * as Tone from 'tone';

function SequencerRow({checked, row, boxToggle}) {
  return (
    <tr>
      {checked[row].map((boxValue, key) => {
        return (
          <GridBox
            key={ key }
            i={ key }
            value={ boxValue }
            row={ row }
            boxToggle={ boxToggle }
            highlight={ false }
          />
        )
      })}
    </tr>
  )
};

export default SequencerRow;
