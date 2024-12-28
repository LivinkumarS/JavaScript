const voter = prompt("Enter you age: ");


// 24> vote and marriage 18> can vote, <18 can nothing

if (voter < 18) {
  console.log("Cannot Vote");
}

else {
  console.log("Can Vote");
}