import { Alert, AlertTitle, IconButton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import '../../assets/css/toaster.scss';
import CloseIcon from '@mui/icons-material/Close';
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { removeToasterAction } from "../../redux/common/commonAction";

const Toaster=props=>{

    useEffect(()=>console.log(props.toasterList),[props.toasterList]);


    return (
        <Stack className="toasterBox" spacing={2}>
            {props.toasterList.map((item,index)=>{
                setTimeout(()=>props.removeToaster(index),6000);
                return (
            <Message {...item} key={index} index={index} onClick={()=>props.removeToaster(index)} />
            )})}
        </Stack>
    );
}

const Message = props=>{
    return (
        <Alert severity={props.type}
        action={
            <IconButton color="inherit" sx={{outline:"none"}} onClick={()=>props.onClick(props.index)}>
                <CloseIcon />
            </IconButton>
        }
        >
            {props.message}

        </Alert>
    );
}

Message.propTypes={
    type:PropTypes.oneOf(["success" , "warnig" , "info" , "error"]),
    message:PropTypes.string,
    index:PropTypes.number
}


const mapStateToProps = (store)=>({
    toasterList : store.common.ToasterList
});

const mapDispatchToProps = (dispatch)=>({
    removeToaster : bindActionCreators( removeToasterAction , dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Toaster);