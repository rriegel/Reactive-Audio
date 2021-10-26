import React from 'react';
import * as Tone from 'tone';
import Sequencer from './components/Sequencer.jsx';
import SaveList from './components/SaveList.jsx';
import axios from 'axios';
import NoteSelect from './components/utils/NoteSelect.js';
import OctaveSelect from './components/utils/OctaveSelect.js';
import BPMSlider from './components/utils/BPMSlider.js';

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
      BPM: 120
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
        octaves: res.data[0].octaves
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
    e.preventDefault();
    let nameValue = document.getElementById('savestate-name').value;
    let data = {
      name: nameValue,
      pattern: this.state.checked,
      notes: this.state.notes,
      octaves: this.state.octaves
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
    let BPM = e.target.value;
    this.setState({ BPM: BPM });
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
            <form>
              <input id='savestate-name' type='text' placeholder='project name'></input>
              <button type='submit' onClick={ (e) => {this.saveState(e)} } >Save</button>
            </form>
          </div>
          <BPMSlider current={ this.state.BPM } changeBPM={(e) => this.changeBPM(e)}/>
        </div>

        <div className='sequencer-wrapper'>
          <Sequencer
            notes={ this.state.notes }
            octaves={ this.state.octaves }
            BPM={ this.state.BPM }
            isPlaying={ this.state.isPlaying }
            checked={ this.state.checked }
            boxToggle={ (row, index) => {this.boxToggle(row, index)} }
          />
          <form className='form-wrapper'>
            <table>
              <tbody>
                <tr>
                  <td className="input-box">
                    <NoteSelect boxrow='0' note={this.state.notes[0]} changeNote={ (e) => this.changeNote(e) }/>
                  </td>
                  <td className="input-box">
                    <OctaveSelect boxrow='0' octave={this.state.octaves[0]} changeOctave={ (e) => {this.changeOctave(e)}}/>
                  </td>
                </tr>
                <tr>
                  <td className="input-box">
                    <NoteSelect boxrow='1' note={this.state.notes[1]} changeNote={ (e) => this.changeNote(e) }/>
                  </td>
                  <td className="input-box">
                    <OctaveSelect boxrow='1' octave={this.state.octaves[1]} changeOctave={ (e) => {this.changeOctave(e)}}/>
                  </td>
                </tr>
                <tr>
                  <td className="input-box">
                    <NoteSelect boxrow='2' note={this.state.notes[2]} changeNote={ (e) => this.changeNote(e) }/>
                  </td>
                  <td className="input-box">
                    <OctaveSelect boxrow='2' octave={this.state.octaves[2]} changeOctave={ (e) => {this.changeOctave(e)}}/>
                  </td>
                </tr>
                <tr>
                  <td className="input-box">
                    <NoteSelect boxrow='3' note={this.state.notes[3]} changeNote={ (e) => this.changeNote(e) }/>
                  </td>
                  <td className="input-box">
                    <OctaveSelect boxrow='3' octave={this.state.octaves[3]} changeOctave={ (e) => {this.changeOctave(e)}}/>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        <SaveList
          saves={this.state.savestates}
          loadSave={(stateName) => { this.loadSave(stateName) }}
          deleteSave={(stateName) => { this.deleteSave(stateName) }}
        />
      </div>
    )
  }
}

export default App;