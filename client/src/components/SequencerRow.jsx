import React from 'react';
import Box from './Box.jsx';
import * as Tone from 'tone';

class SequencerRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }
  render() {
    return(
      <tr>
        {console.log(`row ${this.props.row}`, this.props.checked[this.props.row])}

        {this.props.checked[this.props.row].map((box, index) => {
          return (
            <Box key={index} boxToggle={ this.props.boxToggle } />
          )
        })}
      </tr>
    )
  }
};

export default SequencerRow;