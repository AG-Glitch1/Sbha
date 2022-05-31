let btn = document.getElementById("btn");
let box = document.getElementById("box");
btn.addEventListener('click', btnClick);

box.innerText = 0;

let buttom = 0;


function btnClick(){
    ++buttom;
    box.innerText = buttom;

};
