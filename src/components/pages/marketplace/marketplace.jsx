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
import React, { useCallback, useRef, useState } from "react";
import { showToaster } from "../../../utility";
import { ToastType } from "../../../constants";
import { useNavigate } from "react-router";

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
  const [state , setState] = useState({})

  const navigate = useNavigate();
  localStorage.setItem("lorry_data" , []);

  const save_lorries = useCallback(()=>{
    let lorry = JSON.parse(localStorage.getItem("lorry_data"))||null;
    localStorage.setItem("lorry_data" , JSON.stringify([...lorry , state]));
    console.log(state);
    showToaster(ToastType.info , "Lorry Added")
    navigate('../MyRoutes');
  }, [state])



  

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
          <Select defaultValue="" id="lorry" onChange={e=>setState({...state , lorry:e.target.value})} label="Grouping">
            <MenuItem value=""></MenuItem>
            <ListSubheader>Category 1</ListSubheader>
            <MenuItem value={"LCV"}>LCV</MenuItem>
            <MenuItem value={"Truck"}>Truck</MenuItem>
            <MenuItem value={"Container"}>Container</MenuItem>
            <ListSubheader>Category 2</ListSubheader>
            <MenuItem value={"Trailer"}>Trailer</MenuItem>
            <MenuItem value={"Hyva"}>Hyva</MenuItem>
            <MenuItem value={"Tanker"}>Tanker</MenuItem>
          </Select>
        </FormControl>
          <TextField label="Drop Location"
           variant="outlined" id="drop_location" onChange={e=>setState({...state , drop_location:e.target.value})} />
    
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="grouped-select">City</InputLabel>
          <Select defaultValue="" id="city" onChange={e=>setState({...state , city:e.target.value})} label="Grouping">
            <MenuItem value=""></MenuItem>
            <MenuItem value={"Indore"}>Indore</MenuItem>
            <MenuItem value={"Jabalput"}>Jabalput</MenuItem>
            <MenuItem value={"Bhopal"}>Bhopal</MenuItem>
            
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="grouped-select">Capacity</InputLabel>
          <Select defaultValue="" id="capacity" onChange={e=>setState({...state , capacity:e.target.value})} label="Grouping">
            <MenuItem value=""></MenuItem>
            <ListSubheader>Minimum Quantity</ListSubheader>
            <MenuItem value={"0-5 Ton"}>0-5 Ton</MenuItem>
            <MenuItem value={"5-10 Ton"}>5-10 Ton</MenuItem>
            <MenuItem value={"10-15 Ton"}>10-15 Ton</MenuItem>
            <MenuItem value={"15-20 Ton"}>15-20 Ton</MenuItem>
            <MenuItem value={"20-25 Ton"}>20-25 Ton</MenuItem>
            <MenuItem value={"25+ Ton"}>25+ Ton</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button variant="contained" onClick={()=>save_lorries()} > Book Fare</Button>
    </div>
  );
}
