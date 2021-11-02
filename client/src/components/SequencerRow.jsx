import React from 'react';
import GridBox from './GridBox.jsx';
import * as Tone from 'tone';
import NoteSelect from './utils/NoteSelect.js';
import OctaveSelect from './utils/OctaveSelect.js';

function SequencerRow({checked, row, boxToggle, active, notes, octaves, changeNote, changeOctave}) {
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
            active={ active }
          />
        )
      })}
      <NoteSelect
        boxrow={ row+"" }
        note={ notes[row] }
        changeNote={ changeNote }
      />
      <OctaveSelect
        boxrow={ row+"" }
        octave={ octaves[row] }
        changeOctave={ changeOctave }
      />
    </tr>
  )
};

export default SequencerRow;
