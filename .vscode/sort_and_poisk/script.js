let switchbtn1 = document.querySelector('#swbtn1');
let switchbtn2 = document.querySelector('#swbtn2');
let className = switchbtn1.className;
let bt1flag = 0;
let bt2flag = 0;
let btn = document.querySelector("#startsort");
let btn1 = document.querySelector("#startpoisk");




btn.addEventListener("click", function (){
    let typesort = buttonSviborom1.textContent;
    let kolel = document.getElementById("kolel1").value;
    let input = document.getElementById("inputarea").value;
    let numArray = [];
    let output = "";
    if (bt1flag == 0){
        numArray = input.split(' ');
        output = kolel + numArray.join(' ');
        document.getElementById("inputarea").value = "Неотсортированный массив: " + output + "\n";

        // САМОСТОЯТЕЛЬНЫЙ ВВОД

        if (typesort == "Пузырьком"){
            for (var i = 0, endI = numArray.length - 1; i < endI; i++) {
                var wasSwap = false;
                for (var j = 0, endJ = endI - i; j < endJ; j++) {
                  if (numArray[j] > numArray[j + 1]) {
                    var swap = numArray[j];
                    numArray[j] = numArray[j + 1];
                    numArray[j + 1] = swap;
                    wasSwap = true;
                  }
                }
                if (!wasSwap) break;
            }
            output = numArray.join(' ');
            document.getElementById("inputarea").value += "Отсортированный массив(П): " + output;
        }
        else if(typesort == "Шелла"){
            for (var step = Math.floor(numArray.length / 2); step > 0; step = Math.floor(step / 2)) {
                for (var i = step; i < numArray.length; i++) {
                  var temp = numArray[i];
                  for (var j = i; j >= step && numArray[j - step] > temp; j -= step) {
                    numArray[j] = numArray[j - step];
                  }
                  numArray[j] = temp;
                }
            }
            output = numArray.join(' ');
            document.getElementById("inputarea").value += "Отсортированный массив: " + output;
        }
        else if(typesort == "Выбором"){
            for (var i = 0; i < numArray.length - 1; i++) {
                var min = i;
                for (var j = i + 1; j < numArray.length; j++) {
                  if (numArray[j] < numArray[min]) min = j;
                }
                var swap = numArray[min];
                numArray[min] = numArray[i];
                numArray[i] = swap;
            }
            output = numArray.join(' ');
            document.getElementById("inputarea").value += "Отсортированный массив(Вы): " + output;
        }
        else if(typesort == "Вставками"){
            for (var i = 1; i < numArray.length; i++) {
                var current = numArray[i];
                var j = i - 1;
                while (j >= 0 && numArray[j] > current) {
                    numArray[j + 1] = numArray[j];
                  j--;
                }
                numArray[j + 1] = current;
            }
            output = numArray.join(' ');
            document.getElementById("inputarea").value += "Отсортированный массив(Вс): " + output;
        }
        else if(typesort == "Быстрая"){
            function quickSort(arr) {
                if (arr.length <= 1) return arr;
              
                var pivotIndex = Math.floor(arr.length / 2);
                var pivot = arr[pivotIndex];
                var less = [];
                var greater = [];
              
                for (var i = 0; i < arr.length; i++) {
                  if (i === pivotIndex) continue;
                  if (arr[i] < pivot) {
                    less.push(arr[i]);
                  } else {
                    greater.push(arr[i]);
                  }
                }
              
                return quickSort(less).concat([pivot], quickSort(greater));
            }
            output = quickSort(numArray).join(' ');
            document.getElementById("inputarea").value += "Отсортированный массив(Б): " + output;
        }
    }

    // СЛУЧАЙНЫЙ ВВОД
    
    else {
        numArray = [];
        for (var i = 0; i < kolel; i++) {
          numArray.push(Math.floor(Math.random() * 201) - 100);
        }
        output = numArray.join(' ');
        document.getElementById("inputarea").value = "Неотсортированный массив: " + output + "\n";
        if (typesort == "Пузырьком"){
            for (var i = 0, endI = numArray.length - 1; i < endI; i++) {
                var wasSwap = false;
                for (var j = 0, endJ = endI - i; j < endJ; j++) {
                  if (numArray[j] > numArray[j + 1]) {
                    var swap = numArray[j];
                    numArray[j] = numArray[j + 1];
                    numArray[j + 1] = swap;
                    wasSwap = true;
                  }
                }
                if (!wasSwap) break;
            }
            output = numArray.join(' ');
            document.getElementById("inputarea").value += "Отсортированный массив(П): " + output;
        }
        else if(typesort == "Шелла"){
            for (var step = Math.floor(numArray.length / 2); step > 0; step = Math.floor(step / 2)) {
                for (var i = step; i < numArray.length; i++) {
                  var temp = numArray[i];
                  for (var j = i; j >= step && numArray[j - step] > temp; j -= step) {
                    numArray[j] = numArray[j - step];
                  }
                  numArray[j] = temp;
                }
            }
            output = numArray.join(' ');
            document.getElementById("inputarea").value += "Отсортированный массив: " + output;
        }
        else if(typesort == "Выбором"){
            for (var i = 0; i < numArray.length - 1; i++) {
                var min = i;
                for (var j = i + 1; j < numArray.length; j++) {
                  if (numArray[j] < numArray[min]) min = j;
                }
                var swap = numArray[min];
                numArray[min] = numArray[i];
                numArray[i] = swap;
            }
            output = numArray.join(' ');
            document.getElementById("inputarea").value += "Отсортированный массив(Вы): " + output;
        }
        else if(typesort == "Вставками"){
            for (var i = 1; i < numArray.length; i++) {
                var current = numArray[i];
                var j = i - 1;
                while (j >= 0 && numArray[j] > current) {
                    numArray[j + 1] = numArray[j];
                  j--;
                }
                numArray[j + 1] = current;
            }
            output = numArray.join(' ');
            document.getElementById("inputarea").value += "Отсортированный массив(Вс): " + output;
        }
        else if(typesort == "Быстрая"){
            function quickSort(arr) {
                if (arr.length <= 1) return arr;
              
                var pivotIndex = Math.floor(arr.length / 2);
                var pivot = arr[pivotIndex];
                var less = [];
                var greater = [];
              
                for (var i = 0; i < arr.length; i++) {
                  if (i === pivotIndex) continue;
                  if (arr[i] < pivot) {
                    less.push(arr[i]);
                  } else {
                    greater.push(arr[i]);
                  }
                }
              
                return quickSort(less).concat([pivot], quickSort(greater));
            }
            output = quickSort(numArray).join(' ');
            document.getElementById("inputarea").value += "Отсортированный массив(Б): " + output;
        }
    }
})






let buttonSviborom1 = document.getElementById("my-button");
let sortes1 = document.querySelector(".days");
let sortes1Buttons = document.querySelectorAll(".day");

let buttonSviborom2 = document.getElementById("my-button2");
let sortes2 = document.querySelector(".days2");
let sortes2Buttons = document.querySelectorAll(".day2");



switchbtn1.addEventListener("click", function () {
    switchbtn1.classList.toggle("switch-on");
    bt1flag = 1 - bt1flag; // toggle the flag between 0 and 1
});

switchbtn2.addEventListener("click", function () {
    switchbtn2.classList.toggle("switch-on");
    bt2flag = 1 - bt2flag; // toggle the flag between 0 and 1
});


// КНОПКА С ВЫБОРОМ 1

// При клике на кнопку показываем/скрываем список дней
buttonSviborom1.addEventListener("click", () => {
    sortes1.classList.toggle("show");
});

// При клике на день обновляем текст на кнопке и скрываем список
sortes1Buttons.forEach((sortes1Button) => {
    sortes1Button.addEventListener("click", () => {
    buttonSviborom1.textContent = sortes1Button.dataset.value;
    sortes1.classList.remove("show");
  });
});


// КНОПКА С ВЫБОРОМ 2

buttonSviborom2.addEventListener("click", () => {
  sortes2.classList.toggle("show");
});

// При клике на день обновляем текст на кнопке и скрываем список
sortes2Buttons.forEach((sortes2Button) => {
  sortes2Button.addEventListener("click", () => {
  buttonSviborom2.textContent = sortes2Button.dataset.value;
  sortes2.classList.remove("show");
});
});








// ПОИСК


let pokazM = document.querySelector("#Show");
let numArrayP = [];


pokazM.addEventListener("click", function (){
    if (numArrayP.length == 0){
      let kolelP = document.getElementById("kolel2").value;
      let outputP = "";
      if (bt2flag == 1){
        numArrayP = [];
        for (var i = 0; i < kolelP; i++) {
          numArrayP.push(Math.floor(Math.random() * 201) - 100);
        }
        outputP = numArrayP.join(' ');
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
    document.getElementById("inputarea2").value = "Исходный массив: " + outputP + "\n";


    // САМОСТОЯТЕЛЬНЫЙ ВВОД

    if (typepoisk == "Последовательный"){
      let indexList = [];
      for (let i = 0; i < numArrayP.length; i++) {
        if (numArrayP[i] == Elem) {
          indexList.push(i);
        }
      }
      if (indexList.length == 0) {
        document.getElementById("inputarea2").value += "Числа в массиве нет";
      } 
      else {
        document.getElementById("inputarea2").value += "Число находиться под индексом: "
        for (let i = 0; i < indexList.length; i++){
          document.getElementById("inputarea2").value += indexList[i] + " ";
        }
      }
    }
    else if (typepoisk == "Двоичный"){
      let indexList = [];
      for (let i = 0; i < numArrayP.length; i++) {
        if (numArrayP[i] == Elem) {
          indexList.push(i);
        }
      }
      if (indexList.length == 0) {
        document.getElementById("inputarea2").value += "Числа в массиве нет";
      } 
      else {
        document.getElementById("inputarea2").value += "Число находиться под индексом: "
        for (let i = 0; i < indexList.length; i++){
          document.getElementById("inputarea2").value += indexList[i] + " ";
        }
      }
    }
}

// СЛУЧАЙНЫЙ ВВОД




else {
    if (numArrayP.length == 0) {
      for (var i = 0; i < kolelP; i++) {
        numArrayP.push(Math.floor(Math.random() * 201) - 100);
      }
      outputP = numArrayP.join(' ');
      document.getElementById("inputarea2").value = "Исходный массив: " + outputP + "\n";
      if (typepoisk == "Последовательный"){
          let indexList = [];
          for (let i = 0; i < numArrayP.length; i++) {
            if (numArrayP[i] == Elem) {
              indexList.push(i);
            }
          }
          if (indexList.length == 0) {
            document.getElementById("inputarea2").value += "Числа в массиве нет";
          } 
          else {
            document.getElementById("inputarea2").value += "Число находиться под индексом: "
            for (let i = 0; i < indexList.length; i++){
              document.getElementById("inputarea2").value += indexList[i] + " ";
            }
          }
      }
      else if (typepoisk == "Двоичный"){
        let indexList = [];
          for (let i = 0; i < numArrayP.length; i++) {
            if (numArrayP[i] == Elem) {
              indexList.push(i);
            }
          }
          if (indexList.length == 0) {
            document.getElementById("inputarea2").value += "Числа в массиве нет";
          } 
          else {
            document.getElementById("inputarea2").value += "Число находиться под индексом: "
            for (let i = 0; i < indexList.length; i++){
              document.getElementById("inputarea2").value += indexList[i] + " ";
            }
          }
      }
    }
    else {
      if (typepoisk == "Последовательный"){
        let indexList = [];
        for (let i = 0; i < numArrayP.length; i++) {
          if (numArrayP[i] == Elem) {
            indexList.push(i);
          }
        }
        if (indexList.length == 0) {
          document.getElementById("inputarea2").value += "Числа в массиве нет";
        } 
        else {
          document.getElementById("inputarea2").value += "Число находиться под индексом: "
          for (let i = 0; i < indexList.length; i++){
            document.getElementById("inputarea2").value += indexList[i] + " ";
          }
        }
    }
    else if (typepoisk == "Двоичный"){
      let indexList = [];
          for (let i = 0; i < numArrayP.length; i++) {
            if (numArrayP[i] == Elem) {
              indexList.push(i);
            }
          }
          if (indexList.length == 0) {
            document.getElementById("inputarea2").value += "Числа в массиве нет";
          } 
          else {
            document.getElementById("inputarea2").value += "Число находиться под индексом: "
            for (let i = 0; i < indexList.length; i++){
              document.getElementById("inputarea2").value += indexList[i] + " ";
            }
          }
    }
    }
    
}
})

let paintCont = document.getElementById("bloks");
let n  = 100;
let isMouseDown = false;

for (let i = 0; i < n; i++) {
  for (let z = 0; z < n; z++){
    let miniCont = document.createElement("div");
    miniCont.id = "miniCont";
    miniCont.className = "123";
    paintCont.appendChild(miniCont);
  }
}

var miniConts = document.getElementsByClassName('123');
for (let i = 0; i < miniConts.length; i++){
  miniConts[i].style.setProperty('width', 'calc(600px / ' + n + ')');
  miniConts[i].style.setProperty('height', 'calc(600px / ' + n + ')');
  miniConts[i].addEventListener("mousedown", function(){
    isMouseDown = true;
  })
  miniConts[i].addEventListener("mouseover", function(){
    if (isMouseDown) {
      this.style.backgroundColor = "red";
    }
  })
}

document.addEventListener("mouseup", function(){
  isMouseDown = false;
})
