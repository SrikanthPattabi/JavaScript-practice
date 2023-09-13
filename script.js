//Functions

// function decleration
//function add(a, b) {
//let a = 10;
//let b = 20;
//let res = a + b;
//console.log(res);
//}
//add(10, 30);

//function expression

let add1 = function (a, b) {
  let res = a + b;
  //console.log(res);
};
add1(20, 30);

//return keyword
function add2(a, b) {
  let res = a + b;
  return res;
}
let com = add2(40, 60);
//console.log(com);

//--------

//Arrays
//strings
const myName = "srikanth";
const firstName = new String("pattabi");
const rese = myName + firstName;
//console.log(myName[(0, 7)]);
//console.log(res.length);

const arr = ["srikanth", "pattabi", "mani", "venu", "karthik", "srikanth"];
//const res = arr.reverse();
const res = arr.lastIndexOf("srikanth");
//console.log(res);

//find method
const nums = [10, 20, 30, 40, 50, 60];
const result = nums.find(function (age) {
  return age < 30;
});
//console.log(result);

//filter method

const num = [10, 20, 30, 40, 50, 60];
const fit = num.filter(function (score) {
  return score < 50;
});
//console.log(fit);

//---------
// Object methods
const person = {
  name: "srikanth",
  age: 22,
  city: "guntur",
  habits: ["reading", "writing", "walking"],
};
//const her = person.habits;
person.isMarried = false;
delete person.isMarried;
//console.log(person);

// adding method to object
const person1 = {
  firstName: "Srikanth",
  lastName: "Pattabi",
  age: 22,
  city: "guntur",
  habits: ["reading", "writing", "walking"],
};

//const firstName1 = person1.firstName;
//const lastName1 = person1.lastName;
const resu = `This is ${person1.firstName} ${person1.lastName}`;
console.log(resu);
const fullName = `${person1.firstName} ${person1.lastName} is my fullName `;

person1.sri = function () {
  console.log(fullName);
};
person1.sri();

//This keyword
