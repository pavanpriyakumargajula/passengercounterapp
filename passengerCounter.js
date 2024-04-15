
let count = 0;
let countEL = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment(){
    count += 1;
   countEL.innerText = count;
}

function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEL.textContent = 0;
    count = 0;
}


