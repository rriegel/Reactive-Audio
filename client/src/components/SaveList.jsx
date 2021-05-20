import React from 'react';
import SaveState from './SaveState.jsx';

class SaveList extends React.Component {
  constructor(props) {
    super(props);
  }
  renderList() {
    return (
      <ul>
      {this.props.saves.map((save, key) => {
        return (
          < SaveState key={key} name={save} loadSave={this.props.loadSave} deleteSave={this.props.deleteSave}/>
        )
      })}
      </ul>
    )
  }
  render() {
    if (this.props.saves.length > 0) {
      return (
        <div>
          <h2>Saved Projects</h2>
          { this.renderList() }
        </div>
      )
    } else {
      return (
        <div>
          <h2>Saved Projects</h2>
          <h4>no saved projects</h4>
        </div>
      )
    }

  }
};

export default SaveList;