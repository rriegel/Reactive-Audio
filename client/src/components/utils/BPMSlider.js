import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

export default function BPMSlider({ current, changeBPM }) {
  return (
    <Box sx={{ width: 300 }}>
      <Typography id="non-linear-slider" gutterBottom>
        {current} BPM
      </Typography>
      <Slider
        aria-label="BPM"
        defaultValue={120}
        valueLabelDisplay="on"
        step={1}
        marks
        min={50}
        max={200}
        onChange={ (e) => changeBPM(e) }
      />
    </Box>
  )
};
