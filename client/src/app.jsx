import React from 'react';
import ReactDOM from 'react-dom';
import * as Tone from 'tone';
import Sequencer from './components/Sequencer.jsx';

document.addEventListener('mousedown', () => {
  if (Tone.context.state !== 'running') Tone.context.resume();
});
const samplerSpecs = {
  urls: {
    A1: "A1.mp3",
    A2: "A2.mp3",
  },
  baseUrl: "https://tonejs.github.io/audio/casio/",
  onload: () => {
    this.setState({
      isLoaded: true
    })
  }
};

const samplers = [
  new Tone.Sampler(samplerSpecs),
  new Tone.Sampler(samplerSpecs),
  new Tone.Sampler(samplerSpecs),
  new Tone.Sampler(samplerSpecs)
];
samplers.forEach(sampler => sampler.toDestination());



class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      isLoaded: false,
      isPlaying: false,
      checked: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ], // starting sequencer pattern
      sequenceLength: 8,
      BPM: 120
    };

    this.sampler = new Tone.Sampler({
      urls: {
        A1: "A1.mp3",
        A2: "A2.mp3",
      },
      baseUrl: "https://tonejs.github.io/audio/casio/",
      onload: () => {
        this.setState({
          isLoaded: true
        })
      }
    }).toDestination();


    this.playTone = this.playTone.bind(this);
    this.startSequencer = this.startSequencer.bind(this);
  }

  playTone() {
    console.log('playing BbMaj7...');
    this.sampler.triggerAttackRelease(["Bb2", "D2", "F2", "A3"], "1n");
  }

  startSequencer() {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying
    }));
  }

  boxToggle(row, index) {
    let newBoxToggle = this.state.checked;
    newBoxToggle[row][index] = newBoxToggle[row][index] === 0 ? 1 : 0;
    this.setState({
      checked: newBoxToggle
    })
  }

  render() {
    return (
      <div>
        <h1>MVP Audio</h1>
        <button onClick={ () => {this.startSequencer()} } >Start</button>
        <button disabled={ !this.state.isLoaded } onClick={ () => {this.playTone()} } >Bb Maj7</button>
        <button onClick={ () => {console.log('no stop yet')} } >Stop</button>
        <Sequencer
          sampler={ this.sampler }
          isPlaying={ this.state.isPlaying }
          checked={ this.state.checked }
          boxToggle={ (row, index) => {this.boxToggle(row, index)} }
        />
      </div>
    )
  }
}















ReactDOM.render(<App />, document.getElementById('app'));