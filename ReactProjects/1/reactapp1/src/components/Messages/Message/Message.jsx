import s from "../Massages.module.css";


const Message = (props) =>{
    return (
        <div className={s.message}>{props.messageText}</div>
    );
}


export default Message;
