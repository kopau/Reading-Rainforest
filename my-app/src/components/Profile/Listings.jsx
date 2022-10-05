import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ListingsButtons from './ProfileListingButtons.jsx';
import Listing from './Listing.jsx';
import AddBookToProfileModal from '../modals/listingToProfile.jsx';

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

const Listings = (props) => {
  const [isListings, setIsListings] = useState(true); // if toggled to false, will show saved instead
  const [listings, setListings] = useState(['listing1', 'listing2', 'listing3']);
  const [savedListings, setSavedListings] = useState([]);

  const toggleListings = () => {
    setIsListings(!isListings)
  }

  return (
    <Box
      sx={{
        border: 1,
        width: '100%',
        height: 700,
        p: '1vh',
        mt: '2vh',
        mr: '2vh'
      }}
    >
      <Box
        backgroundColor='columbiaBlue.main'
        // justify='left'
        // align='center'
        sx={{
          border: 1,
          width: 'fit-content',
          p: '1vh',
          mb: '1vh'
        }}
      >
        <ListingsButtons
          userProfile={props.userProfile}
          loggedInProfile={props.loggedInProfile}
        />
      </Box>
      <Box
        backgroundColor='columbiaBlue.main'
        sx={{
          border: 1,
          p: '1vh',
          mt: '1vh'
        }}
      >
        <Grid
          item xs
          container
          direction='column'
        >
          {isListings
            ? listings.map(listing =>
              <Listing listing={listing} />
            )
            : savedListings.map(listing =>
              <Listing listing={listing} />
            )}
          <AddBookToProfileModal />
        </Grid>
      </Box>
    </Box>
  )
}

export default Listings;