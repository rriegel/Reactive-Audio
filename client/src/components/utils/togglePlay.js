import * as Tone from 'tone';
import { casio } from './sampler';

export default function togglePlay(notes, octaves, BPM, pattern, setActive) {
  if (Tone.Transport.state === 'stopped') {
    const row0 = pattern[0]; const row1 = pattern[1]; const row2 = pattern[2]; const
      row3 = pattern[3];
    let index = 0;
    const speed = '8n';

    const repeat = (time) => {
      // trigger sampler to conditionally play note
      row0[index] === 1 ? casio.triggerAttackRelease(`${notes[0]}${octaves[0]}`, '8n', time) : null;
      row1[index] === 1 ? casio.triggerAttackRelease(`${notes[1]}${octaves[1]}`, '8n', time) : null;
      row2[index] === 1 ? casio.triggerAttackRelease(`${notes[2]}${octaves[2]}`, '8n', time) : null;
      row3[index] === 1 ? casio.triggerAttackRelease(`${notes[3]}${octaves[3]}`, '8n', time) : null;
      // make sure index stays within bounds
      setActive(index);
      if (index === row0.length - 1) index = 0;
      else index += 1;
    };

    Tone.Transport.scheduleRepeat((time) => { repeat(time); }, speed);
    // BPM is determined by parent state
    Tone.Transport.bpm.value = BPM;
    Tone.Transport.start();
  } else {
    Tone.Transport.cancel();
    Tone.Transport.stop();
    setActive(null);
  }
}
