import React, { useState, useEffect, useRef } from 'react';
import './Sequencer.css';
import SequencerRow from './SequencerRow.jsx';
import togglePlay from './utils/togglePlay.js';

function Sequencer({ notes, octaves, BPM, isPlaying, checked, boxToggle, changeNote, changeOctave }) {

  const [active, setActive] = useState(null);

  const usePrevious = (val) => {
    const ref = useRef();
    useEffect(() => ref.current = val);
    return ref.current;
  };
  const prevPlaying = usePrevious(isPlaying);
  useEffect(() => {
    if (prevPlaying !== undefined && isPlaying !== prevPlaying) {
      togglePlay(notes, octaves, BPM, checked, setActive);
    }
  }, [isPlaying]);

  return (
    <table className='sequencer'>
      <tbody>
        {checked.map((row, key) => (
          <SequencerRow
            key={ key }
            checked={ checked }
            row={ key }
            boxToggle={ boxToggle }
            active={ active }
            notes={ notes }
            octaves={ octaves }
            changeNote={ changeNote }
            changeOctave={ changeOctave }
          />
        ))}
      </tbody>
    </table>
  )
};

export default Sequencer;