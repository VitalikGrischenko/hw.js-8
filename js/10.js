// Цикл повинен питати число поки відвідувач не введе число, більше 100, або не натисне кнопку Відміна (ESC).

let number;

while (true) {
  number = prompt("Введіть число, більше 100:");

  if (number === null) {
    console.log("Ви натиснули кнопку 'Відміна'.");
    break;
  } else if (number > 100) {
    console.log("Ви ввели число більше 100: " + number);
    break;
  } else {
    continue;
  }
}