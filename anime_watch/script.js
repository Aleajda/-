const button = document.getElementById("change-background");
const osnov = document.querySelector(".osnov");
const tekimg = document.getElementById("tekimg");
const tekimg1 = document.getElementById("personimg");

let k = 1;
// Добавляем обработчик события на кнопку
button.addEventListener("click", function (){
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark')
        tekimg.src = 'img/moon.png'
        tekimg1.src = 'img/person-circle.svg'
        localStorage.theme = 'dark'
    }
    else {
        document.body.classList.add('dark')
        tekimg.src = 'img/sun.png'
        tekimg1.src = 'img/untitled.svg'
        localStorage.theme = 'white'
    }
    

    // if (k == 1){
    //     osnov.style.backgroundImage = 'url("img/fon1b.png")';
    //     k = 2;
    //     console.log(k);
    // }
    // else {
    //     osnov.style.backgroundImage = 'url("img/fon1w.png")';
    //     k = 1;
    //     console.log(k);
    // }
});

if (localStorage.theme === 'dark') {
    document.body.classList.add('dark')
    tekimg.src = 'img/sun.png'
}