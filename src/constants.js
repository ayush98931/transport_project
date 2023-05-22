import { createTheme } from "@mui/material";

export const ToastType = {
    info : 'info',
    success : 'success',
    warning : 'warning',
    error : 'error'
}

export const userType = {
    client : "CLIENT",
    tranporter : "TRANSPORTER"
}

export const googleCreds = {
    clinetId : "977451559774-c7eb80kljfkvt24ks1tm0id9cvo5t6v9.apps.googleusercontent.com"
}

export const baseURL = "http://localhost:8000/"

export const APIurls = {
    common : `${baseURL}common/`,
    client : `${baseURL}client/`,
    tranporter : `${baseURL}tranporter/`,
}


export const theme = createTheme({
    palette:{
        mode:window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light',
        primary:{
            main:"#175a88",
        }
    },
    status:{
        danger:"red",
        success:"greeen",
        textColor:"",
    },

    typography:{
        h1:{fontFamily:"'Russo One', sans-serif"},
        h2:{fontFamily:"'Russo One', sans-serif"},
        h3:{fontFamily:"'Russo One', sans-serif"},
        h4:{fontFamily:"'Russo One', sans-serif"},
    },

    components:{
        MuiFab:{
            styleOverrides:{
                root:theme=>({
                    backgroundColor:"#d9a200",
                    zIndex:1,
                    outline:"none!important",
                    '&:hover':{
                        backgroundColor:"#00000021"
                    }
                }),
            },

        },
        MuiIconButton:{
            styleOverrides:{
                root:{
                    outline:'none!important',
                }
            }
        },
        MuiAlert:{
            styleOverrides:{
                root:{
                    borderRadius:"10px",
                }
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    outline:"none!important"
                }
            }
        }
    }
  })
 
  
