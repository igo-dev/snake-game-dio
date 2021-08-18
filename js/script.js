let cvs = document.getElementById('cvs');
let ctx = cvs.getContext('2d');
let box = 32;

let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

//Draws background on screen.
function setBG() {
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 16 * box, 16 * box);
}

//Draws snake on screen.
function drawSnake() {
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = 'green';
        ctx.fillRect(snake[i].x, snake[i].y, box, box)
        
    }
}

setBG();
drawSnake();