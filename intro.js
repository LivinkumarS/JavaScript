// Conditional Clauses

function BMIcalculator(weight, height) {
  if (height <= 2) {
    return weight / (height * height);
  } else {
    return weight / (((height / 100) * height) / 100);
  }
}

const weight = prompt("Your weight: ");
const height = prompt("Your height: ");

if (BMIcalculator(weight, height) < 18) {
  console.log("Under Weight");
} else if (BMIcalculator(weight, height) > 25) {
  console.log("Over weightt");
} else {
  console.log("Correct Weight");
}

// Nested If


if(true){
  if(true){
    //code
  }
}



const a = 10;
const b = "10";

if (a == b) {
  if (a === b) {
    console.log("Welcome");  
  } else {
    console.log("Vanakkam");  
  }
} else if (a === b) {
  console.log("Hello");
} else {
  console.log("hi");  
}
