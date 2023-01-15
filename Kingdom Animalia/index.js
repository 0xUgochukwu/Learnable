// Kingdom Animalia

class Animalia {
    name;
    bloodType;
    hasBackbone;

    // Encapsulation
    #organForMovement;
    #typeBasedOnFood;
    
    constructor(name, organForMovement, typeBasedOnFood, bloodType, hasBackbone){
        // Abstraction
        if(this.constructor === Animalia) {
            throw new Error("Abstract classes can't be instantiated.");
        }

        this.#organForMovement = organForMovement
        this.#typeBasedOnFood = typeBasedOnFood
        this.name = name
        this.bloodType = bloodType
        this.hasBackbone = hasBackbone
    }

    move() {
        console.log("I have the ability to move with my " + this.#organForMovement);
    }

    eat() {
        console.log(`I am a ${this.#typeBasedOnFood} animal and I can eat...`);
    }

    reproduce(){
        console.log("I have the ability to reproduce");
    }
}


/////////////////////////////////////////////////////////////////////////////////////

// Inheritance
class Arthropoda extends Animalia {
    // Encapsulation
    #noOfLegs;
    constructor(name, organForMovement, typeBasedOnFood, bloodType, hasBackbone, noOfLegs){
        super(name, organForMovement, typeBasedOnFood, bloodType, hasBackbone);
        this.#noOfLegs = noOfLegs;
    }

    // Encapsulation
    #layEggs() {
        console.log("I just laid some eggs...");
    }

    // Polymorphisim
    reproduce(){
        console.log("I reproduce by laying lots of eggs so I am about to lay some eggs, give me some time...");
        setTimeout(this.#layEggs, 3000);
        console.log("I have laid some eggs it will take a while to hatch")
        
    }

    move() {
        console.log(`I have ${this.#noOfLegs} legs and I can move with them`);
    }
}



/////////////////////////////////////////////////////////////////////////////////////


// Inheritance
class Mammal extends Animalia {
    // Encapsulation
    #typeOfMilk;
    #noOfLegs;
    constructor(name, organForMovement, typeBasedOnFood, bloodType, hasBackbone, typeOfMilk, noOfLegs){
        super(name, organForMovement, typeBasedOnFood, bloodType, hasBackbone);
        this.#typeOfMilk = typeOfMilk;
        this.#noOfLegs = noOfLegs;
    }

    // Polymorphisim
    move() {
        console.log(`I have ${this.#noOfLegs} legs and I can move with them`);
    }

    giveBirth() {
        console.log("I give birth to my young ones");
    }

    produceMilk() {
        console.log("I produce " + this.#typeOfMilk + " milk");
    }
}



/////////////////////////////////////////////////////////////////////////////////////


// Inheritance
class Ave extends Animalia {
    // Encapsulation
    #typeOfEgg;
    #noOfLegs;
    constructor(name, organForMovement, typeBasedOnFood, bloodType, hasBackbone, typeOfEgg, noOfLegs){
        super(name, organForMovement, typeBasedOnFood, bloodType, hasBackbone);
        this.#typeOfEgg = typeOfEgg;
        this.#noOfLegs = noOfLegs;
    }

    // Polymorphisim
    move() {
        console.log(`I have ${this.#noOfLegs} legs and I can move with them but I can also fly with my wings`);
    }

    layEgg() {
        console.log("I lay " + this.#typeOfEgg + " eggs");
    }
}




/////////////////////////////////////////////////////////////////////////////////////


// Inheritance
class Reptile extends Animalia {
    // Encapsulation
    #typeOfEgg;
    #noOfLegs;
    constructor(name, organForMovement, typeBasedOnFood, bloodType, hasBackbone, typeOfEgg, noOfLegs){
        super(name, organForMovement, typeBasedOnFood, bloodType, hasBackbone);
        this.#typeOfEgg = typeOfEgg;
        this.#noOfLegs = noOfLegs;
    }

    // Polymorphisim
    move() {
        console.log(`I have ${this.#noOfLegs} legs and I can move`);
    }

    layEgg() {
        console.log("I lay " + this.#typeOfEgg + " eggs");
    }
}




/////////////////////////////////////////////////////////////////////////////////////

// Inheritance
class Amphibian extends Animalia {
    // Encapsulation
    #typeOfEgg;
    #noOfLegs;
    constructor(name, organForMovement, typeBasedOnFood, bloodType, hasBackbone, typeOfEgg, noOfLegs){
        super(name, organForMovement, typeBasedOnFood, bloodType, hasBackbone);
        this.#typeOfEgg = typeOfEgg;
        this.#noOfLegs = noOfLegs;
    }

    layEgg() {
        console.log("I lay " + this.#typeOfEgg + " eggs");
    }
}



/////////////////////////////////////////////////////////////////////////////////////

// Inheritance
class Fish extends Animalia {
    // Encapsulation
    #typeOfEgg;
    constructor(name, organForMovement, typeBasedOnFood, bloodType, hasBackbone, typeOfEgg){
        super(name, organForMovement, typeBasedOnFood, bloodType, hasBackbone);
        this.#typeOfEgg = typeOfEgg;
    }

    layEgg() {
        console.log("I lay " + this.#typeOfEgg + " eggs");
    }
}



/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////    Testing all the Classes     ///////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

// // Trying an instance of the Animalia Class will throw an error
// let animal = new Animalia("animal", "legs", "Carnivorous", "warm-blooded", true);



/////////////////////////////////////////////////////////////////////////////////////
console.log("For the Mammal Class");
console.log("-------------------------\n");

// Creating an instance of the Mammal Class
let esther = new Mammal("man", "legs", "Canivorious", "warm-blooded", true, "Breast", 2);
esther.move();
esther.giveBirth();
esther.produceMilk();

// Inherited property
esther.eat();

console.log("-------------------------\n");
let goat = new Mammal("goat", "legs", "herbivorious", "warm-blooded", true, "goat-breast", 4);
goat.move();
goat.giveBirth();
goat.produceMilk();


// Inherited property
goat.eat();

console.log("=================================\n");




/////////////////////////////////////////////////////////////////////////////////////
console.log("For the Ave Class");
console.log("-------------------------\n");

// Creating an instance of the Ave Class
let falcon = new Ave("falcon", "wings", "Carnivorous", "warm-blooded", true, "Hard", 2);
falcon.move();
falcon.layEgg();

// Inherited property
falcon.eat();

console.log("=================================\n");



/////////////////////////////////////////////////////////////////////////////////////
console.log("For the Reptile Class");
console.log("-------------------------\n");

// Creating an instance of the Reptile Class
let snake = new Reptile("snake", "None", "Carnivorous", "cold-blooded", true, "Soft", 0);
snake.move();
snake.layEgg();

// Inherited property
snake.eat();

console.log("=================================\n");


/////////////////////////////////////////////////////////////////////////////////////
console.log("For the Amphibian Class");
console.log("-------------------------\n");

// Creating an instance of the Amphibian Class
let frog = new Amphibian("frog", "None", "Carnivorous", "cold-blooded", true, "Soft", 4);
frog.move();
frog.layEgg();

// Inherited property
frog.eat();

console.log("=================================\n");




/////////////////////////////////////////////////////////////////////////////////////
console.log("For the Fish Class");
console.log("-------------------------\n");

// Creating an instance of the Fish Class
let shark = new Fish("shark", "fins", "Carnivorous", "cold-blooded", true, "Soft", 0);
shark.move();
shark.layEgg();

// Inherited property
shark.eat();

console.log("=================================\n");



/////////////////////////////////////////////////////////////////////////////////////
console.log("For the Arthropoda Class");
console.log("-------------------------\n");

// Creating an instance of the Arthropoda Class
let spider = new Arthropoda("spider", "legs", "Carnivorous", "cold-blooded", true, 8);
spider.move();
spider.reproduce();

// Inherited property
spider.eat();

console.log("=================================\n");