import React from 'react';
import ReactDOM from 'react-dom';
import * as Tone from 'tone';
import Sequencer from './components/Sequencer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.playTone = this.playTone.bind(this);
    this.state = { isLoaded: false };

    this.sampler = new Tone.Sampler({
      urls: {
        A1: "A1.mp3",
        A2: "A2.mp3",
      },
      baseUrl: "https://tonejs.github.io/audio/casio/",
      onload: () => {
        this.setState({ isLoaded: true });
      }
    }).toDestination();
  }

  playTone() {
    console.log('playing BbMaj7...');
    this.sampler.triggerAttackRelease(["Bb2", "D2", "F2", "A2"], "2n");

  }


  render() {
    return (
      <div>
        <h1>MVP Audio</h1>
        <button onClick={ () => {console.log('no start yet')} } >Start</button>
        <button disabled={ !this.state.isLoaded } onClick={ () => {this.playTone()} } >Bb Maj7</button>
        <button onClick={ () => {console.log('no stop yet')} } >Stop</button>
        <Sequencer />
      </div>
    )
  }
}















ReactDOM.render(<App />, document.getElementById('app'));