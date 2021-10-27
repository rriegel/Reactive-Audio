import React from 'react';
import * as Tone from 'tone';
import Sequencer from './components/Sequencer.jsx';
import SaveList from './components/SaveList.jsx';
import axios from 'axios';
import NoteSelect from './components/utils/NoteSelect.js';
import OctaveSelect from './components/utils/OctaveSelect.js';
import BPMSlider from './components/utils/BPMSlider.js';
import NameInput from './components/utils/NameInput.js';

document.addEventListener('mousedown', () => {
  if (Tone.context.state !== 'running') Tone.context.resume();
});

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
      ],
      notes: ['A', 'F', 'D', 'A#'],
      octaves: ['2', '2', '2', '1'],
      savestates: [],
      BPM: 120,
      adjBPM: 120
    };

    this.toggleSequencer = this.toggleSequencer.bind(this);
    this.changeNote = this.changeNote.bind(this);
  }

  loadSave(saveName) {
    axios.get(`/savestates/${saveName}`)
    .then(res => {
      this.setState({
        checked: res.data[0].pattern,
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
      pattern: this.state.checked,
      notes: this.state.notes,
      octaves: this.state.octaves,
      BPM: this.state.BPM
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

  toggleSequencer() {
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
          <h1 className="title">
            Reactive Audio
          </h1>
          <div className="top-buttons">
            <button onClick={ () => {this.toggleSequencer()} }>
              {this.state.isPlaying ? 'Stop' : 'Start'}
            </button>
            <NameInput
              projectList = { this.state.savestates }
              saveProject={(e) => {this.saveState(e)}}
            />
          </div>
          <BPMSlider
            def={ this.state.BPM }
            current={ this.state.adjBPM }
            changeBPM={(e) => this.changeBPM(e)}
          />
        </div>

        <div className='sequencer-wrapper'>
          <Sequencer
            notes={ this.state.notes }
            octaves={ this.state.octaves }
            BPM={ this.state.adjBPM }
            isPlaying={ this.state.isPlaying }
            checked={ this.state.checked }
            boxToggle={ (row, index) => this.boxToggle(row, index) }
          />
          <form className='form-wrapper'>
            <table>
              <tbody>
                {this.state.checked.map((key) => (
                  <tr>
                    <td className="input-box">
                      <NoteSelect
                        boxrow={ key }
                        note={ this.state.notes[key] }
                        changeNote={ (e) => this.changeNote(e) }
                      />
                    </td>
                    <td className="input-box">
                      <OctaveSelect
                        boxrow={ key }
                        octave={ this.state.octaves[key] }
                        changeOctave={ (e) => this.changeOctave(e) }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
        <SaveList
          saves={ this.state.savestates }
          loadSave={ (stateName) => this.loadSave(stateName) }
          deleteSave={ (stateName) => this.deleteSave(stateName) }
        />
      </div>
    )
  }
}

export default App;