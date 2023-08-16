const btn = document.getElementById("btn");
const shapes = [
    "quad-circle-l",
    "quad-circle-2",
    "quad-circle-3",
    "quad-circle-4",
    "triangle-l",
    "triangle-2",
    "triangle-3",
    "triangle-4",
    "circle",

];

const colors = ["#01d2fd", "#513575", "#7822b5", "#26807c"];
const boxes = document.querySelectorAll(".container div");

let generatePattern = () => {
    boxes.forEach((box) => {
        box.className="";
        let i = Math.floor(Math.random() * shapes.length);
        let j = Math.floor(Math.random() * colors.length);
        box.classList.add(shapes[i]);
        box.style.backgroundColor = colors[j];
    });
}

btn.addEventListener ("click", generatePattern);
window.addEventListener("load", generatePattern);
