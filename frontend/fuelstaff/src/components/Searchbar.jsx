import { Container, TextField } from "@mui/material";
import './Search.css'

export default function SearchBar() {
  return (
    <>
    <div className="search-container">
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <TextField  type="search" id="search" label="Search" sx={{ width: 800 }} />
      </Container>
      </div>
    </>
  );
}

