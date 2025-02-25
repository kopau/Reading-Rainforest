import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from './theme.js'

const UserInfo = () => {

  return (
    <Grid
      item
      container
      direction='column'
      alignItems='center'
      justifyContent='center'
    >
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            pt: '1vh',
            pb: '1vh'
          }}
        >
          <Grid
            item xs
            alignItems='center'
            justifyContent='center'
          >
            <img
              alt='profile-pic'
              src='data:image/jpeg;base64,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'
              style={{ borderRadius: '50%', width: 200, height: 200, justifyContent: 'center' }}
            />
          </Grid>
        </Box>
        <Box
          sx={{
            width: '80%'
          }}
          backgroundColor='columbiaBlue.main'
          align='center'
        >
          <Box
            sx={{
              width: '80%',
              padding: 2
            }}
          >
            <Grid
              item
              backgroundColor='white'
              align='center'
              justifyContent='center'
            >
              Username
            </Grid>
          </Box>
          <Box
            sx={{
              width: '80%',
            }}
          >
            <Grid
              item
              align='center'
              justifyContent='center'
            >
              Ratings
            </Grid>
          </Box>
          <Box
            sx={{
              width: '80%',
              padding: 2
            }}
          >
            <Grid
              item
              backgroundColor='white'
              align='center'
              justifyContent='center'
              height='auto'
            >
              <Typography
                variant='h6'
              >
                About Me
              </Typography>
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </Grid>
    // <>
    //   <Grid
    //     item
    //   >
    // <img
    //   alt='profile-pic'
    //   src='data:image/jpeg;base64,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'
    //   style={{borderRadius: '50%', width: 200, height: 200, justifyContent: 'center'}}
    // />
    //   </Grid>
    //   <Grid item>Username</Grid>
    //   <Grid item>Rating</Grid>
    //   <Grid item>About Me</Grid>
    // </>
  )
}

export default UserInfo;