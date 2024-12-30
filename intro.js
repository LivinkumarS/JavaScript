// Objects

let arr = ["kavya", "priya", "parimala"];

// creating

let person1 = {
  name: "ajith",
  age: 51,
  gender: "male",
  role: "actor",
  canVote: true,
  printLastMovie: function () {
    console.log("thunivu");
  },
  latestMovies: [
    "thunivu",
    "valimai",
    "vivegam",
    "good bad ugly",
    "vidamuyarchi",
  ],
  movieRatings: {
    thunivu: 6.5,
    valimai: 3,
    vivegam: 6.5,
    ratedBy: {
      person1: "mekala",
      person2: "sushmitha",
      person3: "naveen",
      person4: "kamal",
      person5: "livin",
    },
  },
};

// console.log(person1["movieRatings"]["ratedBy"]["person5"]);

// Accessing

//console.log(person1["role"]); // objName["keyvalue"]
//console.log(person1.role); //objName.keyvalue

//modifying and adding key values

// person1.name="vijay"
// person1.age=45
// person1.noOfMovies=68

// console.log(person1);

// Deleting Key values

// delete person1.canVote
// console.log(person1);

// calling a function inside an object

// person1.printLastMovie();

// console.log(person1["latestMovies"][3]);

// this keyword

let objet1 = {
  name: "kumar",
  height: 5.5,
  weight: 60,

  printName: function () {        //recursion
    console.log("hi");
    this.printName();   
  },
  bmi: 22,
};


objet1.printName()