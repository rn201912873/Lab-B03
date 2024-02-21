
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


// let person = {
//     name: "Ali",
//     age: 25,
//     isMarried: true,
//     gender: "male"
// }
// const { name, gender, isMarried, age } = person;

// person.nationality = "pakistani"

// console.log(person);
// console.log(`
//     Name = ${name} 
//     Age = ${age}
//     Married = ${isMarried}
//     Gender = ${gender},
//     Nationality = ${person.nationality}

// `);


// const arr = [1, -2, -3, 41, 112, 113, 11, 15, 86, 871, 71, 8, 9, 10]

// // add an element to the end
// console.log("Before the push", arr)
// arr.push(100)
// console.log("After the arr.push(100)", arr)

// // add an element to the beginning  
// console.log("Before the unshift", arr)
// arr.unshift(0)
// console.log("After the arr.unshift(0)", arr)

// // remove from the last
// console.log("Before the pop", arr)
// arr.pop()
// console.log("After the arr.pop()", arr)

// // remove from the begining
// console.log("Before the shift", arr)
// arr.shift()
// console.log("After the arr.shift()", arr)

// // console.table(arr);

// // remove from any location

// console.log("Before the splice", arr)
// arr.splice(2, 1)
// console.log("After the arr.splice(2, 1)", arr)

// // sorting
// console.log("Before the sort", arr)
// // arr.sort((a, b) => b - a) --concl.
// console.log("Sorted", arr);

// declaration
// let a = 10
// let b = 40

// function add(a, b) {
//     return a + b
// }

// const add2 = function (a, b) {
//     return a + b
// }

// // calling and using the function
// const result = add(a, b)
// const result2 = add2(a, b)

// console.log("add(a, b) = ", result);
// console.log("add2(a, b) = ", result2);

// arrow function

// function add(a, b) {
//     return a + b
// }

// (a, b) => a + b

// const checkFailPass = grade => grade >= 50 ? "Pass" : "Fail"

// function failPass(grade) {
//     if (grade >= 50) return "Pass" 
//      return "Fail"
// }

// // function print(a) {
// //     console.log(a)
// // }

// a => console.log(a)

//     // function scream() {
//     //     console.log("I am screaming");
//     // }

//     () => console.log("I am screaming")


// scream2()
// print("Something to print")
// aAdd(2, 4)



// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mul = (a, b) => a * b;
// const div = (a, b) => a / b;
// const square = (a) => a ** 2;

// const a = 20
// const b = 10


// function calculator(a, b, operation) {
//     const result = operation(a, b)
//     return result
// }

// console.log("Calc ", calculator(a, b, add));
// console.log("Calc ", calculator(20, 10, mul));

// console.log("Calc ", calculator(50, 10, div));
// console.log("Calc ", calculator(50, 10, (t, r) => t / r));
// console.log("Calc ", calculator(50, 10, square));



// const arr = [11, 21, 13, -4, 5, -6, -7]
// arr.sort((a, b) => a - b)
// console.log(arr);

// // change or map
// const cubeArray = arr.map(a => a ** 3)
// console.log(cubeArray);

// // arr.forEach(a => console.log(a))
// const v = arr.find(a => a == -4)
// console.log(v);

const students = [
    {
        name: "Ali",
        age: 25,
        gender: "Male"
    },
    {
        name: "Zahra",
        age: 24,
        gender: "Female"
    },
    {
        name: "Mariam",
        age: 22,
        gender: "Female"
    },
    {
        name: "Ahmed",
        age: 23,
        gender: "Male"
    },
    {
        name: "Rashid",
        age: 21,
        gender: "Male"
    },
]

// Array Methods and Arrow Functions

console.log(students[0]
