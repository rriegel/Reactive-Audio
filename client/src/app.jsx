import React from 'react';
import * as Tone from 'tone';
import Sequencer from './components/Sequencer.jsx';
import SaveList from './components/SaveList.jsx';
import axios from 'axios';

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
      notes: ['A', 'F', 'D', 'Bb'],
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
    let row = e.target.attributes.boxrow.value;

    let newBoxNote = this.state.notes;
    newBoxNote[row] = note;
    this.setState({
      notes: newBoxNote
    })
  }
  changeOctave(e) {
    let octave = e.target.value;
    let row = e.target.attributes.boxrow.value;

    let newBoxOctave = this.state.octaves;
    newBoxOctave[row] = octave;
    this.setState({
      octaves: newBoxOctave
    })
  }

  render() {
    return (
      <div>
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
                    <td>Note</td>
                    <td>Octave</td>
                </tr>
                <tr>
                  <td className="input-box">
                    <input maxLength='2' boxrow='0' type='text' value={this.state.notes[0]} onChange={ (e) => {this.changeNote(e)}}></input>
                  </td>
                  <td className="input-box">
                    <input maxLength='1' boxrow='0' type='text' value={this.state.octaves[0]} onChange={ (e) => {this.changeOctave(e)}}></input>
                  </td>
                </tr>
                <tr>
                  <td className="input-box">
                    <input maxLength='3' boxrow='1' type='text' value={this.state.notes[1]} onChange={ (e) => {this.changeNote(e)}}></input>
                  </td>
                  <td className="input-box">
                    <input maxLength='1' boxrow='1' type='text' value={this.state.octaves[1]} onChange={ (e) => {this.changeOctave(e)}}></input>
                  </td>
                </tr>
                <tr>
                  <td className="input-box">
                    <input maxLength='3' boxrow='2' type='text' value={this.state.notes[2]} onChange={ (e) => {this.changeNote(e)}}></input>
                  </td>
                  <td className="input-box">
                    <input maxLength='1' boxrow='2' type='text' value={this.state.octaves[2]} onChange={ (e) => {this.changeOctave(e)}}></input>
                  </td>
                </tr>
                <tr>
                  <td className="input-box">
                    <input maxLength='3' boxrow='3' type='text' value={this.state.notes[3]} onChange={ (e) => {this.changeNote(e)}}></input>
                  </td>
                  <td className="input-box">
                    <input maxLength='1' boxrow='3' type='text' value={this.state.octaves[3]} onChange={ (e) => {this.changeOctave(e)}}></input>
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