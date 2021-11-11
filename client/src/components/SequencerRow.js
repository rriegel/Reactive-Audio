import React from 'react';
import './SequencerRow.css';
import GridBox from './GridBox';
import NoteSelect from './utils/NoteSelect';
import OctaveSelect from './utils/OctaveSelect';

function SequencerRow({
  pattern,
  row,
  boxToggle,
  active,
  notes,
  octaves,
  changeNote,
  changeOctave,
}) {
  return (
    <tr>
      {pattern[row].map((boxValue, key) => (
        <GridBox
          key={key}
          i={key}
          value={boxValue}
          row={row}
          boxToggle={boxToggle}
          active={active}
        />
      ))}
      <td className="selectors">
        <NoteSelect
          boxrow={row.toString()}
          note={notes[row]}
          changeNote={changeNote}
        />
        <OctaveSelect
          boxrow={row.toString()}
          octave={octaves[row]}
          changeOctave={changeOctave}
        />
      </td>
    </tr>
  );
}

export default SequencerRow;
