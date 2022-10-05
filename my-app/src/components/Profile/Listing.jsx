import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    spanishGreen: {
      main: "#058c42",
    },
    deepChampagne: {
      main: "#ffcf9c",
    },
    mintGreen: {
      main: "#9cfc97",
    },
    columbiaBlue: {
      main: "#bbdef0",
    },
    raisinBlack: {
      main: "231f20",
    },
  },
});

const Listing = (props) => {
  return (
    <Box
      sx={{
        border: 1,
        backgroundColor: 'white',
        p: '1vh',
        mt: '1vh',
        mb: '1vh'
      }}>
        {props.listing}
    </Box>
  )
}

export default Listing;