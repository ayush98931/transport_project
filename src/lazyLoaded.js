import React from "react";

export const SignupRegPage = React.lazy(()=> import('./components/pages/Home'));
export const SignInPage = React.lazy(()=> import('./components/pages/signin/signInPage'));
export const RegisterPage = React.lazy(()=> import('./components/pages/register/registerPage'));
export const ClientDashboard = React.lazy(()=> import('./components/pages/dashboard/clientDashboard'));
export const TransporterDashboard = React.lazy(()=> import('./components/pages/dashboard/transporterDashboard'));


