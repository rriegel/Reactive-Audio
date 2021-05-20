import React from 'react';
import * as Tone from 'tone';
import SequencerRow from './SequencerRow.jsx';
import StartAudioContext from "startaudiocontext";


class Sequencer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoaded: false }

  }

  togglePlay() {
    if (Tone.Transport.state === 'stopped') {
      const row0 = this.props.checked[0];
      const row1 = this.props.checked[1];
      const row2 = this.props.checked[2];
      const row3 = this.props.checked[3];
      let speed = '8n'
      let index = 0;
      Tone.Transport.scheduleRepeat(time => {
        repeat(time);
      }, speed);

      let repeat = ( time ) => {
        let note = row0[index % row0.length];
        // trigger sampler to conditionally play note
        row0[index] === 1 ? this.props.sampler.triggerAttackRelease(`${this.props.notes[0]}${this.props.octaves[0]}`, '8n', time) : null;
        row1[index] === 1 ? this.props.sampler.triggerAttackRelease(`${this.props.notes[1]}${this.props.octaves[1]}`, '8n', time) : null;
        row2[index] === 1 ? this.props.sampler.triggerAttackRelease(`${this.props.notes[2]}${this.props.octaves[2]}`, '8n', time) : null;
        row3[index] === 1 ? this.props.sampler.triggerAttackRelease(`${this.props.notes[3]}${this.props.octaves[3]}`, '8n', time) : null;
        // make sure index stays within bounds
        if (index === row0.length - 1) {
          index = 0
        } else {
          index++;
        }

      }

      Tone.Transport.start();
    } else {
      Tone.Transport.cancel();
      Tone.Transport.stop();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isPlaying !== prevProps.isPlaying) {
      this.togglePlay();
    }
  }
  render() {
    return(
      <table className='sequencer'>
        <tbody>
          <SequencerRow checked={this.props.checked} row='0' boxToggle={ this.props.boxToggle } sampler={this.props.sampler} />
          <SequencerRow checked={this.props.checked} row='1' boxToggle={ this.props.boxToggle } sampler={this.props.sampler} />
          <SequencerRow checked={this.props.checked} row='2' boxToggle={ this.props.boxToggle } sampler={this.props.sampler} />
          <SequencerRow checked={this.props.checked} row='3' boxToggle={ this.props.boxToggle } sampler={this.props.sampler} />
        </tbody>
      </table>
    )
  }
};

export default Sequencer;