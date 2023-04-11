import { Fab } from "@mui/material";
import React from "react";
import EastIcon from '@mui/icons-material/East';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from "react-router";
import '../../assets/css/signInReg.scss'
import logo from '../../assets/images/logo.png'



const Home=  props=>{

    const navigate = useNavigate();

    return (
      <div className="fullContainer">
        <img src={logo} />
        <div className="buttonHolder">
          <Fab variant="extended" onClick={() => navigate("SignIn")}>
            <EastIcon sx={{ mr: 1 }} />
            Sign in
          </Fab>
          <Fab variant="extended" onClick={() => navigate("Register")}>
            <ExitToAppIcon sx={{ mr: 1 }} />
            Register
          </Fab>
        </div>
      </div>
    );
}

export default Home;