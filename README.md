<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Упражнения</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea, #764ba2);
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            max-width: 400px;
            background: white;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            text-align: center;
        }

        h2 {
            color: #333;
        }

        .exercise {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
            background: #f3f3f3;
            transition: 0.3s;
            cursor: pointer;
        }

        .exercise:hover {
            background: #ddd;
            transform: scale(1.05);
        }

        .exercise-icon {
            width: 40px;
            height: 40px;
            background: #667eea;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 20px;
        }

        .exercise a {
            text-decoration: none;
            color: #333;
            flex-grow: 1;
            text-align: left;
            padding-left: 10px;
            font-size: 16px;
        }

        #passwordPrompt {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }

        #passwordBox {
            background: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }

        #passwordInput {
            padding: 10px;
            font-size: 16px;
            margin-bottom: 20px;
            width: 200px;
        }

        #submitBtn {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            background-color: #667eea;
            color: white;
            border: none;
            border-radius: 5px;
        }
    </style>
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
