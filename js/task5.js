/*
        Задание:
        Напишите сценарии "Игра 'Угадай число'". Суть игры - угадать за меньшее количество попыток число, которое загадал сценарий.
        Каждый раз, когда игрок пытается угадать число, сценарий выводит подсказку - меньшее или большее число было загадано сценарием.
        Сценарий загадывает число только один раз в начале игры и это число не меняется до завершения игры.
        При завершении игры выведите пользователю информацию о том, с какой попытки угадано значение и сколько было потрачено на это времени.

        Для генерации случайного числа используйте следующий код:
        let randomValue = Math.floor(Math.random() * 101); // случайное значение от 0 до 100 будет записано в переменную randomValue
        
        Пример игры:
        Сценарий: я загадал случайное значение от 0 до 100
        Пользователь: 50
        Сценарий: я загадал значение больше, чем 50
        Пользователь: 75
        Сценарий: я загадал значение меньше, чем 75
        Пользователь: 62
        Сценарий: я загадал значение меньше, чем 62
        Пользователь: 56
        Сценарий: Правильно! Загаданное значение 56. Вы угадали с 4й попытки за 10 сек.
        */



let input = document.querySelector(".field__input");
let btn = document.querySelector(".field__btn");
let check = document.querySelector(".result__check__out");
let help = document.querySelector(".result__help__out");
let count = document.querySelector(".result__count__out");

let item = 0;
let randomValue = Math.floor(Math.random() * 101);

btn.addEventListener("click", function() {
    userNum = input.value;
    if (userNum > randomValue) {
        check.textContent = "Не угадали..."
        help.textContent = "Многовато,попробуйте еще";
        item++;
        count.textContent = item;
    } else if (userNum < randomValue) {
        check.textContent = "Не угадали..."
        help.textContent = "Маловато,попробуйте еще";
        item++;
        count.textContent = item;
    } else {
        check.textContent = "Поздравляю!Вы угадали"
        help.textContent = "Ура!";
        item++;
        count.textContent = item;
    }
})


