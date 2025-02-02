let timeLeft, score, timerInterval, consecutiveMistakes, totalTime, totalQuestions, gameStarted;

function startGame() {
    if (gameStarted) return;  // Предотвращаем запуск игры несколько раз
    gameStarted = true;
    document.querySelector(".start-btn").style.display = "none";
    timeLeft = 60; score = 0; consecutiveMistakes = 2; totalTime = 0; totalQuestions = 0;
    document.getElementById("score").innerText = score;
    document.getElementById("timer").innerText = timeLeft;
    updateTimerBar();
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;
        updateTimerBar();
        if (timeLeft <= 0) endGame();
    }, 1000);
    generateQuestion();
}

function updateTimerBar() {
    document.getElementById("timerBar").style.width = (timeLeft / 60) * 100 + "%";
}

function generateQuestion() {
    if (timeLeft <= 0) return; // Не генерируем вопросы, если время истекло
    const operations = ["+", "-", "×", "÷"];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    if (operation === "÷") {
        num1 = num1 * num2;
    }
    let correctAnswer = eval(num1 + operation.replace("×", "*").replace("÷", "/") + num2);
    correctAnswer = operation === "÷" ? Math.floor(correctAnswer) : correctAnswer;
    document.getElementById("question").innerText = `${num1} ${operation} ${num2} = ?`;
    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = "";
    let answers = new Set([correctAnswer]);
    while (answers.size < 4) {
        let wrongAnswer = correctAnswer + Math.floor(Math.random() * 10) - 5;
        if (wrongAnswer !== correctAnswer && wrongAnswer > 0) answers.add(wrongAnswer);
    }
    Array.from(answers).sort(() => Math.random() - 0.5).forEach(answer => {
        const div = document.createElement("div");
        div.classList.add("answer");
        div.innerText = answer;
        div.onclick = () => checkAnswer(div, answer, correctAnswer);
        answersContainer.appendChild(div);
    });
    totalQuestions++;
    startTime = performance.now();
}

function checkAnswer(element, selected, correct) {
    let endTime = performance.now();
    totalTime += (endTime - startTime);
    if (selected === correct) {
        score++;
        consecutiveMistakes = 2;
    } else {
        timeLeft -= consecutiveMistakes;
        consecutiveMistakes++;
        element.classList.add("wrong");
        setTimeout(() => element.classList.remove("wrong"), 400);
    }
    document.getElementById("score").innerText = score;
    document.getElementById("timer").innerText = timeLeft;
    updateTimerBar();
    if (timeLeft > 0) generateQuestion();
}

function endGame() {
    clearInterval(timerInterval);
    let avgTime = (totalTime / totalQuestions).toFixed(2);
    document.getElementById("gameOverMessage").innerHTML = `Время вышло!<br>Вы решили <b>${totalQuestions}</b> задач.<br>Среднее время: <b>${Math.floor(avgTime / 1000)}:${(avgTime % 1000).toFixed(0).padStart(3, '0')}</b> сек.`;
    document.getElementById("gameOverMessage").style.display = "block";
    document.querySelector(".start-btn").style.display = "block";
    gameStarted = false; // Разрешаем начать игру заново
}
