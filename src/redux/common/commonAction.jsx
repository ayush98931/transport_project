const commonActionTypes = {
    add_toaster : 'add_toaster',
    remove_toaster : 'remove_toaster',
    addTemporaryData : 'add_temporary_data',
    removeTemporaryData : 'remove_temporary_data',

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

export function addTemporaryDataAction(value){
    return ({
        type : commonActionTypes.addTemporaryData,
        payload : value
    })
}

export function removeTemporaryDataAction(value){
    return ({
        type : commonActionTypes.removeTemporaryData,
        payload : value
    })
}




export default commonActionTypes;