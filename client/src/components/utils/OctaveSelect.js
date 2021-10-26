import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function OctaveSelect({ boxrow, octave, changeOctave }) {
  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth >
      <InputLabel>Octave</InputLabel>
      <Select
        value={ octave }
        inputProps={{ name : boxrow }}
        onChange={ (e) => changeOctave(e) }
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
      </Select>
    </FormControl>
  </Box>
  )
};
