// donate 버튼 누르면 donateNFT.html로 이동
function donateBtn() {
    console.log("donateBtn click");
    location.href = "donateNft";
}

//get all the drawingStuff divs
const drawingStuff = document.querySelectorAll(".drawingStuff");

// randomize the drawingStuff on the page
let speed = [];
let position = [];

for (let i = 0; i < drawingStuff.length; i++) {
    //set the position of the drawingStuff to a random location
    let height = Math.floor(Math.random() * window.innerHeight);
    let width = Math.random() * window.innerWidth;

    drawingStuff[i].style.top = `${height}px`;
    drawingStuff[i].style.left = `${width}px`;

    //push a random speed between 20 + 35 into the speed array to determine how fast the drawingStuff will fall
    speed.push(Math.ceil(Math.random() * 35) + 20);
    //push the drawingStuff current top value into the position array
    position.push(height);
}

// set the make it rain function...
function makeItRain() {
    // go through the drawingStuff array...
    for (let i = 0; i < drawingStuff.length; i++) {
        //set the drawingStuff position to the new position, which is it's current position plus the speed it is falling
        position[i] += speed[i];
        drawingStuff[i].style.top = `${position[i]}px`;

        //if the drawingStuff falls below the end of the screen, reset it and choose a new position
        if (position[i] > window.innerHeight + 50) {
            position[i] = -75;
            drawingStuff[i].style.left = `${
                Math.random() * window.innerWidth
            }px`;
        }
    }
}

//set the interval to re-reun the makeItRain function every 100ms
setInterval(makeItRain, 100);
