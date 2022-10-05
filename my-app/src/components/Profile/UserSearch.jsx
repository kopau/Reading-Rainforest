import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from './theme.js'


const UserSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleClick = () => {
    // complete function that will provide list of users relevant to search
  }

  return (
    <Grid item xs={12}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Users"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <ThemeProvider theme={theme}>
          <IconButton
            color="spanishGreen"
            sx={{ p: "10px" }}
            aria-label="directions"
            onClick={handleClick}
          >
            <SearchIcon />
          </IconButton>
        </ThemeProvider>
      </Paper>
    </Grid>
  )
}

export default UserSearch;