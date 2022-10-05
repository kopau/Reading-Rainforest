import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from './theme.js'

const ListingsButton = (props) => {
  return (
    <ThemeProvider theme={theme}>
      {props.userProfile === props.loggedInProfile ?
      <Grid
        item xs={12}
        container spacing={4}
        direction='row'
      >
        <Grid item>
          <Button
            variant='contained'
            color='mintGreen'
          >
            My Listing
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            color='mintGreen'
          >
            Saved
          </Button>
        </Grid>
      </Grid> :
      <Grid
        item
        container spacing={4}
        direction='row'
      >
        <Grid item xs={6}>
          <Button
            variant='contained'
            color='mintGreen'
          >
            Listing
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant='contained'
            color='mintGreen'
          >
            Message
          </Button>
        </Grid>
      </Grid>
      }
    </ThemeProvider>
  )
}

// {props.userProfile === props.loggedInProfile ?
//   <>
//     <Button
//       variant="contained"
//       color="mintGreen"
//     >
//       My Listing
//     </Button>
//     <Button
//       variant="contained"
//       color="mintGreen"
//     >
//       Saved
//     </Button>
//   </> :
//   <>
//     <Button
//       variant="contained"
//       color="mintGreen"
//     >
//       Listing
//     </Button>
//     <Button
//       variant="contained"
//       color="mintGreen"
//     >
//       Message
//     </Button>
//   </>
// }

export default ListingsButton;