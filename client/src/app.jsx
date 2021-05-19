import React from 'react';
import ReactDOM from 'react-dom';
import * as Tone from 'tone';
import SequencerRow from './components/SequencerRow.jsx';

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
    console.log('playTone');
    this.sampler.triggerAttackRelease(["Bb1", "D2", "F1", "A2"], "2n");

  }


  render() {
    return (
      <div>
        <h1>MVP Audio</h1>
        <button disabled={ !this.state.isLoaded } onClick={ () => {this.playTone()} } >Bb Maj7</button>
        <button onClick={ () => {console.log('no stop yet')} } >Stop</button>
        <table id='sequencer'>
          <tbody>
            <SequencerRow />
            <SequencerRow />
            <SequencerRow />
            <SequencerRow />
          </tbody>
        </table>
      </div>
    )
  }
}















ReactDOM.render(<App />, document.getElementById('app'));