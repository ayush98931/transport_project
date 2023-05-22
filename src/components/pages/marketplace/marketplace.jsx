import {
  Button,
  FormControl,
  Input,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

const myStyle = {
  backgroundImage:
    "url('https://d3ib4ot6oar1ep.cloudfront.net/640/75/webp/banner_image.png')",
  backgroundPosition: "right center",
  backgroundcolor: "#08123b",
  color: "#ffffff",
  marginTop: "0px",
  fontSize: "15px",
  backgroundsize: "150px",
  height: "250px",
  backgroundRepeat: "no-repeat",
  justifyContent : 'center'
};

export default function Marketplace() {
  return (
    <div>
      <div style={myStyle}>
        <h1 style={{ position: "fixed", width: "500px" }}>
          Book from India's top loads and lorries!
        </h1>
      </div>
      <div style={{ display: "flex", flexDirection: "column" , maxWidth:400 }}>
        <h2>Filter By :</h2>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="grouped-select">LorryType</InputLabel>
          <Select defaultValue="" id="grouped-select" label="Grouping">
            <MenuItem value=""></MenuItem>
            <ListSubheader>Category 1</ListSubheader>
            <MenuItem value={1}>LCV</MenuItem>
            <MenuItem value={2}>Truck</MenuItem>
            <MenuItem value={3}>Container</MenuItem>
            <ListSubheader>Category 2</ListSubheader>
            <MenuItem value={4}>Trailer</MenuItem>
            <MenuItem value={5}>Hyva</MenuItem>
            <MenuItem value={6}>Tanker</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="grouped-select">Drop Location</InputLabel>
          <TextField variant="outlined" />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="grouped-select">City</InputLabel>
          <Select defaultValue="" id="grouped-select" label="Grouping">
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>Indore</MenuItem>
            <MenuItem value={2}>Jabalput</MenuItem>
            <MenuItem value={3}>Bhopal</MenuItem>
            
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="grouped-select">Capacity</InputLabel>
          <Select defaultValue="" id="grouped-select" label="Grouping">
            <MenuItem value=""></MenuItem>
            <ListSubheader>Minimum Quantity</ListSubheader>
            <MenuItem value={1}>0-5 Ton</MenuItem>
            <MenuItem value={2}>5-10 Ton</MenuItem>
            <MenuItem value={3}>10-15 Ton</MenuItem>
            <MenuItem value={4}>15-20 Ton</MenuItem>
            <MenuItem value={4}>20-25 Ton</MenuItem>
            <MenuItem value={4}>25+ Ton</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button variant="contained" > Book Fare</Button>
    </div>
  );
}
