let userName = 'Aleajda';
let btn = document.querySelector('#click');
btn.addEventListener("click", () =>{
    const promise = getPurse();
    playSound();
    promise.then(dataPrishel);
})

let playSound = () =>{
    const audio = document.getElementById("audio");
    audio.play();
}

let dataPrishel = (data) =>{
    const divres = document.createElement("div");    
    divres.textContent = `${data.profile.members.ac429637933445069934e100261baf94.currencies.coin_purse}`;
    document.querySelector("#result").appendChild(divres);
}



















// $.ajax({
//     url: `https://sky.shiiyu.moe/api/v2/profile/${userName}`,
//     type: 'GET',
//     dataType: 'json',
//     success: function(data) {
//         console.log(data); // Выводим полученные данные в консоль
//     },
//     error: function(error) {
//         console.log('Произошла ошибка при выполнении запроса:', error);
//     }
// });

