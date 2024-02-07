import React from "react";
import Messages from "./Messages";
import { addMessageActionCreator, addMessageTextActionCreator } from "../../redux/messagesReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) =>{
    return {
        state: state.MessagesPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        addMessageText: (text) => {
            dispatch(addMessageTextActionCreator(text));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps )(Messages);

export default MessagesContainer;
