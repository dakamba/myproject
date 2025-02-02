const colors = ["#87CEEB", "#FFD700", "#8A2BE2", "#1E90FF"];
        let currentNumber = 1;
        let timerInterval;
        let elapsedMilliseconds = 0;  // Используем миллисекунды
        let totalCells;
        let selectedGridSize;
        let gameStarted = false; // Флаг, показывающий, началась ли игра

        // Выбор размера таблицы
        function selectGridSize(size) {
            selectedGridSize = size; // Запоминаем выбранный размер
            document.getElementById("start-btn").style.display = "inline-block"; // Показываем кнопку "Начать"
            generateGrid(size); // Генерируем таблицу
        }

        // Функция запуска игры
        function startGame() {
            gameStarted = true; // Игра началась
            document.getElementById("start-btn").style.display = "none"; // Скрываем кнопку "Начать"
            document.getElementById("result").textContent = ""; // Скрытие результата
            startTimer(); // Запуск таймера
        }

        // Функция для старта таймера с миллисекундами
        function startTimer() {
            timerInterval = setInterval(() => {
                elapsedMilliseconds++; // Увеличиваем миллисекунды
                const seconds = Math.floor(elapsedMilliseconds / 100); // Считаем секунды
                const milliseconds = String(elapsedMilliseconds % 100).padStart(2, '0'); // Получаем миллисекунды
                document.getElementById("timer").textContent = `${seconds}:${milliseconds}`; // Обновляем отображение
            }, 10); // Обновление каждые 10 миллисекунд
        }

        // Функция для завершения игры
        function endGame() {
            clearInterval(timerInterval); // Останавливаем таймер
            const seconds = Math.floor(elapsedMilliseconds / 100);
            const milliseconds = String(elapsedMilliseconds % 100).padStart(2, '0');
            document.getElementById("result").textContent = `Игра завершена! Время: ${seconds}:${milliseconds}`;
        }

        // Генерация сетки
        function generateGrid(size) {
            currentNumber = 1; // Сброс счётчика на 1
            elapsedMilliseconds = 0; // Сброс времени
            clearInterval(timerInterval); // Сброс таймера
            document.getElementById("timer").textContent = "00:00"; // Обновление таймера

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
                    // Проверка на правильность последовательности
                    if (gameStarted && parseInt(cell.textContent) === currentNumber) {
                        // Вибрация на мобильных устройствах
                        if (navigator.vibrate) {
                            navigator.vibrate(200); // Вибрация на 200 миллисекунд
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

            // Теперь проверка на чётность будет выполнена только после того, как таблица сгенерирована
            if (size % 2 === 0) {
                placeRedDot(); // Функция для установки красной точки в центр контейнера
            } else {
                document.getElementById("center-dot").style.display = "none"; // Скрываем точку, если таблица нечётная
            }
        }

        // Функция для установки красной точки в центр контейнера
        function placeRedDot() {
            const container = document.querySelector('.grid-container');
            const centerDot = document.getElementById('center-dot');
            const containerRect = container.getBoundingClientRect();
            const centerX = containerRect.width / 2;
            const centerY = containerRect.height / 2;

            centerDot.style.left = `${centerX}px`;
            centerDot.style.top = `${centerY}px`;
            centerDot.style.display = "block"; // Показываем точку
        }
    
