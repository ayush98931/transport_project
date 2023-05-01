import * as Yup from 'yup';

export const registerValidation = Yup.object({
    name: Yup.string("This must be a string").required("Name is required").label("Name"),
    email: Yup.string("This must be a string").email("must be a valid email").required("Namenis required").label("Email"),
    password: Yup.string("This must be a string").required("is required").min(8,"legth must be 8 or greater").label("Password"),
    confirm_password: Yup.string("This must be a string").required("is required").oneOf([Yup.ref('password')],"This must be same as password")
})
export const signInValidation = Yup.object({
    email: Yup.string("This must be a string").email("must be a valid email").required("Namenis required").label("Email"),
    password: Yup.string("This must be a string").required("is required").min(8,"legth must be 8 or greater").label("Password"),
})