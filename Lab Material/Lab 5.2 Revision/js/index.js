// let height = 1.98;
// const PI = 3.14

// console.log(`PI is ${PI} and the height is ${height}`);

// const person = {
//     name: 'Ali',
//     age: 21,
//     gender: 'male'
// }

// const n = person.name
// const { name, age } = person;
// console.log(name, age);

// console.log(person);
// console.log(person.name);

const numbers = [11, 22, 21, 221, 22222, 3, 44, -9, -10, 4, 414]
const [a, b, ...others] = numbers

// built in methods
// sort , find , filter , map , reduce , includes , join , split , slice , splice 

// const sortedNumbers1 = numbers.sort((a, b) => b - a)
// const negNumbers = numbers.filter(num => num < 0)
// const cubeNumbers = numbers.map(a => `The cube is ${a ** 3}`)

// // a function given a value that requires another function that returns either true or false
// console.log(sortedNumbers1);
// console.log(negNumbers);
// console.log(cubeNumbers);


const people = [
    { name: 'Ali', age: 21, gender: 'male' },
    { name: 'Rana', age: 25, gender: 'female' },
    { name: 'Ahmed', age: 22, gender: 'male' },
    { name: 'Sara', age: 23, gender: 'female' },
    { name: 'Mona', age: 24, gender: 'female' },
]

const femaleStudent = people.filter(a => a.gender === 'female')
const sumAgesOfFemale = femaleStudent.reduce((acc, curr) => acc + curr.age, 0)

console.log(sumAgesOfFemale / femaleStudent.length);
console.log(femaleStudent);