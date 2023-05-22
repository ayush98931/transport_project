import { Outlet } from "react-router";
import PersistentDrawerLeft from "./dashboard/sidebar";
import { connect, useSelector } from "react-redux";
import { userType } from "../../constants";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Root = props=>{

    return (
        <div>
            <PersistentDrawerLeft>
            <Outlet />
            </PersistentDrawerLeft>
        </div>
    )
}

export default Root;


const mapStateToProps = store=>{
    return {
        userInfo : store.common.UserInfo
    }
}
export const IsClient = connect(mapStateToProps)(props=>{
    console.log(props.userInfo);
    if (props.userInfo.data?.token && props.userInfo.data?.user_data.user_type === userType.client){
        return props.children;
    }else{
        return(<Typography variant="h3">🙏 Please <Link to="/SignIn" color="#175a88" >Login</Link> as Client</Typography>)
    }
})


export const IsTransporter = connect(mapStateToProps)(props=>{
    console.log(props.userInfo);
    if (props.userInfo.data?.token && props.userInfo.data?.user_data.user_type === userType.tranporter){
        return props.children;
    }else{
        return(<Typography variant="h3">🙏 Please <Link to="/SignIn" color="#175a88" >Login</Link> as Transporter</Typography>)
    }
})
export const IsLoggedIn = connect(mapStateToProps)(props=>{

    useSelector(store=>console.log(store));

    console.log(props.userInfo);
    if (props.userInfo.data?.token){
        return props.children;
    }else{
        return(<Typography variant="h3">🙏 Please <Link to="/SignIn" color="#175a88" >Login</Link></Typography>)
    }
})

