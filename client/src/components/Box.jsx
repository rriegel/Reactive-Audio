import React from 'react';
import * as Tone from 'tone';

const hoverBoxStyle = {
 'boxShadow': '0 0 40px #5ED4F3'
};

class Box extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }
  };

  getBoxStyle() {
    return this.props.value === 1 ?
    {
      'backgroundColor': '#5ED4F3',
      'borderStyle': 'solid',
      'borderColor': '#EFEFEF',
      'width': '100px',
      'height': '100px',
    } :
    {
      'borderStyle': 'solid',
      'borderColor': '#EFEFEF',
      'width': '100px',
      'height': '100px',
    };
  }

  toggleHover() {
    this.setState({
      hover: !this.state.hover
    });
  };

  render() {
    return (
      <td>
        <div
          style={ this.state.hover ? {...this.getBoxStyle(), ...hoverBoxStyle} : this.getBoxStyle() }
          onClick={ () => {this.props.boxToggle(this.props.row, this.props.i)} }
          onMouseEnter={ () => this.toggleHover() }
          onMouseLeave={ () => this.toggleHover() }>
        </div>
      </td>
    )
  }
};

export default Box;