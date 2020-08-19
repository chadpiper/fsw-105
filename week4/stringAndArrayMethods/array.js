var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function arrayMethod(){

// Remove last from Vegetable
vegetables.pop();


//Remove first from fruit
fruit.shift()


//Find index orange
var o = fruit.indexOf("orange");


//Add number to the end of fruit
fruit.push(1);


//Length
vegetables.length;


//Add number to the end of vegetables
vegetables.push(3);


//Put the two arrays together
var food = fruit.concat(vegetables);


//Remove 2 elements
food.splice(4, 2);


//Reverse
food.reverse();


//String
var str = food.toString();

console.log(str)

}

console.log(arrayMethod())