const colors = ["#87CEEB", "#FFD700", "#8A2BE2", "#1E90FF"];
let currentNumber = 1;
let timerInterval;
let elapsedMilliseconds = 0;
let totalCells;
let selectedGridSize;
let gameStarted = false;

function selectGridSize(size) {
    selectedGridSize = size;
    document.getElementById("start-btn").style.display = "inline-block";
    generateGrid(size);
}

function startGame() {
    gameStarted = true;
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("result").textContent = "";
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        elapsedMilliseconds++;
        const seconds = Math.floor(elapsedMilliseconds / 100);
        const milliseconds = String(elapsedMilliseconds % 100).padStart(2, '0');
        document.getElementById("timer").textContent = `${seconds}:${milliseconds}`;
    }, 10);
}

function endGame() {
    clearInterval(timerInterval);
    const seconds = Math.floor(elapsedMilliseconds / 100);
    const milliseconds = String(elapsedMilliseconds % 100).padStart(2, '0');
    document.getElementById("result").textContent = `Игра завершена! Время: ${seconds}:${milliseconds}`;
}

function generateGrid(size) {
    currentNumber = 1;
    elapsedMilliseconds = 0;
    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "00:00";

    const grid = document.getElementById("grid");
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const numbers = Array.from({ length: size * size }, (_, i) => i + 1).sort(() => Math.random() - 0.5);
    const cells = [];
    totalCells = size * size;

    numbers.forEach((number, index) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = number;
        cell.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        cell.addEventListener("click", () => {
            if (gameStarted && parseInt(cell.textContent) === currentNumber) {
                if (navigator.vibrate) {
                    navigator.vibrate(200);
                }

                currentNumber++;
                if (currentNumber > totalCells) {
                    endGame();
                }
            }
        });
        grid.appendChild(cell);
        cells.push(cell);
    });

    if (size % 2 === 0) {
        placeRedDot();
    } else {
        document.getElementById("center-dot").style.display = "none";
    }
}

function placeRedDot() {
    const container = document.querySelector('.grid-container');
    const centerDot = document.getElementById('center-dot');
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;

    centerDot.style.left = `${centerX}px`;
    centerDot.style.top = `${centerY}px`;
    centerDot.style.display = "block";
}
