const commonActionTypes = {
    add_toaster : 'add_toaster',
    remove_toaster : 'remove_toaster',

}

export function addToasterAction(value){
    return ({
        type : commonActionTypes.add_toaster,
        payload : value
    })
}

export function removeToasterAction(value){
    return ({
        type : commonActionTypes.remove_toaster,
        payload : value
    })
}




export default commonActionTypes;