// leap year --- divided by 4, 2000, 1904

let year = prompt("Year: ");

if (year % 100 == 0) {
  if (year % 400 == 0) {
    console.log("Leap Year");
  } else {
    console.log("Non leap year");
  }
} else if (year % 4 == 0) {
  console.log("Leap year");
} else {
  console.log("Non leap year");
}
