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
    //* Exclusive property for this object => Encapsulation
    #birthYear

    constructor(name,phrase,power,speed,birthYear){
        super(power,speed),
        this.name = name,
        this.phrase = phrase,
        this.species = "alien"
        this.#birthYear = birthYear
    }
    fly = () => console.log("ZIiiiiinnnnnnnnnggggg!")
    sayPhrase = () => console.log(this.phrase);
    attack = () => console.log("Now I do what I want, Now I do what I want");
    howOld = () => console.log(`I was born in ${this.#birthYear}`)
}


// * Instantiating classes
const alien1 = new Alien("Ali", "I'm Ali the Alien",10,20,2000);
// * We use the "new" keyword followed by the corresponding class name
// * and pass it the corresponding parameters according to what was declared in the class constructor function
alien1.attack();
alien1.howOld();
console.log(alien1);

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

// * Encapsulation 
