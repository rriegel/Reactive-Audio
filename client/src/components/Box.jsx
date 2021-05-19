import React from 'react';
import * as Tone from 'tone';

class Box extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <td><input type='checkbox' onClick={ this.props.boxToggle }/></td>
    )
  }
};

export default Box;