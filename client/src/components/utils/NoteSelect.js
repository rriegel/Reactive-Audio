import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function NoteSelect({ boxrow, note, changeNote }) {
  return (
    <Box sx={{ minWidth: 120}}>
    <FormControl fullWidth >
      <InputLabel>Note</InputLabel>
      <Select
        value={ note }
        inputProps={{ name : boxrow }}
        onChange={ (e) => changeNote(e) }
      >
        <MenuItem value={'C'}>C</MenuItem>
        <MenuItem value={'C#'}>C#/Db</MenuItem>
        <MenuItem value={'D'}>D</MenuItem>
        <MenuItem value={'D#'}>D#/Eb</MenuItem>
        <MenuItem value={'E'}>E</MenuItem>
        <MenuItem value={'F'}>F</MenuItem>
        <MenuItem value={'F#'}>F#/Gb</MenuItem>
        <MenuItem value={'G'}>G</MenuItem>
        <MenuItem value={'G#'}>G#/Ab</MenuItem>
        <MenuItem value={'A'}>A</MenuItem>
        <MenuItem value={'A#'}>A#/Bb</MenuItem>
        <MenuItem value={'B'}>B</MenuItem>
      </Select>
    </FormControl>
  </Box>
  )
};
