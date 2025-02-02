<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Упражнения</title>
    <link rel="stylesheet" href="main.css">
</head>

<body>
    <div id="passwordPrompt">
        <div id="passwordBox">
            <h2>Введите пароль</h2>
            <input type="password" id="passwordInput" placeholder="Пароль" onkeypress="handleKeyPress(event)">
            <button id="submitBtn" onclick="checkPassword()">Войти</button>
        </div>
    </div>

    <div class="container">
        <h2>Упражнения</h2>
        <div class="exercise" onclick="location.href='index1.html'">
            <div class="exercise-icon">🔍</div>
            <a href="index1.html">Совпадения</a>
        </div>
        <div class="exercise">
            <div class="exercise-icon">🧠</div>
            <a href="index2.html">Матрица Памяти</a>
        </div>
        <div class="exercise">
            <div class="exercise-icon">🎨</div>
            <a href="index3.html">Совпадение цветов</a>
        </div>
        <div class="exercise">
            <div class="exercise-icon">📊</div>
            <a href="index4.html">Таблица Шульте</a>
        </div>
        <div class="exercise">
            <div class="exercise-icon">💡</div>
            <a href="index5.html">Мнемотехника</a>
        </div>
        <div class="exercise">
            <div class="exercise-icon">➕</div>
            <a href="index6.html">Арифметика</a>
        </div>
    </div>

    <script>
        const correctPassword = "4589rmd";

        function checkPassword() {
            const enteredPassword = document.getElementById("passwordInput").value;
            if (enteredPassword === correctPassword) {
                document.getElementById("passwordPrompt").style.display = "none";
            } else {
                alert("Неверный пароль! Попробуйте снова.");
            }
        }

        // Функция для обработки нажатия клавиши
        function handleKeyPress(event) {
            if (event.key === "Enter") {
                checkPassword(); // Запускаем проверку пароля при нажатии клавиши Enter
            }
        }
    </script>
</body>

</html>
