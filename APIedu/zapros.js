// let getPurse = (successCallback) =>{
//     $.ajax({
//         url: `https://api.hypixel.net/v2/skyblock/profile?key=e7f1e1e7-368b-406a-9c54-1866021be256&name=Aleajda&profile=6a443cd88ebd44a7b897e42e83aabf39`,
//         type: 'GET',
//         dataType: 'json',
//         success: function(data){
//             successCallback(data);
//         },
//         error: function(error) {
//                 console.log('Произошла ошибка при выполнении запроса:', error);
//             } 
//     });
// }

let getPurse = () =>{
    const promise = axios.get(`https://api.hypixel.net/v2/skyblock/profile?key=e7f1e1e7-368b-406a-9c54-1866021be256&name=Aleajda&profile=6a443cd88ebd44a7b897e42e83aabf39&charset=UTF-8`);
    return promise.then((data)=>{
        return data.data;
    });
}
