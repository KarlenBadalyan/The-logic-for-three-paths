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
    block.style.backgroundColor = bgColor.value ;
    block.innerText = content.value;
    block.style.display = "flex";
    block.style.justifyContent = "center";
    block.style.alignItems = "center";
    block.style.fontSize = "20px";
    block.style.fontFamily = "cursive";
    container2.append(block)

    document.querySelector(".css-block").innerHTML =`
    <p class ="item"> ${select.value}{</p>
        <p class="text">width: ${width.value}px</p>
        <p class="text">height:${heigth.value}px</p>
        <p class="text">color: ${color.value}</p>
        <p class="text">bgColor: ${bgColor.value}</p>
        <p class="text">content: ${content.value}</p>
        <p class="item">}</p>

    `;
    let items = [...document.querySelectorAll(".item")];
    items.map(item => {
        item.style.color = "aqua";
        item.style.fontSize = "20px";
        item.style.fontFamily = "fantasy";
    });
    let texts = [...document.querySelectorAll(".text")];
    // console.log(text);
    texts.map (el => {
        el.style.color = "white";
        el.style.fontSize = "20px";
        el.style.fontFamily = "cursive";
    })
});






