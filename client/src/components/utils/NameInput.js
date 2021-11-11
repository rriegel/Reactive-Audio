import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function NameInput({ projectList, saveProject }) {
  const [name, setName] = useState(null);
  const [touched, setTouched] = useState(false);

  const error = name === null;

  const helper = () => {
    let message;
    if (!name) message = 'Enter project name here';
    if (projectList.indexOf(name) !== -1) message = `${name} already exists`;
    return message;
  };

  useEffect(() => helper(), [name]);

  const handleFocus = () => setTouched(true);
  const handleBlur = () => setTouched(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const keyPress = (e) => {
    const enter = 13;
    if (e.keyCode === enter) {
      e.preventDefault();
      saveProject(e.target.value);
      e.target.value = '';
    }
  };

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
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={keyPress}
          error={touched && error}
          helperText={touched && helper()}
        />
      </div>
    </Box>
  );
}
