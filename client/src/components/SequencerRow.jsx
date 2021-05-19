import React from 'react';
import ReactDOM from 'react-dom';
import * as Tone from 'tone';

class SequencerRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <tr>
        <td><input type='checkbox' /></td>
        <td><input type='checkbox' /></td>
        <td><input type='checkbox' /></td>
        <td><input type='checkbox' /></td>
        <td><input type='checkbox' /></td>
        <td><input type='checkbox' /></td>
        <td><input type='checkbox' /></td>
        <td><input type='checkbox' /></td>
      </tr>
    )
  }
};

export default SequencerRow;