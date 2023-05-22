import { IsLoggedIn } from "../root";

const MyLories=props=>{
    return (
        <IsLoggedIn>
        <h1>My Lories</h1>
        </IsLoggedIn>
    )
}

export default MyLories;