export default class Animal {
    // properties [attributes

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString() {
        return `Animal[name=${this.name}, age=${this.age}]`;
    }
}



const animal = new Animal('dog', 2);
console.log(animal);
