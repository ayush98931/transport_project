import { createTheme } from "@mui/material";

export const theme = createTheme({
    status:{
      danger:"red",
      success:"greeen",
      textColor:"",
    },

    components:{
        MuiFab:{
            styleOverrides:{
                root:theme=>({
                    backgroundColor:"#d9a200",
                    '&:hover':{
                        backgroundColor:"#00000021"
                    }
                }),
            },
        }
    }
  })
 
  
