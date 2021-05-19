import React from 'react';
import * as Tone from 'tone';
import SequencerRow from './SequencerRow.jsx';

class Sequencer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <table id='sequencer'>
        <tbody>
          <SequencerRow />
          <SequencerRow />
          <SequencerRow />
          <SequencerRow />
        </tbody>
      </table>
    )
  }
};

export default Sequencer;