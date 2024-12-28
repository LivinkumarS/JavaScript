// Array (Map,reduce,filter)


// arr1.map((item,ind) => {
  //   console.log(item);
  //   console.log(ind);
// });

// filter function will return an array

// const newArr= arr1.filter((item) => {
//   return item;
// });

// console.log(newArr);

// Reduce function

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// reduce((accumulator, item, index)=>{ return },initial value)

const answer = arr1.reduce((accumulator, item) => {
  return accumulator*item;
}, 0);


console.log(answer);
