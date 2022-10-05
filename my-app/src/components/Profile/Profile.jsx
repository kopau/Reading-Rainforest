import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from "@mui/material/styles";

import { theme } from './theme.js'

import UserInfo from './UserInfo.jsx';
import UserSearch from './UserSearch.jsx';
import Listings from './Listings.jsx';

// const theme = createTheme({
//   palette: {
//     spanishGreen: {
//       main: "#058c42",
//     },
//     deepChampagne: {
//       main: "#ffcf9c",
//     },
//     mintGreen: {
//       main: "#9cfc97",
//     },
//     columbiaBlue: {
//       main: "#bbdef0",
//     },
//     raisinBlack: {
//       main: "231f20",
//     },
//   },
// });

const Profile = () => {
  const [booksList, setBooksList] = useState('My Listings') // will toggle to My Listing / Saved
  const [userProfile, setUserProfile] = useState(''); // will change once a user clicks on Profile or clicks on different user profile
  const [loggedInProfile, setLoggedInProfile] = useState('Signed In User ID Name'); // this will be changed once user signs in

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container spacing={4}
      >
        <Grid
          item xs={3}
          container
          direction='row'
          alignItems='center'
          justifyContent='center'
        >
          <Box
            sx={{
              border: 1,
              width: '100%',
              height: 800,
              mt: '2vh',
              ml: '2vh'
            }}
          >
            <UserInfo />
          </Box>
        </Grid>
        <Grid
          item xs={9}
          container
          direction='row'
        >
          <Box
            sx={{
              border: 1,
              width: '100%',
              height: 50,
              p: '1vh',
              mt: '2vh',
              mr: '2vh'
            }}
          >
            <UserSearch />
          </Box>
          <Listings />
        </Grid>
      </Grid>
    </ThemeProvider>
  )

  // return (
  //   <ThemeProvider theme={theme}>
  //     <Grid container spacing={2}>
  //         <Grid
  //           item xs={3}
  //           container
  //           direction='column'
  //         >
  //           <ThemeProvider theme={theme}>
  //             <Box
  //               sx={{
  //                 width: 300,
  //                 height: 300,
  //                 backgroundColor: 'columbiaBlue'
  //               }}>
  //               <UserInfo />
  //             </Box>
  //           </ThemeProvider>
  //         </Grid>
  //         <Grid
  //           item xs={9}
  //           container
  //           direction='column'
  //         >
  //           <Paper>
  //             <UserSearch />
  //             <Listings
  //               userProfile={userProfile}
  //               loggedInProfile={loggedInProfile}
  //             />
  //           </Paper>
  //         </Grid>
  //     </Grid>
  //   </ThemeProvider>
  // )
}

export default Profile;