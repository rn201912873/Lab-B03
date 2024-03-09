// name , age , breed
import Animal from './Animal.js'
class Dog extends Animal {
    static counter = 0
    constructor(name, age, breed) {
        super(name, age)
        this.breed = breed
        Dog.counter++;
    }
}

const dog = new Dog('Rex', 2, 'Labrador')
console.log(dog);
console.log(Dog.counter);