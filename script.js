var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var btn1 = document.querySelector(".random1");


function setgradient(){
    body.style.background = ("linear-gradient(to right, "
        + color1.value
        +","
        + color2.value
        + ")"
    );

    css.textContent = body.style.background + ";"
}

function generateRandomColor(){
    var random = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return random;
}

function setRandomColor(){
    color1.value = generateRandomColor();2
    color2.value = generateRandomColor();
    setgradient();
}


color1.addEventListener("input", setgradient);
color2.addEventListener("input", setgradient);
btn1.addEventListener("click", setRandomColor)

