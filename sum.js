// Импорт встроенного модуля Node.js
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите первое число: ', (firstNumber) => {
  rl.question('Введите второе число: ', (secondNumber) => {
    // Сложение чисел
    let result = Number(firstNumber) + Number(secondNumber);

    // Запись результата в файл
    fs.writeFile('output.txt', `Результат: ${result}`, (err) => {
      if (err) throw err;
      console.log('Результат был записан в output.txt');

      rl.close();
    });
  });
});
