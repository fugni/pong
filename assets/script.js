import {KeyHandler} from "./input.js";

const keys = new KeyHandler();

const scoreboard1 = document.getElementById("scoreboard1");
const scoreboard2 = document.getElementById("scoreboard2");

let score1 = 0;
let score2 = 0;

const paddle1 = document.getElementById("paddle1");
const paddle2 = document.getElementById("paddle2");

const paddleVelocity = 4;
let paddle1Pos = 200;
let paddle2Pos = 200;

const ball = document.getElementById("ball");
let ballPosX = 242;
let ballPosY = 392;

function gameLoop() {
    if (keys.getKey("KeyW")) {
        if (paddle1Pos > 0) {
            paddle1Pos = paddle1Pos - paddleVelocity;
            paddle1.style.top = paddle1Pos + "px";
        }
    }
    if (keys.getKey("KeyS")) {
        if (paddle1Pos < 368) {
            paddle1Pos = paddle1Pos + paddleVelocity;
            paddle1.style.top = paddle1Pos + "px";
        }
    }
    if (keys.getKey("KeyI")) {
        if (paddle2Pos > 0) {
            paddle2Pos = paddle2Pos - paddleVelocity;
            paddle2.style.top = paddle2Pos + "px";
        }
    }
    if (keys.getKey("KeyK")) {
        if (paddle2Pos < 368) {
            paddle2Pos = paddle2Pos + paddleVelocity;
            paddle2.style.top = paddle2Pos + "px";
        }
    }

    ballPosX = Math.random() * 500;
    ballPosY = Math.random() * 800;

    ball.style.top = Math.round(ballPosX) + "px";
    ball.style.left = Math.round(ballPosY) + "px";

    scoreboard1.innerText = score1;
    scoreboard2.innerText = score2;
    
    score1 += Math.round(Math.random());
    score2 += Math.round(Math.random());

    requestAnimationFrame(gameLoop);
    
}

gameLoop();