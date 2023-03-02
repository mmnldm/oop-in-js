
// * Object Literals 

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw (){
        console.log('draw');
    }
};

circle.draw();

//*  Factory function

function createPerson(firstname, lastname){
    return {
        firstname,
        lastname,
        getFullName() {
            return console.log(`${firstname} ${lastname}`);
        }
    }
}

let person1 = createPerson("Emery", "Edem");
person1.getFullName();

// * 2 

function circled(radius){
    return {
        radius,
        draw(){
            console.log('draw')
        },
    }
}

const circ = circled(1);
circ.draw();

// * Constructor Function 
function CreateCircle(radius) {
    this.radius, 
    this.draw = function(){
        console.log("Draw")
    }
}

const another = new CreateCircle(1);
another.draw();