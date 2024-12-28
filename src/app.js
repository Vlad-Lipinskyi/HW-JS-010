// 1 Завдання
let counter1 = 0;
const messageElement1 = document.getElementById("message1");

const interval = setInterval(() => {
  counter1++;
  messageElement1.innerText = `Повідомлення №${counter1}`;

  if (counter1 === 5) {
    clearInterval(interval);
  }
}, 1000);

// 2 Завдання
const boxes = document.querySelectorAll(".box");
let currentBox = 0;
const maxSize = 120;
const minSize = 80;

setInterval(() => {
  boxes.forEach((box) => {
    box.style.width = minSize + "px";
    box.style.height = minSize + "px";
  });

  boxes[currentBox].style.width = maxSize + "px";
  boxes[currentBox].style.height = maxSize + "px";

  currentBox = (currentBox + 1) % boxes.length;
}, 1000);

// 3 Завдання
let score = 0;
const scoreElement = document.getElementById("score");
const target = document.getElementById("target");
const gameArea = document.getElementById("gameArea");

const moveTarget = () => {
  const x = Math.random() * (gameArea.clientWidth - target.offsetWidth);
  const y = Math.random() * (gameArea.clientHeight - target.offsetHeight);
  target.style.left = x + "px";
  target.style.top = y + "px";
};

target.addEventListener("click", () => {
  score++;
  scoreElement.innerText = score;
  moveTarget();
});

setInterval(moveTarget, 3000);

// 4 Завдання
function startTimer() {
  const time = parseInt(document.getElementById("timeInput").value);
  const messageElement4 = document.getElementById("message4");
  const waitMessage = document.getElementById("waitMessage");

  if (isNaN(time) || time <= 0) {
    alert("Будь ласка, введіть дійсне число більше 0.");
    return;
  }

  waitMessage.innerText = `Зачекайте ${time} секунд`;

  setTimeout(() => {
    messageElement4.innerText = "Час вичерпано!";
    waitMessage.innerText = "";
  }, time * 1000);
}
