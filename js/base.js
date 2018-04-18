var CANVAS_WIDTH, CANVAS_HEIGHT;

var grid_state = 0;

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    canvas_box = document.getElementById('canvas-box'),
    grid = document.getElementById('grid-show');

init();

function init() {

    canvas.width = $('#canvas-box').width();
    canvas.height = $('#canvas-box').width() / 2;
    
    drawGrid('lightgray', 10, 10);
    grid.addEventListener('click', gridToggle);

}

function drawGrid(color, stepx, stepy) {
    context.save()

    context.shadowColor = undefined;
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    context.strokeStyle = color;
    context.fillStyle = '#ffffff';
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    context.strokeStyle = color;
    context.fillStyle = '#ffffff';
    context.lineWidth = 0.5;
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    for (var i = stepx + 0.5; i < context.canvas.width; i += stepx) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, context.canvas.height);
        context.stroke();
    }

    for (var i = stepy + 0.5; i < context.canvas.height; i += stepy) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(context.canvas.width, i);
        context.stroke();
    }

    context.restore();
}

function gridToggle() {

    if (grid_state) {
        drawGrid('lightgray', 10, 10);
        grid_state = 0;
    } else {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        grid_state = 1;
    }

}