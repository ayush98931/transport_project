import { Suspense, useState } from 'react'
import './App.css'
import {
  RouterProvider, createBrowserRouter,
} from "react-router-dom";
import * as lazy from './lazyLoaded';
import Loader from './components/loader';
import { theme } from './constants';
import Toaster from './components/utility/toaster';
import { Provider } from 'react-redux';
import store from './redux/reduxStore';
import { Box, ThemeProvider } from '@mui/material';
// import { router } from './constants';


function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path:"/",
      element: (<Suspense fallback={<Loader />}>
                  <lazy.SignupRegPage />
              </Suspense>),
    },
    {
      index:true,
      path:"SignIn",
      element:(<Suspense fallback={<Loader />}>
                    <lazy.SignInPage />
                </Suspense>),
    },
    {
      index:true,
      path:"Register",
      element:(<Suspense fallback={<Loader />}>
                    <lazy.RegisterPage />
                </Suspense>),
    },
  
 ])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box className="App">
          <RouterProvider router={router} />
          <Toaster />
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default App
