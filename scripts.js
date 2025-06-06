const player = document.getElementById("player");
const bonus = document.getElementById("bonus");
const scoreDisplay = document.getElementById("score");

let x = 0;
let y = 0;
const step = 10;
let score = 0;

function movePlayer() {
  player.style.left = `${x}px`;
  player.style.top = `${y}px`;
}

function randomPosition() {
  const max = 370; // 400 - 30
  const bonusX = Math.floor(Math.random() * max);
  const bonusY = Math.floor(Math.random() * max);
  bonus.style.left = `${bonusX}px`;
  bonus.style.top = `${bonusY}px`;
}
randomPosition();

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && y > 0) y -= step;
  if (e.key === "ArrowDown" && y < 370) y += step;
  if (e.key === "ArrowLeft" && x > 0) x -= step;
  if (e.key === "ArrowRight" && x < 370) x += step;

  movePlayer();
  checkCollision();
});

function checkCollision() {
  const playerRect = player.getBoundingClientRect();
  const bonusRect = bonus.getBoundingClientRect();

  if (
    playerRect.left < bonusRect.right &&
    playerRect.right > bonusRect.left &&
    playerRect.top < bonusRect.bottom &&
    playerRect.bottom > bonusRect.top
  ) {
    score++;
    scoreDisplay.textContent = score;
    randomPosition();
  }
}
https://sites.google.com/school5mirnograd.com/yelenatur/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BD%D0%B0-%D0%B4%D1%96%D1%8F%D0%BB%D1%8C%D0%BD%D1%96%D1%81%D1%82%D1%8C/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8-%D0%B2-scratch-7-%D0%BA%D0%BB%D0%B0%D1%81
