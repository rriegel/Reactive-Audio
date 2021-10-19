import React from 'react';
import * as Tone from 'tone';

const checkedBoxStyle = {
  'borderStyle': 'solid',
  'borderColor': 'black',
  'backgroundColor': 'black',
  'width': '100px',
  'height': '100px',
};

const boxStyle = {
  'borderStyle': 'solid',
  'borderColor': 'black',
  'width': '100px',
  'height': '100px',
};

class Box extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <td>
        <div
          style={this.props.value === 1 ? checkedBoxStyle : boxStyle}
          onClick={ () => {this.props.boxToggle(this.props.row, this.props.i)} }
        >
        </div>
      </td>
    )
  }
};

export default Box;