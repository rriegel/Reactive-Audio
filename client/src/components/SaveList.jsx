import React from 'react';
import SaveState from './SaveState.jsx';
/*
class SaveList extends React.Component {
  constructor(props) {
    super(props);
  }
  renderList() {
    return (
      <div className='save-list-container'>
      {this.props.saves.map((save, key) => (
        < SaveState
          key={ key }
          name={ save }
          loadSave={ this.props.loadSave }
          deleteSave={ this.props.deleteSave }/>
      ))}
      </div>
    )
  }
  render() {
    if (this.props.saves.length > 0) {
      return (
        <div>
          <h2>Saved Projects</h2>
          { this.renderList() }
        </div>
      )
    } else {
      return (
        <div>
          <h2>Saved Projects</h2>
          <h4>no saved projects</h4>
        </div>
      )
    }
  }
};
*/

function SaveList({ saves, loadSave, deleteSave }) {

  const renderList = () => {
    return (
      <div className='save-list-container'>
      {saves.map((save, key) => (
        < SaveState
          key={ key }
          name={ save }
          loadSave={ loadSave }
          deleteSave={ deleteSave }/>
      ))}
      </div>
    )
  };

  if (saves.length > 0) {
    return (
      <div>
        <h2>Saved Projects</h2>
        { renderList() }
      </div>
    )
  } else {
    return (
      <div>
        <h2>Saved Projects</h2>
        <h4>no saved projects</h4>
      </div>
    )
  }
};

export default SaveList;