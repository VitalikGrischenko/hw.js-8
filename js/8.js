// Написати скрипт який буде перевіряти середній бал успішності учня. 
// Перервати роботу циклу, коли середній бал буде менше 7.



let grade = [];
let grade2 = 0;
let grade3 = 0;

for (let i = 1; i <= 10; i += 1) {
  const grade = Number(Math.round(Math.random() * (12 - 1) + 1));
  marks.push(grade);
  grade3 += grade;
  const gradesLenght = grades.length;
  grade2 = Number(Math.round(grade3 / gradesLenght));
}

console.log(grades);
console.log(grade2);

if (grade2 <= 7) {
  console.log(
    `You have got quite bad average mark - ${grade2}, so it is better to not hear it`
  );
} else {
  console.log(`Ur parents are proud with you! ${grade2}`);
}
