import React from 'react';

class SaveState extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='save-state-entry'>
        <h4>{this.props.name}</h4>
        <button onClick={() => {this.props.loadSave(this.props.name)}}>Load</button>
        <button onClick={() => {this.props.deleteSave(this.props.name)}}>Delete</button>
      </div>
    )
  }
};

export default SaveState;