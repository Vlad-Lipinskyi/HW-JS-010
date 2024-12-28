// Завдання 1: Таймер інтервалу
let counter1 = 0;
const messageElement1 = document.getElementById("message1");
const interval = setInterval(()=>{
    counter1++;
    messageElement1.innerText = `\u{41F}\u{43E}\u{432}\u{456}\u{434}\u{43E}\u{43C}\u{43B}\u{435}\u{43D}\u{43D}\u{44F} \u{2116}${counter1}`;
    if (counter1 === 5) clearInterval(interval);
}, 1000);
// Завдання 2: Анімація елементів
const boxes = document.querySelectorAll(".box");
let currentBox = 0; // Відслідковуємо, який бокс зараз анімується
const maxSize = 120; // Максимальний розмір боксів
const minSize = 80; // Мінімальний розмір боксів
setInterval(()=>{
    // Зменшуємо розмір всіх боксів
    boxes.forEach((box)=>{
        box.style.width = minSize + "px";
        box.style.height = minSize + "px";
    });
    // Збільшуємо поточний бокс
    boxes[currentBox].style.width = maxSize + "px";
    boxes[currentBox].style.height = maxSize + "px";
    // Перемикаємо на наступний бокс
    currentBox = (currentBox + 1) % boxes.length;
}, 1000);
// Завдання 3: Інтерактивна гра
let score = 0;
const scoreElement = document.getElementById("score");
const target = document.getElementById("target");
const gameArea = document.getElementById("gameArea");
const moveTarget = ()=>{
    const x = Math.random() * (gameArea.clientWidth - target.offsetWidth);
    const y = Math.random() * (gameArea.clientHeight - target.offsetHeight);
    target.style.left = x + "px";
    target.style.top = y + "px";
};
target.addEventListener("click", ()=>{
    score++;
    scoreElement.innerText = score;
    moveTarget();
});
setInterval(moveTarget, 3000);
// Завдання 4: Контроль часу
function startTimer() {
    const time = parseInt(document.getElementById("timeInput").value);
    const messageElement4 = document.getElementById("message4");
    const waitMessage = document.getElementById("waitMessage");
    if (isNaN(time) || time <= 0) {
        alert("\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0456\u0439\u0441\u043D\u0435 \u0447\u0438\u0441\u043B\u043E \u0431\u0456\u043B\u044C\u0448\u0435 0.");
        return;
    }
    // Показуємо повідомлення про очікування
    waitMessage.innerText = `\u{417}\u{430}\u{447}\u{435}\u{43A}\u{430}\u{439}\u{442}\u{435} ${time} \u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}`;
    // Встановлюємо таймер для показу повідомлення після заданого часу
    setTimeout(()=>{
        messageElement4.innerText = "\u0427\u0430\u0441 \u0432\u0438\u0447\u0435\u0440\u043F\u0430\u043D\u043E!";
        waitMessage.innerText = ''; // Видаляємо повідомлення про очікування
    }, time * 1000);
}

//# sourceMappingURL=index.816e7b21.js.map
