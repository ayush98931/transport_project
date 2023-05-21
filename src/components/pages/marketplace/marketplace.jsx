import { IsLoggedIn } from "../root";

const Marketplace=props=>{
    return (
        <IsLoggedIn>
        <h1>MarketPlace</h1>
        </IsLoggedIn>
    )
}

export default Marketplace;