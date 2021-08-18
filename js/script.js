let cvs = document.getElementById('cvs');
let ctx = cvs.getContext('2d');
let box = 32;

let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = 'right';

//Draws background on screen.
function drawBg() {
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

//Sends the event to the update handler.
document.addEventListener('keydown', update);

//Handles key presses and update screen.
function update(e) {
    if (e.keyCode == 37 && direction != 'right') direction = 'left';
    if (e.keyCode == 38 && direction != 'down') direction = 'up';
    if (e.keyCode == 39 && direction != 'left') direction = 'right';
    if (e.keyCode == 40 && direction != 'up') direction = 'down';
}

//Starts the game.
function runGame() {
    drawBg();
    drawSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == 'right') snakeX += box;
    if (direction == 'left') snakeX -= box;
    if (direction == 'up') snakeY -= box;
    if (direction == 'down') snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(runGame, 100);