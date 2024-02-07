// import profileReduser from "./profileReduser";
// import messagesReduser from "./messagesReduser";
// import navigationReduser from "./navigtionReduser";

// let store = {
//     _state: {
//         ProfilePaje: {
//             MyPostsData: [
//                 { likes: "18", message: "MEU MEU MEU" },
//                 { likes: "6", message: "MEOW WORLD" },
//                 { likes: "15", message: "I MEOW YOU" }
//             ],
//             NewPostText: ""
//         },
//         MessagesPaje: {
//             messagesData: [
//                 { id: "1", message: "Hi i am a TIGER CAT" },
//                 { id: "2", message: "Hi i am a BROWN CAT" },
//                 { id: "3", message: "Hi i am a SMALL CAT" },
//             ],
//             NewMessageText: "",
//             dialogsData: [
//                 { id: "1", name: "TIGER CAT" },
//                 { id: "2", name: "BROWN CAT" },
//                 { id: "3", name: "SMALL CAT" },
//             ]
//         },
//         Navigation: {
//             Friends: [
//                 {name:"Barsik", imgSrc:"https://cs6.livemaster.ru/storage/51/8d/e9304e78c01418b5ea956d3be36a.jpg"},
//                 {name:"Barsik", imgSrc:"https://cs6.livemaster.ru/storage/51/8d/e9304e78c01418b5ea956d3be36a.jpg"},
//                 {name:"Barsik", imgSrc:"https://cs6.livemaster.ru/storage/51/8d/e9304e78c01418b5ea956d3be36a.jpg"},
//                 {name:"Persik", imgSrc:"https://static.life.ru/publications/2023/9/11/812587366614.6013.jpg"},
//                 {name:"Persik", imgSrc:"https://static.life.ru/publications/2023/9/11/812587366614.6013.jpg"},
//                 {name:"Persik", imgSrc:"https://static.life.ru/publications/2023/9/11/812587366614.6013.jpg"}
//             ] 
//         }
//     },
//     _rerenderAllTree() {
//         console.log("1");
//     },

//     getState(){
//         return this._state;
//     },
//     subscribe(observer) {
//         this._rerenderAllTree = observer;
//     },
//     dispatch(action  ){
//         this._state.ProfilePaje = profileReduser(this._state.ProfilePaje, action);
//         this._state.MessagesPaje = messagesReduser(this._state.MessagesPaje, action);
//         this._state.Navigation = navigationReduser(this._state.Navigation, action);
//         this._rerenderAllTree(this._state);
//     }
// }





// window.store = store;
// export default store ;
