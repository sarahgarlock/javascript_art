// GETTING OUT CANVAS ELEMENT AND SETTING THE CONTEXT
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d")

// PARAMETERS ARE STARTX_COORD, STARTY_COORD, WIDTH, HEIGHT
// context.fillRect(10, 10, 300, 100)

//THIS IS A SQUARE
// context.fillStyle = "red";
// context.fillRect(10, 100, 50, 50)
// COLOR RECTANGLE
// context.fillStyle = "blue"
// context.fillRect(10, 10, 300, 100)

//SINGLE LINE
context.beginPath();
context.moveTo(10, 10);
context.lineTo(90, 10);
context.stroke();

// Triangle
context.beginPath();
context.moveTo(50, 10);
context.lineTo(10, 70);
context.lineTo(90, 70);
context.fill()


