//Replace Var

const name = "John"
let age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

//Re-write .map()

const carrots = ["bright orange", "ripe", "rotten"]

 mapVegetables = arr => {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    });
}

console.log(mapVegetables([carrots]));


//Re-write this.filter()

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

filterForFriendly = arr => {
    return arr.filter(person => {
        return person.friendly
    });
}

console.log(filterForFriendly(people));

//Re-write to arrow function

 doMathSum = (a, b) => {
    return a + b
}
console.log(doMathSum(1, 2));
 
produceProduct = (a, b) => {
    return a * b
}
console.log(produceProduct(5, 5));

//printString

function myFunc(name, age){
    return "Hi" + name + "how does it feel to be" + age
}
console.log(myFunc('Jane Doe', 100));

