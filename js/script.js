let cvs = document.getElementById('cvs');
let ctx = cvs.getContext('2d');
let box = 32;

function setBG() {
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 16 * box, 16 * box);
}

setBG();