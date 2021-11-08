import React, { useState, useEffect, useRef } from 'react';
import './Sequencer.css';
import SequencerRow from './SequencerRow.jsx';
import BPMSlider from './utils/BPMSlider.js';
import togglePlay from './utils/togglePlay.js';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';

function Sequencer({ notes, octaves, name, BPM, adjBPM, pattern, boxToggle, changeNote, changeOctave, changeBPM }) {

  const [isPlaying, toggleSequencer] = useState(false);

  const [active, setActive] = useState(null);
  const usePrevious = (val) => {
    const ref = useRef();
    useEffect(() => ref.current = val);
    return ref.current;
  };
  const prevPlaying = usePrevious(isPlaying);
  useEffect(() => {
    if (prevPlaying !== undefined && isPlaying !== prevPlaying) {
      togglePlay(notes, octaves, adjBPM, pattern, setActive);
    }
  }, [isPlaying]);

  return (
    <div className="sequencer">

      <div className="top-info">
        <div className="item">
          {isPlaying ?
            <StopIcon
              style={{height: 60, width: 60}}
              className="icon"
              onClick={ () => {toggleSequencer(!isPlaying)} }
            /> :
            <PlayArrowIcon
              style={{height: 60, width: 60}}
              className="icon"
              onClick={ () => {toggleSequencer(!isPlaying)} }
            />
          }
        </div>
        <h1 className="title item">
          Reactive Audio
        </h1>
        <BPMSlider
          className="item"
          def={ BPM }
          name={ name }
          current={ adjBPM }
          changeBPM={ changeBPM }
        />
      </div>

      <table>
        <tbody>
          {pattern.map((row, key) => (
            <SequencerRow
              key={ key }
              pattern={ pattern }
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