// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Батьки дозволили?");
//   }
// }
// checkAge(18);

// function checkAge(age) {
//   return age > 18 ? console.log(true) : confirm("Батьки дозволили?");
// }
// checkAge(111);

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function min(a, b) {
//   a < b ? console.log(a) : console.log(b);
// }
// min(4, 10);

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?",
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };
// ask(
//   "Ви згодні?",
//   function () {
//     alert("Ви погодились.");
//   },
//   function () {
//     alert("Ви скасували виконання.");
//   }
// );
// ************************2 віріант*************************
// const ask = (question, yes, no) => {
//   if (confirm(question)) return yes();
//   else return no();
// };

// ask(
//   "Ви згодні?",
//   () => alert("Ви погодились."),
//   () => alert("Ви скасували виконання.")
// );

// function pow(x, n) {
//   if ((!Number.isInteger(x, n) || x, n < 1)) {
//     return alert("використовуйте натуральне число");
//   } else {
//     return alert(Math.pow(x, n));
//   }
// }
// pow(+prompt("Введіть число"), +prompt("Введіть ступінь"));

// https://devzone.org.ua/post/shcho-take-tsykl-podiy-ta-stek-vyklykiv-u-javascript
