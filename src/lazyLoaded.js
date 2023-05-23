import React from "react";

export const SignupRegPage = React.lazy(()=> import('./components/pages/Home'));
export const SignInPage = React.lazy(()=> import('./components/pages/signin/signInPage'));
export const RegisterPage = React.lazy(()=> import('./components/pages/register/registerPage'));
export const RootPage = React.lazy(()=> import('./components/pages/root'));
export const Dashboard = React.lazy(()=> import('./components/pages/dashboard/Dashboard'));
export const MyLoads = React.lazy(()=> import('./components/pages/myloads/myloads'));
export const MyLories = React.lazy(()=> import('./components/pages/mylories/mylories'));
export const MarketPlace = React.lazy(()=> import('./components/pages/marketplace/marketplace'));
export const MyRoutes = React.lazy(()=> import('./components/pages/myroutes/myroutes'));
export const AboutPage = React.lazy(()=> import('./components/pages/aboutpage/aboutpage'));


