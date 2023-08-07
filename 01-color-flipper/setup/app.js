const colors = ["blue", "yellow", "rgba(133,122,200)", "#f15025"];
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