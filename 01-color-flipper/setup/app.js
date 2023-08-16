const colors = ["green", "yellow", "rgba(128,128,128)", "#800000"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const random = getRandomNumber();
    console.log(random);
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
