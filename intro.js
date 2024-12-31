// leap year --- divided by 4, 2000, 1904

let year = prompt("Year: ");   //optimized code

if (
  (year % 100 == 0 && year % 400 == 0) ||
  (year % 100 != 0 && year % 4 == 0)
) {
  console.log("Leap Year");
} else {
  console.log("Non leap year");
}
