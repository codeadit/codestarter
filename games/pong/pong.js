var centerX = 300;
var centerY = 200;
var iX = true;
var iY = true;
var leftPaddleY = 175;
var rightPaddleY = 175;
var paddleHeight = 50;
var ctx = $("#canvas")[0].getContext('2d');
var paddleSpeed = 10;
var ballSpeed;
var ballSpeedEasy = 15;
var ballSpeedMedium = 13;
var ballSpeedHard = 9;
var timer = window.setInterval(draw, ballSpeedEasy);

function init() {
  timer = window.setInterval(draw, ballSpeed);
}

function draw() {
  if (ctx) {
    //Draw code here
    drawBackground(ctx);
    drawLeftPaddle(ctx, leftPaddleY);
    drawRightPaddle(ctx, rightPaddleY);
    drawBall(ctx);
  } else {
    alert("This browser is not compatible.");
  }
}

function drawBall(ctx) {
  ctx.beginPath();
  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.arc(centerX, centerY, 8, 0, 2*Math.PI, 0);
  ctx.fill();

  if (didBallHitWallY(centerX, centerY)) {
    bounce(centerX, centerY);
  }

  if (didBallHitWallX(centerX, centerY)) {
    if (didBallHitRightPaddle() || didBallHitLeftPaddle()) {
      bounce(centerX, centerY);
    } else {
      centerX = 300;
      centerY = 200;
    }
  }
  moveBall(centerX, centerY);
}

function didBallHitWallX(x , y) {
  if ((x == 0) || (x == 600)) { // || in english is or
    return true;
  } else {
    return false;
  }
}

function didBallHitWallY(x , y) {
  if ((y == 0) || (y == 400)) { // || in english is or
    return true;
  } else {
    return false;
  }
}

function didBallHitRightPaddle() {
  if ((centerX == 600) && (centerY > rightPaddleY) && (centerY < rightPaddleY + paddleHeight)) {
    return true;
  } else {
    return false;
  }
}

function didBallHitLeftPaddle() {
  if ((centerX == 0) && (centerY > leftPaddleY) && (centerY < leftPaddleY + paddleHeight)) {
    return true;
  } else {
    return false;
  }
}

function bounce(x, y) {
  if (x == 600) {
    iX = false;
  }

  if (x == 0) {
    iX = true;
  }

  if (y == 400) {
    iY = false;
  }

  if (y == 0) {
    iY = true;
  }
}

function moveBall() {
  if (iX == true) {
    centerX++;
  } else {
    centerX--;
  }

  if (iY == true) {
    centerY++;
  } else {
    centerY--;
  }
}
function drawPaddles(ctx) {
}

function drawBackground(ctx) {
  ctx.fillStyle = 'rgb(0, 200, 0)';
  ctx.fillRect(0, 0, 600, 400);
}

function moveLeftPaddleUp() {
  for (i = 0; i < paddleSpeed; i++) {
    drawLeftPaddle(ctx, leftPaddleY--);
  }
}
function moveLeftPaddleDown() {
  for (i = 0; i < paddleSpeed; i++) {
    drawLeftPaddle(ctx, leftPaddleY++);
  }
}

function moveRightPaddleUp() {
  for (i = 0; i < paddleSpeed; i++) {
    drawRightPaddle(ctx, rightPaddleY--);
  }
}
function moveRightPaddleDown() {
  for (i = 0; i < paddleSpeed; i++) {
    drawRightPaddle(ctx, rightPaddleY++);
  }
}

function drawLeftPaddle(ctx, y) {
  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.fillRect(0, y, 7, paddleHeight);

}

function drawRightPaddle(ctx, y) {
  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.fillRect(600, y, -7, paddleHeight);
}

function setBallSpeedEasy() {
  window.clearInterval(timer);
  ballSpeed = ballSpeedEasy;
  init();
}

function setBallSpeedMedium() {
  window.clearInterval(timer);
  ballSpeed = ballSpeedMedium;
  init();
}

function setBallSpeedHard() {
  window.clearInterval(timer);
  ballSpeed = ballSpeedHard;
  init();
}
$(document).keydown(function(e){
    if (e.which == 40) { // Arrow Down
       moveRightPaddleDown();
       return false;
    }
    if (e.which == 38) { // Arrow Up
       moveRightPaddleUp();
       return false;
    }
    if (e.which == 39) { // Left Arrow
       moveLeftPaddleUp();
       return false;
    }
    if (e.which == 37) { // Right Arrow
       moveLeftPaddleDown();
       return false;
    }
});

$("#easy").click(setBallSpeedEasy);
$("#medium").click(setBallSpeedMedium);
$("#hard").click(setBallSpeedHard);
