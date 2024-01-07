// блоки 0 1 2
if ((blocks[0].style.backgroundColor == "green" && blocks[1].style.backgroundColor == "green" && !blocks[2].classList.contains("clicked") && !winner)){
    blocks[2].style.backgroundColor = "green";
    blocks[2].classList.add("clicked");
    col++;
    index = numbers.indexOf(2);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}
else if ((blocks[1].style.backgroundColor == "green" && blocks[2].style.backgroundColor == "green" && !blocks[0].classList.contains("clicked")  && !winner)){
    blocks[0].style.backgroundColor = "green";
    blocks[0].classList.add("clicked");
    col++;
    index = numbers.indexOf(0);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}
else if ((blocks[0].style.backgroundColor == "green" && blocks[2].style.backgroundColor == "green" && !blocks[1].classList.contains("clicked") && !winner)){
    blocks[1].style.backgroundColor = "green";
    blocks[1].classList.add("clicked");
    col++;
    index = numbers.indexOf(1);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}





// блоки 3 4 5
else if ((blocks[3].style.backgroundColor == "green" && blocks[4].style.backgroundColor == "green" && !blocks[5].classList.contains("clicked") && !winner)){
    blocks[5].style.backgroundColor = "green";
    blocks[5].classList.add("clicked");
    col++;
    index = numbers.indexOf(5);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}
else if ((blocks[5].style.backgroundColor == "green" && blocks[4].style.backgroundColor == "green" && !blocks[3].classList.contains("clicked") && !winner)){
    blocks[3].style.backgroundColor = "green";
    blocks[3].classList.add("clicked");
    col++;
    index = numbers.indexOf(3);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}
else if ((blocks[5].style.backgroundColor == "green" && blocks[3].style.backgroundColor == "green" && !blocks[4].classList.contains("clicked") && !winner)){
    blocks[4].style.backgroundColor = "green";
    blocks[4].classList.add("clicked");
    col++;
    index = numbers.indexOf(4);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}




// блоки 6 7 8
else if ((blocks[6].style.backgroundColor == "green" && blocks[7].style.backgroundColor == "green" && !blocks[8].classList.contains("clicked") && !winner)){
    blocks[8].style.backgroundColor = "green";
    blocks[8].classList.add("clicked");
    col++;
    index = numbers.indexOf(8);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}
else if ((blocks[6].style.backgroundColor == "green" && blocks[8].style.backgroundColor == "green" && !blocks[7].classList.contains("clicked") && !winner)){
    blocks[7].style.backgroundColor = "green";
    blocks[7].classList.add("clicked");
    col++;
    index = numbers.indexOf(7);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}
else if ((blocks[7].style.backgroundColor == "green" && blocks[8].style.backgroundColor == "green" && !blocks[6].classList.contains("clicked") && !winner)){
    blocks[6].style.backgroundColor = "green";
    blocks[6].classList.add("clicked");
    col++;
    index = numbers.indexOf(6);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}




// блоки 0 3 6
else if ((blocks[0].style.backgroundColor == "green" && blocks[3].style.backgroundColor == "green" && !blocks[6].classList.contains("clicked") && !winner)){
    blocks[6].style.backgroundColor = "green";
    blocks[6].classList.add("clicked");
    col++;
    index = numbers.indexOf(6);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}
else if ((blocks[0].style.backgroundColor == "green" && blocks[6].style.backgroundColor == "green" && !blocks[3].classList.contains("clicked") && !winner)){
    blocks[3].style.backgroundColor = "green";
    blocks[3].classList.add("clicked");
    col++;
    index = numbers.indexOf(3);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}
else if ((blocks[3].style.backgroundColor == "green" && blocks[6].style.backgroundColor == "green" && !blocks[0].classList.contains("clicked") && !winner)){
    blocks[0].style.backgroundColor = "green";
    blocks[0].classList.add("clicked");
    col++;
    index = numbers.indexOf(0);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}




// блоки 1 4 7
else if ((blocks[1].style.backgroundColor == "green" && blocks[4].style.backgroundColor == "green" && !blocks[7].classList.contains("clicked") && !winner)){
    blocks[7].style.backgroundColor = "green";
    blocks[7].classList.add("clicked");
    col++;
    index = numbers.indexOf(7);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}
else if ((blocks[1].style.backgroundColor == "green" && blocks[7].style.backgroundColor == "green" && !blocks[4].classList.contains("clicked") && !winner)){
    blocks[4].style.backgroundColor = "green";
    blocks[4].classList.add("clicked");
    col++;
    index = numbers.indexOf(4);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}
else if ((blocks[4].style.backgroundColor == "green" && blocks[7].style.backgroundColor == "green" && !blocks[1].classList.contains("clicked") && !winner)){
    blocks[1].style.backgroundColor = "green";
    blocks[1].classList.add("clicked");
    col++;
    index = numbers.indexOf(1);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}




// блоки 2 5 8
else if ((blocks[2].style.backgroundColor == "green" && blocks[5].style.backgroundColor == "green" && !blocks[8].classList.contains("clicked") && !winner)){
    blocks[8].style.backgroundColor = "green";
    blocks[8].classList.add("clicked");
    col++;
    index = numbers.indexOf(8);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}
else if ((blocks[2].style.backgroundColor == "green" && blocks[8].style.backgroundColor == "green" && !blocks[5].classList.contains("clicked") && !winner)){
    blocks[5].style.backgroundColor = "green";
    blocks[5].classList.add("clicked");
    col++;
    index = numbers.indexOf(5);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}
else if ((blocks[5].style.backgroundColor == "green" && blocks[8].style.backgroundColor == "green" && !blocks[2].classList.contains("clicked") && !winner)){
    blocks[2].style.backgroundColor = "green";
    blocks[2].classList.add("clicked");
    col++;
    index = numbers.indexOf(2);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}



// блоки 0 4 8
else if ((blocks[0].style.backgroundColor == "green" && blocks[4].style.backgroundColor == "green" && !blocks[8].classList.contains("clicked") && !winner)){
    blocks[8].style.backgroundColor = "green";
    blocks[8].classList.add("clicked");
    col++;
    index = numbers.indexOf(8);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}
else if ((blocks[0].style.backgroundColor == "green" && blocks[8].style.backgroundColor == "green" && !blocks[4].classList.contains("clicked") && !winner)){
    blocks[4].style.backgroundColor = "green";
    blocks[4].classList.add("clicked");
    col++;
    index = numbers.indexOf(4);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}
else if ((blocks[4].style.backgroundColor == "green" && blocks[8].style.backgroundColor == "green" && !blocks[0].classList.contains("clicked") && !winner)){
    blocks[0].style.backgroundColor = "green";
    blocks[0].classList.add("clicked");
    col++;
    index = numbers.indexOf(0);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}



// блоки 2 4 6
else if ((blocks[2].style.backgroundColor == "green" && blocks[4].style.backgroundColor == "green" && !blocks[6].classList.contains("clicked") && !winner)){
    blocks[6].style.backgroundColor = "green";
    blocks[6].classList.add("clicked");
    col++;
    index = numbers.indexOf(6);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}
else if ((blocks[2].style.backgroundColor == "green" && blocks[6].style.backgroundColor == "green" && !blocks[4].classList.contains("clicked") && !winner)){
    blocks[4].style.backgroundColor = "green";
    blocks[4].classList.add("clicked");
    col++;
    index = numbers.indexOf(4);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}
else if ((blocks[4].style.backgroundColor == "green" && blocks[6].style.backgroundColor == "green" && !blocks[2].classList.contains("clicked") && !winner)){
    blocks[2].style.backgroundColor = "green";
    blocks[2].classList.add("clicked");
    col++;
    index = numbers.indexOf(2);
    if (index > -1) {
        numbers.splice(index, 1);
    }

}
else {
    if (!winner){
        let randomindex = Math.floor(Math.random()*numbers.length);
        blocks[numbers[randomindex]].style.backgroundColor = "green";
        col++;
        blocks[numbers[randomindex]].classList.add("clicked");
        
        index = numbers.indexOf(numbers[randomindex]);
        if (index > -1) {
            numbers.splice(index, 1);
        }
    }
}