import { combineReducers } from "redux";
import clientReducer from "./client/clientReducer";
import providerReducer from "./provider/providerReducer";
import commonReducer from "./common/commonReducer";

const rootReducer = combineReducers({
    client : clientReducer,
    provider : providerReducer,
    common : commonReducer,
})

export default rootReducer;