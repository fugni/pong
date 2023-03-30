const scoreboard1 = document.getElementById("scoreboard1");
const scoreboard2 = document.getElementById("scoreboard2");

let score1 = 0;
let score2 = 0;

const paddle1 = document.getElementById("paddle1");
const paddle2 = document.getElementById("paddle2");

const paddleVelocity = 16;
let paddle1Pos = 200;
let paddle2Pos = 200;

function paddleUp(paddleX, paddleXPos) {
    paddle1Pos = paddle1Pos - paddleVelocity;
    paddle1.style.top = paddle1Pos + "px";
}

// const controller = {
//     KeyW: {pressed: false, func: paddleUp(paddle1, paddle1Pos)},
//     KeyS: {pressed: false, func: paddleDown(paddle1, paddle1Pos)},
//     KeyI: {pressed: false, func: paddleUp(paddle2, paddle2Pos)},
//     KeyK: {pressed: false, func: paddleDown(paddle2, paddle2Pos)},
// }

window.addEventListener("keydown", function(e) {
    switch (e.code) {
        case "KeyW":
            if (paddle1Pos <= 0) {

            } else {
                paddleUp(paddle1, paddle1Pos)
            }
            break;
        case "KeyS":
            if (paddle1Pos >= 370) {
                
            } else {
                paddle1Pos = paddle1Pos + paddleVelocity;
                paddle1.style.top = paddle1Pos + "px";
            }
            break;
    }
})

window.addEventListener("keydown", function(e) {
    switch (e.code) {
        case "KeyI":
            if (paddle2Pos <= 0) {
        
            } else {
                paddle2Pos = paddle2Pos - paddleVelocity;
                paddle2.style.top = paddle2Pos + "px";
            }
            break;
        case "KeyK":
            if (paddle2Pos >= 370) {
                
            } else {
                paddle2Pos = paddle2Pos + paddleVelocity;
                paddle2.style.top = paddle2Pos + "px";
            }
            break;
    }
})



scoreboard1.innerText = score1;
scoreboard2.innerText = score2;