import React from 'react';

export default function SaveState({ name, loadSave, deleteSave }) {
  return (
    <div className='save-state-entry'>
      <h4>{ name }</h4>
      <button onClick={ () => loadSave(name) }>Load</button>
      <button onClick={ () => deleteSave(name) }>Delete</button>
    </div>
  )
};
