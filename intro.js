//Functions

// Normal

function printName() {
  let arr = ["kamal", "naveen", "sushmitha", "mekala", 4, 2, 5];
  console.log(arr.includes("livin"));
}

// Expression

const tellName = function () {
  let arr = ["kamal", "naveen", "sushmitha", "mekala", 4, 2, 5];
  console.log(arr.includes("livin"));
};

// Arrow Function

const sayName = () => {
  let arr = ["kamal", "naveen", "sushmitha", "mekala", 4, 2, 5];
  console.log(arr.includes("livin"));
};

// Functions with returning statement

function returnName() {
  return 132132132;
}

// console.log(returnName());

// Functions with Parameter

function parameterFunction(number1, number2) {
  console.log(number1 + number2);
}

// parameterFunction(23, 32);
// parameterFunction(32324324, 4556);

const multiplication = function (a, b) {
  return a * b;
};

// console.log(multiplication(2,20));

function division(num1, num2, num3) {
  let a = num1 * num2;
  return a / num3;
}

// console.log(division(2, 3, 6) + 99); 100

// BMI

// weight/(height*height)


function BMIcalculator(weight, height) {
  return weight / (height/100 * height/100);
}

// console.log(BMIcalculator(68,180));


function printingFullName(firstName,lastName){
    console.log(firstName+" "+lastName);
}
