import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: any) {
  return `${value}$`;
}

const PriceSlider = () => {
  const [value, setValue] = React.useState([0, 34]);

  const handleChange = (_event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Box >
      {/* <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        text="$"
      /> */}
    </Box>
  );
}

export default PriceSlider