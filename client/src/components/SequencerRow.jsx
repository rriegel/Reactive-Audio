import React from 'react';
import Box from './Box.jsx';
import * as Tone from 'tone';

class SequencerRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <tr>
        {this.props.checked[this.props.row].map((boxValue, key) => {
          return (
            <Box key={key} i={key} value={boxValue} row={this.props.row} boxToggle={ this.props.boxToggle } />
          )
        })}
      </tr>
    )
  }
};

export default SequencerRow;