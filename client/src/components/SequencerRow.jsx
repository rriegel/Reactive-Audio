import React from 'react';
import './SequencerRow.css';
import GridBox from './GridBox.jsx';
import * as Tone from 'tone';
import NoteSelect from './utils/NoteSelect.js';
import OctaveSelect from './utils/OctaveSelect.js';

function SequencerRow({pattern, row, boxToggle, active, notes, octaves, changeNote, changeOctave}) {
  return (
    <tr>
      {pattern[row].map((boxValue, key) => {
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
      <td className="selectors">
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
      </td>
    </tr>
  )
};

export default SequencerRow;
