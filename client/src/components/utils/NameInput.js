import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

export default function NameInput({ projectList }) {

  // const error = (name) => {
  //   console.log(name);
  // }
  // const helper = (name) => {
  //   if (!name.length) {
  //     return 'Name cannot be empty';
  //   }
  //   if (projectList.indexOf(name) !== -1) {
  //     return `${name} already exists`;
  //   }
  // }

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      console.log('value', e.target.value);
    }
 }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="name-input"
          placeholder="Project Name"
          onKeyDown={(e) => keyPress(e)}
          // helperText={helper()}
          // error={error(name)}
        />
      </div>
    </Box>
  );
}