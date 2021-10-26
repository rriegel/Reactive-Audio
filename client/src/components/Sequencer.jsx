import React, { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';
import SequencerRow from './SequencerRow.jsx';
import StartAudioContext from "startaudiocontext";
import sampler from './utils/sampler.js';

function Sequencer({ notes, octaves, BPM, isPlaying, checked, boxToggle }) {

  const togglePlay = () => {
    if (Tone.Transport.state === 'stopped') {
      const row0 = checked[0], row1 = checked[1], row2 = checked[2], row3 = checked[3];
      let index = 0;
      let speed = '8n';

      const repeat = (time) => {
        let note = row0[index % row0.length];
        // trigger sampler to conditionally play note
        row0[index] === 1 ? sampler.triggerAttackRelease(`${notes[0]}${octaves[0]}`, '8n', time) : null;
        row1[index] === 1 ? sampler.triggerAttackRelease(`${notes[1]}${octaves[1]}`, '8n', time) : null;
        row2[index] === 1 ? sampler.triggerAttackRelease(`${notes[2]}${octaves[2]}`, '8n', time) : null;
        row3[index] === 1 ? sampler.triggerAttackRelease(`${notes[3]}${octaves[3]}`, '8n', time) : null;
        // make sure index stays within bounds
        if (index === row0.length - 1) index = 0
        else index ++;
      };

      Tone.Transport.scheduleRepeat(time => { repeat(time) }, speed);
      // BPM is determined by parent state
      Tone.Transport.bpm.value = BPM;
      Tone.Transport.start();
    } else {
      Tone.Transport.cancel();
      Tone.Transport.stop();
    }
  };

  const usePrevious = (val) => {
    const ref = useRef();
    useEffect(() => ref.current = val);
    return ref.current;
  };
  const prevPlaying = usePrevious(isPlaying);
  useEffect(() => {
    if (prevPlaying !== undefined && isPlaying !== prevPlaying) {
      togglePlay();
    }
  }, [isPlaying]);

  return (
    <table className='sequencer'>
      <tbody>
        <SequencerRow checked={ checked } row='0' boxToggle={ boxToggle } />
        <SequencerRow checked={ checked } row='1' boxToggle={ boxToggle } />
        <SequencerRow checked={ checked } row='2' boxToggle={ boxToggle } />
        <SequencerRow checked={ checked } row='3' boxToggle={ boxToggle } />
      </tbody>
    </table>
  )
};

export default Sequencer;