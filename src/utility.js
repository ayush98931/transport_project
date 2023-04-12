import { addToasterAction, removeToasterAction } from "./redux/common/commonAction";
import store from "./redux/reduxStore";

export function showToaster(type , message){
    store.dispatch(addToasterAction({type , message}));
}

export function removeToaster(index){
    store.dispatch(removeToasterAction(index));
}