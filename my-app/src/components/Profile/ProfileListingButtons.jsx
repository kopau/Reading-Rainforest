import React, { useState } from 'react';
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from './theme.js'

const ListingsButton = (props) => {
  return (
    <ThemeProvider theme={theme}>
    {props.userProfile === props.loggedInProfile ?
      <>
        <Button
          variant="contained"
          color="mintGreen"
        >
          My Listing
        </Button>
        <Button
          variant="contained"
          color="mintGreen"
        >
          Saved
        </Button>
      </> :
      <>
        <Button
          variant="contained"
          color="mintGreen"
        >
          Listing
        </Button>
        <Button
          variant="contained"
          color="mintGreen"
        >
          Message
        </Button>
      </>
    }
      </ThemeProvider>
  )
}

export default ListingsButton;