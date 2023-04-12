import commonActionTypes from "./commonAction";

const initial_state = {
    ToasterList : []
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
        default:
            return state;
    }

}