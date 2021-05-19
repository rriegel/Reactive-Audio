import React from 'react';
import * as Tone from 'tone';
import SequencerRow from './SequencerRow.jsx';

class Sequencer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.sampler = new Tone.Sampler({
      urls: {
        A1: "A1.mp3",
        A2: "A2.mp3",
      },
      baseUrl: "https://tonejs.github.io/audio/casio/",
      onload: () => {
        this.setState({ isLoaded: true });
      }
    });

  }

  play() {
    if (this.props.isPlaying) {
      console.log(this.state);
      console.log(Tone.context.state);
      if (Tone.context.state !== 'running') {
        Tone.start()
        .then(success => {
          Tone.Transport.loop = true;
          Tone.Transport.loopStart = 0;
          Tone.Transport.loopEnd = (this.state.sequenceLength * 30) / this.state.tempo;
          Tone.Transport.start('+0.0');
          console.log('playing');
        })
        .catch(err => console.log('error'))

      }
      const gain = new Tone.Gain(0.6);
      gain.toDestination();

      this.sampler.connect(gain);


    } else {
      Tone.Transport.stop()
      Tone.Transport.loop = false;
      Tone.Transport.loopEnd = 0;
      console.log('stopped');
    }

  }
  componentDidMount() {
    this.play()
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.play();
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