// функції

// // function declaration

// function showMessage(name, city) {
//   console.log("Hello, my name is " + name + " I'm from " + city);
// }

// showMessage("Nata", "Kyiv");
// showMessage("Olya", "Lviv");

// // function expression

// const userName = "Ann";
// const sayHi = function () {
//   let message = "Hello, my name is ";
//   console.log(message + userName);
// };
// sayHi();

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(7, 8);
// console.log(result);

// const testFunk = function (a, b) {
//   console.log("a :", a);
//   console.log("b :", b);

//   return; // зупиняє виконання функції
//   a + b; // ігнорується
// };
// testFunk(5, 8);

// порядок виконання коду

// const a = function () {
//   c();
//   console.log("function a");
//   b();
// };

// const b = function () {
//   console.log("function b");
// };

// const c = function () {
//   console.log("function c");
// };

// a(); // function c function a function b

//аргументи i rest

// const addName = function () {
//   const arg = Array.from(arguments); // робить масив з псевдомасива
//   console.log(arguments); // arguments - псевдомасив Arguments(3) [1, 3, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//   console.log(arg); // (3) [1, 3, 5]
// };

// addName(1, 3, 5);

// Оператор rest используется для получения неопределенного количества аргументов в
// функции и объединения их в массив. Синтаксически он имеет троеточие в начале.

// const addName = function (...arg) {
//   console.log(arg);
// };

// addName(1, 3, 5); //(3) [1, 3, 5]
// addName(1, 3, 5, 85, 67); //(5) [1, 3, 5, 85, 67]

//callback (функція зворотнього виклику)

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }
// function showOk() {
//   console.log("You say ok");
// }
// function showCancel() {
//   console.log("You say No");
// }

// ask("Yes or no?", showOk, showCancel);

// hof

// const hello = function (name) {
//   console.log(`Hello, ${name}`);
// };

// const searchName = function (callback) {
//   const name = "Ivan";
//   callback(name);
// };
// searchName(hello);

// function checkAge(age) {
//   if (age > 18) {
//     return console.log("Hello"); //після return код ділі не виконується
//   }
//   return console.log("Good Bye");
// }
// checkAge(18);

// function showMovie(age) {
//   if (age < 21) {
//     return;
//   }
//   return console.log("Go to movie");
// }
// showMovie(21);

//стрілочні функції

// const test = (arg) => {
//   console.log(arg);
// };
// test("hello");

// const showMovie = (age) => {
//   if (age > 21) {
//     return console.log("Hello");
//   }
//   return console.log("Bye!");
// };
// showMovie(+prompt("Your age?"));

// const a = () => {
//   console.log("a");
// };

// const b = () => {
//   console.log("b");
// };

// const c = () => {
//   console.log("c");
//   a();
//   b();
// };

// c(); // c a b

// практика

// 1

// console.log(document);

// const numberRef = document.querySelector('input[name = "number"]');

// const buttonRef = document.querySelector("button");

// // console.log(numberRef.value);

// // console.log(buttonRef); // посилання на кнопку

// buttonRef.addEventListener("click", () => {
//   console.log(numberRef.value); // виводимо значення з input поля
// });

// 2

const addNumber = (number) => {
  let sum = Number(number) + 10;
  return console.log(sum);
};

const numberRef = document.querySelector('input[name = "number"]');

const buttonRef = document.querySelector("button");

buttonRef.addEventListener("click", () => addNumber(numberRef.value));
