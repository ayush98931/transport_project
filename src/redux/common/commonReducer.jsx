import commonActionTypes from "./commonAction";

const initial_state = {
    ToasterList : [],
    TemporaryData : {},
    UserInfo : {},
};


export default function commonReducer(state=initial_state , action){

    switch (action.type){
        case commonActionTypes.add_toaster:
            return {
                ...state,
                ToasterList : [ ...state.ToasterList , action.payload]
            };
        
        case commonActionTypes.remove_toaster:
            let list = state.ToasterList;
            list = list.filter((item , i)=>i !== action.payload);
            return {
                ...state,
                ToasterList:list
            };
        case commonActionTypes.addTemporaryData:
            let temp_tempData = state.TemporaryData;
            temp_tempData[action.payload.name] = action.payload.value;
            return {
                ...state,
                TemporaryData : temp_tempData
            };
        case commonActionTypes.removeTemporaryData:
            let temp_rm_data = state.TemporaryData;
            delete temp_rm_data[action.payload]
            return {
                ...state,
                TemporaryData : temp_rm_data
            };
        case commonActionTypes.storeUserInfo:
            return {
                ...state,
                UserInfo : action.payload
            }
        default:
            return state;
    }

}