//using object literal
const student = {name: 'Sakib', job: 'cricketer'};

//using new keyword//constructor
const person = new Object();

//creating object using inheritence

// const human = Object.create(null);
const human = Object.create(student);

//creating object from class
class People {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const peop = new People('manush', 32);

//creating object from function
function Manush(name){
    this.name = name
}

const man = new Manush('Kader');

console.log(man);