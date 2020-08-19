//Upper and Lower
function capitalizeAndLowercase(str){
    var upperAndLower = str.toUpperCase() + str.toLowerCase();
    return "Output:" + upperAndLower;
}

console.log(capitalizeAndLowercase("Hello"))

//Round down
function findMiddleIndex(str){
    var middleOfString = Math.floor(str.length / 2);
    return "Round down:" + middleOfString;
}

console.log(findMiddleIndex("Hello"))
console.log(findMiddleIndex("Hello World"))

//Slice
function returnFirstHalf(str){ 
        return str.slice(0, str.length / 2);
      }

console.log(returnFirstHalf("Hello"))
console.log(returnFirstHalf("Hello World"))

//Capitalize odd




//Capitalize
function capitalize(str){
    var array1 = str.split(' ');
  var newArray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newArray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newArray1.join(' ');
}
console.log(capitalize("hey friends! practice practice practice!"));
