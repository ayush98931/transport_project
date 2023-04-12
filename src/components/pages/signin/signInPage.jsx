import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import '../../../assets/css/signInPage.scss';

const SignInPage = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="fullSizeContainer">
    <Paper elevation={6} className="signInFrom">
      <Stack spacing={3}>
        <TextField
        variant="outlined"
        label="Email"
        type="email"
        />

        <TextField
        variant="outlined"
        label="Password"
        type="password"
        />

        <FormControl variant="outlined">
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
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Stack>
    </Paper>
    </div>
  );
};

export default SignInPage;
