import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette:{
        mode:window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light',
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
        }
    }
  })
 
  
