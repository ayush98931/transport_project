import { Suspense, useState } from 'react'
import './App.css'
import {
  RouterProvider, createBrowserRouter,
} from "react-router-dom";
import * as lazy from './lazyLoaded';
import Loader from './components/loader';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constants';
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
    <ThemeProvider theme={theme}>
    <div className="App">
    <RouterProvider router={router} />
    </div>
    </ThemeProvider>
  )
}

export default App
