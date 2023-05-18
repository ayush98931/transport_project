import { Suspense, useState } from 'react'
import './App.css'
import {
  RouterProvider, createBrowserRouter,
} from "react-router-dom";
import * as lazy from './lazyLoaded';
import Loader from './components/loader';
import { googleCreds, theme } from './constants';
import Toaster from './components/utility/toaster';
import { Provider } from 'react-redux';
import store from './redux/reduxStore';
import { Box, ThemeProvider } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { router } from './constants';

const queryClinet = new QueryClient();

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
    {
      index:true,
      path:"Dashboard",
      element:(<Suspense fallback={<Loader />}>
                    <lazy.ClientDashboard />
                </Suspense>),
    },
  
 ])

  console.log(theme);
  return (
    <QueryClientProvider client={queryClinet}>
    <GoogleOAuthProvider clientId={googleCreds.clinetId}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box className="App">
          <RouterProvider router={router} />
          <Toaster />
        </Box>
      </ThemeProvider>
    </Provider>
    </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}

export default App
