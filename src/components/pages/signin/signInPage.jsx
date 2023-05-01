import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, CircularProgress, Divider, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, Tab, Tabs, TextField, Typography } from "@mui/material";
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
import { Form, Formik } from "formik";
import { signInValidation } from "../../../validation";


const initial_values={
  email:'',
  password:'',
}

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
                      
                }).catch(error=>{
                  if(error.reponse.data.error)showToaster(ToastType.error ,error.resposne.data.msg)
                })
    ;
  });

  const mutaionManual = useMutation(values=>{
    console.log("manual" , values);
    return axios.post(APIs.sign_in_manual , values)
                .then(res=>{
                  console.log(res.data);
                  if (res.data.error )showToaster(ToastType.error, res.data.msg )
                  else{ 
                    if (res.data.msg )showToaster(ToastType.success, res.data.msg );
                    navigate("../register");
                  }
                }).catch(error=>{
                  if(error.response.data.error)showToaster(ToastType.error ,error.response.data.msg)
                })
  })

  const loginGoogleUser =data=>{
    showToaster("info" , "Google verified");
    mutationGoogle.mutate({user_type : tab === "0"?userType.client:userType.tranporter,
    ...data
  });
  }



  const loginWithGoogle = useGoogleLogin({
    scope: "openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
    flow: "implicit",
    onSuccess: loginGoogleUser


  });

  const loginManual= values=>{
    mutaionManual.mutate({...values , user_type : tab === "0"?userType.client:userType.tranporter})
  }

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

        <Formik initialValues={initial_values} onSubmit={loginManual} validationSchema={signInValidation}>

            {props=>{
            return (

        <Form>
        <Stack spacing={3} className="signInFrom">
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            name="email"
            size="small"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            helperText={props.touched.email && props.errors.email}
            error={Boolean(props.touched.email && props.errors.email)}
          />

          <FormControl variant="outlined" size="small" error={Boolean(props.touched.password && props.errors.password)}>
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
              name="password"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              />
              <FormHelperText>{props.touched.password && props.errors.password}</FormHelperText>
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

            )}
          }
      </Formik>
      </Paper>
    </div>
  );
};

export default SignInPage;
