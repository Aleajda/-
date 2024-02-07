const add_message_text = "ADD-MESSAGE-TEXT";
const add_message = "ADD-MESSAGE";


let defaultState = {
    messagesData: [
        { id: "1", message: "Hi i am a TIGER CAT" },
        { id: "2", message: "Hi i am a BROWN CAT" },
        { id: "3", message: "Hi i am a SMALL CAT" },
    ],
    NewMessageText: "",
    dialogsData: [
        { id: "1", name: "TIGER CAT" },
        { id: "2", name: "BROWN CAT" },
        { id: "3", name: "SMALL CAT" },
    ]
}

const messagesReducer = (state = defaultState, action) =>{
    let stateCopy = {...state};
    switch(action.type){  
        case add_message:
            let newMessage = {
                id: "0",
                message: state.NewMessageText
                
            }
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            stateCopy.NewMessageText = "";
            return stateCopy;

        case add_message_text:{
            stateCopy.NewMessageText = action.currentText;
            return stateCopy;
        }
        default:
            return stateCopy; 
    }
}

export const addMessageTextActionCreator = (text) =>{
    return { type: add_message_text, currentText: text};
}

export const addMessageActionCreator = () =>{
    return {type: add_message};
}

export default messagesReducer;