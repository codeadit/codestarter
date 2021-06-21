var canvasWidth = 800;
var canvasHeight = 400;
var paddleBottomBuffer = 40;
var paddleX = 50;
var paddleY = canvasHeight - paddleBottomBuffer;
var ballX = 20;
var ballY = 20;
var paddleWidth = 100;
var paddleHeight = 10;
var move = ballGoDiagonallyDownRight;
var ballR = 20;
var drawSpeed = 5;
var ballSpeed = 1;
var score = 0;

paddleInterval = window.setInterval(draw, drawSpeed);
gameStartTime = new Date().getTime();

drawCanvas(canvasWidth, canvasHeight);

function draw() {
  //Stop the game after a minute
  if (new Date().getTime() - gameStartTime > 120000){
        clearInterval(paddleInterval);
        return;
    }

  clearCanvas();
  printText(score);
  createNewBall();
  drawRectangle(paddleX, paddleY, paddleWidth, paddleHeight);

  if (isKeyPressed(keyRight)) {
    paddleGoRight();
  }

  if (isKeyPressed(keyLeft)) {
    paddleGoLeft();
  }


  //if ball is at the left edge
  if (ballX < ballR ) {
    if (move == ballGoDiagonallyDownLeft) {
      move = ballGoDiagonallyDownRight;
    }

    if (move == ballGoDiagonallyUpLeft) {
      move = ballGoDiagonallyUpRight;
    }
  }

  //if ball is at top edge
  if (ballY < ballR) {

    if (move == ballGoDiagonallyUpLeft) {
      move = ballGoDiagonallyDownLeft;
    }

    if (move == ballGoDiagonallyUpRight) {
      move = ballGoDiagonallyDownRight;
    }
    // if (move == ballGoUp) {
    //   move = ballGoDiagonallyDownLeft;
    // }

  }

  //if ball is at right edge
  if (ballX > canvasWidth - ballR) {
    if (move == ballGoDiagonallyUpRight) {
      move = ballGoDiagonallyUpLeft;
    }

    if (move == ballGoDiagonallyDownRight) {
      move = ballGoDiagonallyDownLeft;
    }
  }



if (ballY > canvasHeight - paddleBottomBuffer - ballR) {
    //if ball hits paddle
    if (ballX > paddleX && ballX < paddleX + paddleWidth) {
      score++;
      if (move == ballGoDiagonallyDownLeft) {
        move = ballGoDiagonallyUpLeft;

      }
      if (move == ballGoDiagonallyDownRight) {
        move = ballGoDiagonallyUpRight;

      }
      if (move == ballGoDown) {
        move = ballGoUp;
      }


    } else {
      //if ball missed the paddle
      score = 0;
      ballX = ballR + Math.random()*canvasWidth;
      ballY = ballR;
      createNewBall();
      ballSpeed = 1;
      ballR = 20;
    }
  }

  move();
}

function paddleGoRight() {
  if (paddleX == canvasWidth - paddleWidth) {
    paddleX = paddleX;
  } else {
    paddleX = paddleX + 2;
  }
}

function paddleGoLeft() {
  if (paddleX == 0) {
    paddleX = paddleX;
  } else {
    paddleX = paddleX - 2;
  }

}

function ballGoDown() {
  ballY = ballY + ballSpeed;
}
function ballGoUp() {
  ballY = ballY - ballSpeed;
}

function ballGoDiagonallyUpLeft() {
  ballX = ballX - ballSpeed;
  ballY = ballY - ballSpeed;
}

function ballGoDiagonallyUpRight() {
  ballX = ballX + ballSpeed;
  ballY = ballY - ballSpeed;
}
function createNewBall() {
    drawCircle(ballR, ballX, ballY);
}
function ballGoDiagonallyDownLeft() {
  ballX = ballX - ballSpeed;
  ballY = ballY + ballSpeed;
}
function ballGoDiagonallyDownRight() {
  ballX = ballX + ballSpeed;
  ballY = ballY + ballSpeed;
}
