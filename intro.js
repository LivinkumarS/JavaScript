// ok 100

//100 time

//0 to 99   ++ means increment, -- means decrement

let arr = [
  "apple",
  "orange",
  "banana",
  "gooseberries",
  "blueberries",
  "grapes",
];

let str = "hello";

// console.log(arr.length);

// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// console.log(arr[5]);
// console.log(arr[4]);
// console.log(arr[3]);
// console.log(arr[2]);
// console.log(arr[1]);
// console.log(arr[0]);

// while Loops

// let i = 0;

// while (i < 10) {
//   console.log("less");
//   i = i + 1;
// }

// let ans = 2; //2!=  undefined
// let selectedAnswer; //undefined

// while (true) {
//   selectedAnswer = prompt("Type Your Answer");
//   if (selectedAnswer == ans) {
//     console.log("Congrats. correct answer!");
//     break;
//   }
// }

// For In

let obj = {
  name: "hari",
  age: 21,
  dob: "1 / 2 / 2003",
};

let arr1 = [
  "apple",
  "orange",
  "banana",
  "gooseberries",
  "blueberries",
  "grapes",
];

// console.log(arr1);

// for (let keyValue in arr1) {
//   console.log(keyValue);
//   console.log(arr1[keyValue]);
// }

// For of

for (let values of arr1) {
  console.log(values);         // only for arrays.
}
