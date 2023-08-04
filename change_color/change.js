const htmlBody = document.querySelector('body'); //select the body
const randomClickFunction = function () {
    const colors = ["#065535", "#006991", "red", "yellow"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    htmlBody.style.backgroundColor = randomColor;
    console.log("the user clicked and set the color to " + randomColor);
} // function to change color of body randomly with math.random
htmlBody.onclick = randomClickFunction; // by clicking on the body  color changed based on the array 
