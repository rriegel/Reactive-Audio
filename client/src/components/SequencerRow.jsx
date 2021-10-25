import React from 'react';
import Box from './Box.jsx';
import * as Tone from 'tone';

function SequencerRow({checked, row, boxToggle}) {
  return (
    <tr>
      {checked[row].map((boxValue, key) => {
        return (
          <Box key={ key } i={ key } value={ boxValue } row={ row } boxToggle={ boxToggle } />
        )
      })}
    </tr>
  )
};

export default SequencerRow;
