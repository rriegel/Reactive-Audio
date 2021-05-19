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
    console.log(Tone.Transport.state)
    if (Tone.Transport.state === 'stopped') {
      const notes = [
        'C4', 'E4', 'G4',
        'C5', 'E5', 'G5'
      ];
      let speed = '8n'
      let index = 0;
      console.log(Tone.Transport)
      Tone.Transport.scheduleRepeat(time => {
        repeat(time);
      }, "8n");

      let repeat = ( time ) => {
        // console.log("index: " + index + " notes.length: " + notes.length);
        console.log(index % notes.length)
        let note = notes[index % notes.length];
        //console.log(note)
        this.props.sampler.triggerAttackRelease(note, '8n', time);
        index++;
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
      <table id='sequencer'>
        <tbody>
          <SequencerRow checked={this.props.checked} row='0' boxToggle={ this.props.boxToggle } />
          <SequencerRow checked={this.props.checked} row='1' boxToggle={ this.props.boxToggle } />
          <SequencerRow checked={this.props.checked} row='2' boxToggle={ this.props.boxToggle } />
          <SequencerRow checked={this.props.checked} row='3' boxToggle={ this.props.boxToggle } />
        </tbody>
      </table>
    )
  }
};

export default Sequencer;