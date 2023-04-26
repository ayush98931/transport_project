import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, CircularProgress, Divider, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, Tab, Tabs, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import '../../../assets/css/signInPage.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useGoogleLogin } from '@react-oauth/google';
import * as APIs from "../../../APIs";
import { showToaster } from "../../../utility";
import GoogleIcon from '@mui/icons-material/Google';
import { useMutation } from "react-query";
import axios from "axios";
import { ToastType, userType } from "../../../constants";
import { useNavigate } from "react-router";
import { Form } from "formik";

const SignInPage = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [tab , setTab] = useState(0);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleTabChange = (e,value)=>{
    setTab(value);
  }

  const navigate = useNavigate();

  const mutationGoogle = useMutation(values=>{
    console.log("mutaiton",values);
    return axios.post(APIs.sign_in_with_google , values)
                .then(res=>{
                  console.log(res.data);
                  if (res.data.error )showToaster(ToastType.error, res.data.msg )
                  else{ 
                    if (res.data.msg )showToaster(ToastType.success, res.data.msg );
                    navigate("../register");
                  }
                      
                })
    ;
  });

  const loginUser =data=>{
    showToaster("info" , "Google verified");
    mutationGoogle.mutate({user_type : tab === "0"?userType.client:userType.tranporter,
    ...data
  });
  }



  const loginWithGoogle = useGoogleLogin({
    scope: "openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
    flow: "implicit",
    onSuccess: loginUser
  });

  return (
    <div className="fullSizeContainer">
      <Typography variant="h4" letterSpacing={4}>
        Login
      </Typography>
      <Paper elevation={6}>
        <Paper elevation={12} className="personLogo">
          <AccountCircleIcon color="primary" sx={{ width: 80, height: 80 }} />
        </Paper>

        <Box>
          <Box sx={{ marginTop: "50px" }}>
            <Tabs value={tab} onChange={handleTabChange} variant="fullWidth">
              <Tab label="Client" value={0} />
              <Tab label="Transporter" value={1} />
            </Tabs>
          </Box>
        </Box>

        <Form>
        <Stack spacing={3} className="signInFrom">
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            size="small"
          />

          <FormControl variant="outlined" size="small">
            <InputLabel htmlFor="sign_in_password">Password</InputLabel>
            <OutlinedInput
              id="sign_in_password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOff color="primary" />
                    ) : (
                      <Visibility color="primary" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Button variant="outlined" type="submit" className="submitButton">
            Submit
          </Button>
          <Divider>or</Divider>

          <Box>
            <IconButton onClick={loginWithGoogle}>
              {mutationGoogle.isLoading?<CircularProgress />:<GoogleIcon />}
            </IconButton>
          </Box>
        </Stack>
          </Form>
      </Paper>
    </div>
  );
};

export default SignInPage;
