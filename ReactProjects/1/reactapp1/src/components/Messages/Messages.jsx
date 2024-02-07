import s from "./Massages.module.css";
import DialogName from "./DialogName/DialogName";
import Message from "./Message/Message";
import React from "react";

const Messages = (props) => {
    let dialogsArr = props.state.dialogsData.map(el=>(<DialogName name={el.name} id={el.name}/>));
    let messagesArr = props.state.messagesData.map(el=>(<Message messageText={el.message}/>));

    let NewMessageText = React.createRef();
    
    let onAddMessageText = () =>{
        let text = NewMessageText.current.value;
        props.addMessageText(text);
    }
    let onAddMessage = () =>{
        props.addMessage();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsNames}>
                {dialogsArr}
            </div>
            <div className={s.messages}>
                {messagesArr}
                <textarea ref={NewMessageText} value={props.state.NewMessageText} onChange={() => {onAddMessageText()}}></textarea>
                <button onClick={() => {onAddMessage()}}>message</button>
            </div>
        </div>
    );
};

export default Messages;
