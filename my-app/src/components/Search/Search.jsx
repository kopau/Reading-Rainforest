import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BookCard from "./Card";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const [booksData, setBooksData] = React.useState({});
  const location = useLocation();
  const { searchInput } = location.state;
  console.log("The search input:", searchInput);
  React.useEffect(() => {
    if (searchInput.length !== "") {
      console.log("Search Input:", searchInput);
      axios
        .get(`http://localhost:3002/search/books/${searchInput}`)
        .then((response) => {
          console.log("response:", response.data);
          setBooksData(response.data);
          console.log("Books data:", booksData);
        })
        .catch((error) => console.log(error));
    }
  }, [searchInput]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {booksData.userData ? (
            booksData.userData.map((data, index) => {
              console.log("books data:", booksData.userData);
              return (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <BookCard user={data} book={booksData.bookData} />
                </Grid>
              );
            })
          ) : (
            <p>No Books Found</p>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Search;
