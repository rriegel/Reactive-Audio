import React from 'react';
import * as Tone from 'tone';

class Box extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <td><input type='checkbox' checked={this.props.value} onChange={ () => {this.props.boxToggle(this.props.row, this.props.i)} }/></td>
    )
  }
};

export default Box;