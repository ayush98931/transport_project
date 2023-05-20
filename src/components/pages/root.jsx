import { Outlet } from "react-router";
import PersistentDrawerLeft from "./dashboard/sidebar";

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