import { IsLoggedIn } from "../root";

const MyLoads=props=>{
    return (
        <IsLoggedIn>
        <h1>My Loads</h1>
        </IsLoggedIn>
    )
}

export default MyLoads;