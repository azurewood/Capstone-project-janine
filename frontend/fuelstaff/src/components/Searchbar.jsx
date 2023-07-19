import React from 'react';
import { Container, TextField } from "@mui/material";
import './Search.css'

export default function SearchBar({ setSearchQuery }) {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="search-container">
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <TextField
            type="search"
            id="search"
            label="Search"
            placeholder="What would you like to eat today?"
            sx={{ width: 800 }}
            onChange={handleSearchChange} // Pass the search query back to parent
          />
        </Container>
      </div>
    </>
  );
}

