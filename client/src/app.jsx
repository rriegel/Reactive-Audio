import React from 'react';
import './app.css';
import * as Tone from 'tone';
import Sequencer from './components/Sequencer.jsx';
import SaveList from './components/utils/SaveList.js';
import axios from 'axios';
import BPMSlider from './components/utils/BPMSlider.js';
import NameInput from './components/utils/NameInput.js';

document.addEventListener('mousedown', () => {
  if (Tone.context.state !== 'running') Tone.context.resume();
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      pattern: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ],
      notes: ['A', 'F', 'D', 'A#'],
      octaves: ['2', '2', '2', '1'],
      savestates: [],
      BPM: 120,
      adjBPM: 120
    };

    this.changeNote = this.changeNote.bind(this);
  }

  loadSave(saveName) {
    axios.get(`/savestates/${saveName}`)
    .then(res => {
      this.setState({
        name: res.data[0].name,
        pattern: res.data[0].pattern,
        notes: res.data[0].notes,
        octaves: res.data[0].octaves,
        BPM: res.data[0].BPM,
        adjBPM: res.data[0].BPM
      })
    });
  }
  deleteSave(saveName) {
    axios.delete(`/savestates/${saveName}`)
    .then(() => {
      this.getSaveData();
    })
  }
  saveState(e) {
    let nameValue = e;
    let data = {
      name: nameValue,
      pattern: this.state.pattern,
      notes: this.state.notes,
      octaves: this.state.octaves,
      BPM: this.state.adjBPM
    }
    axios.post('/savestates', data)
    .then(() => {
      this.getSaveData();
    })
  }

  getSaveData() {
    axios.get('/savestates')
    .then(res => {
      var saveEntries = [];
      res.data.forEach(save => saveEntries.push(save.name))
      this.setState({
        savestates: saveEntries,
      });
    });
  }

  componentDidMount() {
    this.getSaveData();
  }

  boxToggle(row, index) {
    let newBoxToggle = this.state.pattern;
    newBoxToggle[row][index] = newBoxToggle[row][index] === 0 ? 1 : 0;
    this.setState({
      pattern: newBoxToggle
    })
  }
  changeNote(e) {
    let note = e.target.value;
    let row = e.target.name;
    let newBoxNote = this.state.notes;
    newBoxNote[row] = note;
    this.setState({ notes: newBoxNote });
  }
  changeOctave(e) {
    let octave = e.target.value;
    let row = e.target.name;
    let newBoxOctave = this.state.octaves;
    newBoxOctave[row] = octave;
    this.setState({ octaves: newBoxOctave });
  }
  changeBPM(e) {
    this.setState({ adjBPM: e.target.value });
  }

  render() {
    return (
      <div className="App">

        <div className="menu-bar">
          <div className="top-buttons">
            <NameInput
              projectList = { this.state.savestates }
              saveProject={(e) => {this.saveState(e)}}
            />
          </div>
        </div>

        <div className='sequencer-wrapper'>
          <Sequencer
            notes={ this.state.notes }
            octaves={ this.state.octaves }
            name={ this.state.name || "" }
            BPM={ this.state.BPM }
            adjBPM={ this.state.adjBPM }
            pattern={ this.state.pattern }
            boxToggle={ (row, index) => this.boxToggle(row, index) }
            changeNote={ (e) => this.changeNote(e) }
            changeOctave={ (e) => this.changeOctave(e) }
            changeBPM={ (e) => this.changeBPM(e) }
          />
          <SaveList
            saves={ this.state.savestates }
            loadSave={ (stateName) => this.loadSave(stateName) }
            deleteSave={ (stateName) => this.deleteSave(stateName) }
          />
        </div>
      </div>
    )
  }
}

export default App;