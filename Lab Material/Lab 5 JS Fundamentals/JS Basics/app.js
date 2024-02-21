// console.log("Welcome to JS");
// // declare variables in JS

// let a = 10;
// let name = "ali"

// a = 20;

// const PI = 3.14

// console.log(PI)

// var w = 33
// w = 44 + 33
// console.log(w);
// if (true) {
//     // v = 66
// }
// console.log(v);

// conditional , loops [SKIP]

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


let person = {
    name: "Ali",
    age: 25,
    isMarried: true,
    gender: "male"
}
const { name, gender, isMarried, age } = person;

person.nationality = "pakistani"

console.log(person);
console.log(`
    Name = ${name} 
    Age = ${age}
    Married = ${isMarried}
    Gender = ${gender},
    Nationality = ${person.nationality}

`);





