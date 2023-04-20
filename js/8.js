// Написати скрипт який буде перевіряти середній бал успішності учня. 
// Перервати роботу циклу, коли середній бал буде менше 7.



let grades = [];
let average = 0;

for (let i = 1; ; i++) {
  let grade = prompt("Введіть оцінку " + i + ":");
  if (grade === null || grade === "") {
    break;
  } else {
    grades.push(parseFloat(grade));
    average = grades.reduce((a, b) => a + b) / grades.length; 
    console.log("Середній бал успішності: " + average.toFixed(2)); 
    if (average < 7) { 
      break;
    }
  }
}
