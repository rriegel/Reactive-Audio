import React, { useEffect, useRef } from 'react';
import SequencerRow from './SequencerRow.jsx';
import togglePlay from './utils/togglePlay.js';

function Sequencer({ notes, octaves, BPM, isPlaying, checked, boxToggle }) {

  const usePrevious = (val) => {
    const ref = useRef();
    useEffect(() => ref.current = val);
    return ref.current;
  };
  const prevPlaying = usePrevious(isPlaying);
  useEffect(() => {
    if (prevPlaying !== undefined && isPlaying !== prevPlaying) {
      togglePlay(notes, octaves, BPM, checked);
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
          />
        ))}
      </tbody>
    </table>
  )
};

export default Sequencer;