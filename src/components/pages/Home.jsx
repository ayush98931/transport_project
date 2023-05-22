import { Fab, Typography } from "@mui/material";
import React from "react";
import EastIcon from '@mui/icons-material/East';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from "react-router";
import '../../assets/css/signInReg.scss'
import logo from '../../assets/images/logo.png'
import { theme } from "../../constants";
import { useSelector } from "react-redux";
import { showToaster } from "../../utility";



const Home=  props=>{

    const navigate = useNavigate();
    console.log(theme);
    useSelector(state=>console.log(state));

    return (
      <div className="fullContainer">
        <div className="label">
           <img src={logo} />
          <Typography variant="h4">SOC Transport</Typography>
        </div>
        
        <div className="buttonHolder">
          <Typography fontSize={15}>Existing User</Typography>
          <Fab variant="extended" onClick={() =>{ 
              showToaster("info","Sign in page");
              navigate("SignIn");
             }}>
            <EastIcon sx={{ mr: 1 }} />
            Sign in
          </Fab>
          <Typography fontSize={15}>New User</Typography>
          <Fab variant="extended" onClick={() =>{
              showToaster("info" , "Register page");
              navigate("Register");
             }}>
            <ExitToAppIcon sx={{ mr: 1 }} />
            Register
          </Fab>
        </div>
      </div>
    );
}

export default Home;