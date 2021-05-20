import React from 'react';

class SaveState extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.name}
        <button onClick={() => {this.props.loadSave(this.props.name)}}>Load</button>
        <button onClick={() => {this.props.deleteSave(this.props.name)}}>Delete</button>
      </div>
    )
  }
};

export default SaveState;