const add_post_text = "ADD-POST-TEXT";
const add_post = "ADD-POST";
const add_message_text = "ADD-MESSAGE-TEXT";
const add_message = "ADD-MESSAGE";

let store = {
    _state: {
        ProfilePaje: {
            MyPostsData: [
                { likes: "18", message: "MEU MEU MEU" },
                { likes: "6", message: "MEOW WORLD" },
                { likes: "15", message: "I MEOW YOU" }
            ],
            NewPostText: ""
        },
        MessagePaje: {
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
        },
        Navigation: {
            Friends: [
                {name:"Barsik", imgSrc:"https://cs6.livemaster.ru/storage/51/8d/e9304e78c01418b5ea956d3be36a.jpg"},
                {name:"Barsik", imgSrc:"https://cs6.livemaster.ru/storage/51/8d/e9304e78c01418b5ea956d3be36a.jpg"},
                {name:"Barsik", imgSrc:"https://cs6.livemaster.ru/storage/51/8d/e9304e78c01418b5ea956d3be36a.jpg"},
                {name:"Persik", imgSrc:"https://static.life.ru/publications/2023/9/11/812587366614.6013.jpg"},
                {name:"Persik", imgSrc:"https://static.life.ru/publications/2023/9/11/812587366614.6013.jpg"},
                {name:"Persik", imgSrc:"https://static.life.ru/publications/2023/9/11/812587366614.6013.jpg"}
            ] 
        }
    },
    _rerenderAllTree() {
        console.log("1");
    },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._rerenderAllTree = observer;
    },
    dispatch(action  ){
        if (action.type === add_post){
            let newPost = {
                message: this._state.ProfilePaje.NewPostText,
                likes: "0"
            }
            this._state.ProfilePaje.MyPostsData.push(newPost);
            this._state.ProfilePaje.NewPostText = "";
            this._rerenderAllTree(this._state);
        }else if (action.type === add_post_text){
            this._state.ProfilePaje.NewPostText = action.currentText;
            this._rerenderAllTree(this._state);
        }else if (action.type === add_message){
            let newMessage = {
                message: this._state.MessagePaje.NewMessageText,
                id: "0"
            }
            this._state.MessagePaje.messagesData.push(newMessage);
            this._state.MessagePaje.NewMessageText = "";
            this._rerenderAllTree(this._state);
        }else if (action.type === add_message_text){
            this._state.MessagePaje.NewMessageText = action.currentText;
            this._rerenderAllTree(this._state);
        }
    }
}


export const addPostTextActionCreator = (text) =>{
    return { type: add_post_text, currentText: text};
}

export const addPostActionCreator = () =>{
    return {type: add_post};
}

export const addMessageTextActionCreator = (text) =>{
    return { type: add_message_text, currentText: text};
}

export const addMessageActionCreator = () =>{
    return {type: add_message};
}


window.store = store;
export default store ;
