import React, { useEffect, useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Button, CircularProgress, Divider, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, Tab, Tabs, TextField, Typography } from "@mui/material";
import { Password, Visibility, VisibilityOff } from "@mui/icons-material";
import { showToaster } from "../../../utility";
import { decodeJwt } from "jose";
import {  useGoogleLogin } from "@react-oauth/google";
import { APIurls, ToastType, googleCreds, userType } from "../../../constants";
import '../../../assets/css/registerPage.scss';
import { Form, Formik, useFormik } from "formik";
import { registerValidation } from "../../../validation";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import * as APIs from '../../../APIs';
import { useNavigate } from "react-router";
import GoogleIcon from '@mui/icons-material/Google';

const initial_values={
    name:'',
    email:'',
    password:'',
    confirm_password:'',
}

const registerPage=props=>{
    
    const [showPassword, setShowPassword] = useState(false);
    const [tab , setTab] = useState(0);
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const navigate = useNavigate();

    const mutationGoogle = useMutation((values )=>{
        console.log("mutation" , values )
        return axios.post(APIs.register_with_google , values)
                    .then(res=>{
                      console.log(res);
                      if (res.data.error )showToaster(ToastType.error, res.data.msg )
                      else{
                        if (res.data.msg )showToaster(ToastType.success, res.data.msg );
                        navigate("../SignIn");
                      }
                      
                    })
        ;
    })
        
    const handleTabChange = (e,value)=>{
      setTab(value);    
    }
  
    const registerUser =googleData=>{
      showToaster(ToastType.info , "Google verified");
      console.log(googleData);
      mutationGoogle.mutate( {user_type : tab === "0"?userType.client:userType.tranporter,
      ...googleData
    });
    }


    const onSubmit = values =>{
        console.log(values);
    }

    const loginWithGoogle = useGoogleLogin({
      scope: "openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
      flow: "implicit",
      onSuccess: data=>registerUser(data)
    });

    return (
        <div className="fullSizeContainer">
            <Typography variant="h4"letterSpacing={4} >Register</Typography>
      <Paper elevation={6}>
        <Paper elevation={12} className="registerLogo">
          <AccountCircleIcon color="primary" sx={{ width: 80, height: 80 }} />
        </Paper>



        <Box>
          <Box sx={{ marginTop:"50px" }}>
            <Tabs
              value={tab}
              onChange={handleTabChange}
              variant="fullWidth"
            >
              <Tab label="Client" value={0} />
              <Tab label="Transporter" value={1} />
            </Tabs>
          </Box>
        </Box>

        <Formik initialValues={initial_values} onSubmit={onSubmit} validationSchema={registerValidation}>

            {props=>{
            return (
              <Form>
                <Stack spacing={3} className="registerFrom">
                  <TextField
                    variant="outlined"
                    label="Name"
                    size="small"
                    name="name"
                    value={props.values.name}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    error={Boolean(props.touched.name && props.errors.name)}
                    helperText={props.touched.name && props.errors.name}
                    required
                  />
                  <TextField
                    variant="outlined"
                    label="Email"
                    size="small"
                    name="email"
                    value={props.values.email}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    error={Boolean(props.touched.email && props.errors.email)}
                    helperText={props.touched.email && props.errors.email}
                    required
                  />

                  <FormControl
                    variant="outlined"
                    error={Boolean(
                      props.touched.password && props.errors.password
                    )}
                    size="small"
                  >
                    <InputLabel htmlFor="register_password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="register_password"
                      name="password"
                      value={props.values.password}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
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
                    <FormHelperText>
                      {props.touched.password && props.errors.password}{" "}
                    </FormHelperText>
                  </FormControl>

                  <FormControl
                    variant="outlined"
                    error={Boolean(
                      props.touched.confirm_password &&
                        props.errors.confirm_password
                    )}
                    size="small"
                  >
                    <InputLabel htmlFor="register_confirm_password">
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      id="register_confirm_password"
                      name="confirm_password"
                      value={props.values.confirm_password}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
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
                      label="Confirm Password"
                    />
                    <FormHelperText>
                      {props.touched.confirm_password &&
                        props.errors.confirm_password}{" "}
                    </FormHelperText>
                  </FormControl>

                  <Button
                    variant="outlined"
                    type="submit"
                    className="submitButton"
                    // onClick={login}
                  >
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
            );}}
        </Formik>
      </Paper>
    </div>
    )}  

export default registerPage;