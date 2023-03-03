// * Object Literals 
const alien0 = {
    name: "Ali",
    species: "alien",
    phrase: () => console.log(`I'm ${alien0.name} the ${alien0.species}!`),
    fly: () => console.log("ZZZZZZZZZZingggg!!!!!"),
}

alien0.phrase();
// * Class Objects 
// * Grandparent Class 
class Character{
    constructor(speed){
        this.speed = speed;
    }
    move = () => console.log(`I am moving at ${this.speed} speed`);
}

// * Parent Class
class Enemy extends Character{
    constructor(power,speed){
        super(speed),
        this.power = power;
    }

    attack = () => console.log(`I am attack with this ${this.power}`)
}
class Alien extends Enemy {
    constructor(name,phrase,power,speed){
        super(power,speed),
        this.name = name,
        this.phrase = phrase,
        this.species = "alien"
    }
    fly = () => console.log("ZIiiiiinnnnnnnnnggggg!")
    sayPhrase = () => console.log(this.phrase);
}

class Bug{
    constructor(name,phrase){
        this.name = name,
        this.phrase = phrase,
        this.species = "bug"
    }
    hide = () => console.log("You can't catch me now!")
    sayPhrase = () => console.log(this.phrase)
}

class Robot{
    constructor (name,phrase){
        this.name = name
        this.phrase = phrase
        this.species = "robot"
    }
    transform = () => console.log("Optimus prime!")
    sayPhrase = () => console.log(this.phrase)
}

// * Instantiating classes
const alien1 = new Alien("Ali", "I'm Ali the Alien",10,20);
// * We use the "new" keyword followed by the corresponding class name
// * and pass it the corresponding parameters according to what was declared in the class constructor function
const robot1 = new Robot("Lien", "I'm Lien the Robot");
const bug1 = new Bug("Crusoe", "I'm Crusoe the Bug");

bug1.sayPhrase();
alien1.attack();

// * Inheritance in OOP 


class Person{
    constructor(name,age){
        this.name =  name;
        this.age =  age;
    }
}

class Lesbian extends Person{
    constructor(name,age,type){
        super(name,age)
        this.type = type;
    }
    identify(){
        console.log(`I identify as ${this.type}`);
    }
}

let kehlani = new Lesbian("Kehlani", 30, "Femme");
kehlani.identify();

// * Inheriting from Grandparent to Parent to Child class
