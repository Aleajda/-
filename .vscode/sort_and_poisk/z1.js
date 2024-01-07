let pokazM = document.querySelector("#Show");
let numArrayP = [];


pokazM.addEventListener("click", function (){
    if (numArrayP.length == 0){
      let numArray = [];
      let kolelP = document.getElementById("kolel2").value;
      let outputP = "";
      if (bt2flag == 1){
        numArray = [];
        for (var i = 0; i < kolelP; i++) {
          numArray.push(Math.floor(Math.random() * 201) - 100);
        }
        outputP = numArray.join(' ');
        document.getElementById("inputarea2").value = "Неотсортированный массив: " + outputP + "\n";
  
      }  
    }
})


btn1.addEventListener("click", function (){
typepoisk = buttonSviborom2.textContent;
let kolelP = document.getElementById("kolel2").value;
let inputP = document.getElementById("inputarea2").value;
let Elem = document.getElementById("elm").value;
let outputP = "";
if (bt2flag == 0){
    numArrayP = inputP.split(' ');
    outputP = numArrayP.join(' ');
    document.getElementById("inputarea2").value = "Неотсортированный массив: " + outputP + "\n";


    // САМОСТОЯТЕЛЬНЫЙ ВВОД

    if (typesort == "Пузырьком"){
        for (var i = 0, endI = numArrayP.length - 1; i < endI; i++) {
            var wasSwap = false;
            for (var j = 0, endJ = endI - i; j < endJ; j++) {
              if (numArrayP[j] > numArrayP[j + 1]) {
                var swap = numArrayP[j];
                numArrayP[j] = numArrayP[j + 1];
                numArrayP[j + 1] = swap;
                wasSwap = true;
              }
            }
            if (!wasSwap) break;
        }
        output = numArrayP.join(' ');
        document.getElementById("inputarea").value += "Отсортированный массив(П): " + output;
    }
    else if(typesort == "Шелла"){
        for (var step = Math.floor(numArrayP.length / 2); step > 0; step = Math.floor(step / 2)) {
            for (var i = step; i < numArrayP.length; i++) {
              var temp = numArrayP[i];
              for (var j = i; j >= step && numArrayP[j - step] > temp; j -= step) {
                numArrayP[j] = numArrayP[j - step];
              }
              numArrayP[j] = temp;
            }
        }
        output = numArrayP.join(' ');
        document.getElementById("inputarea").value += "Отсортированный массив: " + output;
    }
}

// СЛУЧАЙНЫЙ ВВОД




else {


    if (numArrayP)
    for (var i = 0; i < kolel; i++) {
      numArrayP.push(Math.floor(Math.random() * 201) - 100);
    }
    output = numArrayP.join(' ');
    document.getElementById("inputarea").value = "Неотсортированный массив: " + output + "\n";
    if (typesort == "Пузырьком"){
        for (var i = 0, endI = numArrayP.length - 1; i < endI; i++) {
            var wasSwap = false;
            for (var j = 0, endJ = endI - i; j < endJ; j++) {
              if (numArrayP[j] > numArrayP[j + 1]) {
                var swap = numArrayP[j];
                numArrayP[j] = numArrayP[j + 1];
                numArrayP[j + 1] = swap;
                wasSwap = true;
              }
            }
            if (!wasSwap) break;
        }
        output = numArrayP.join(' ');
        document.getElementById("inputarea").value += "Отсортированный массив(П): " + output;
    }
    else if(typesort == "Шелла"){
        for (var step = Math.floor(numArrayP.length / 2); step > 0; step = Math.floor(step / 2)) {
            for (var i = step; i < numArrayP.length; i++) {
              var temp = numArrayP[i];
              for (var j = i; j >= step && numArrayP[j - step] > temp; j -= step) {
                numArrayP[j] = numArrayP[j - step];
              }
              numArrayP[j] = temp;
            }
        }
        output = numArrayP.join(' ');
        document.getElementById("inputarea").value += "Отсортированный массив: " + output;
    }
}
})