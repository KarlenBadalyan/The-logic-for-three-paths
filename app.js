container1 =document.getElementById("container1");
container2 =document.getElementById("container2");
container3 =document.getElementById("container3");

let width = document.getElementById ("width");
let heigth = document.getElementById("heigth");
let color = document.getElementById ("color");
let bgColor = document.getElementById("bgColor");
let content = document.getElementById("content");
let select = document.getElementById("elements");
let btn = document.getElementById("btn");

btn.addEventListener("click" , () =>{
    container2.innerHTML = "";
    let block = document.createElement("select.value");
    block.style.width = width.value + "px";
    block.style.height = heigth.value + "px";
    block.style.color = color.value;
    block.style.backgroundColor = backgroundColor.value ;
    block.style.content = content.content;
    block.style.display = "flex";
    block.style.justifyContent = "center";
    block.style.alignItems = "center";
    block.style.fontSize = "20px";
    block.style.fontFamily = "cursive";
    
})

