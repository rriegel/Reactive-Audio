import React, { useState, useEffect, useRef } from 'react';
import './Sequencer.css';
import SequencerRow from './SequencerRow.jsx';
import BPMSlider from './utils/BPMSlider.js';
import togglePlay from './utils/togglePlay.js';

function Sequencer({ notes, octaves, name, BPM, adjBPM, isPlaying, checked, boxToggle, changeNote, changeOctave, changeBPM }) {

  const [active, setActive] = useState(null);

  const usePrevious = (val) => {
    const ref = useRef();
    useEffect(() => ref.current = val);
    return ref.current;
  };
  const prevPlaying = usePrevious(isPlaying);
  useEffect(() => {
    if (prevPlaying !== undefined && isPlaying !== prevPlaying) {
      togglePlay(notes, octaves, adjBPM, checked, setActive);
    }
  }, [isPlaying]);

  return (
    <div className="sequencer">
      <BPMSlider
        def={ BPM }
        name={ name }
        current={ adjBPM }
        changeBPM={ changeBPM }
      />
      <table>
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
    </div>
  )
};

export default Sequencer;