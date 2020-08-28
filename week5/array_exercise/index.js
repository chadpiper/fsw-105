//Section A

//5 or Greater
function fiveAndGreaterOnly(arr) {
    const result = arr.filter(function(num){
       if (num >= 5) {
           return true;
     };
  });  
    return result;   
};
//console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

//Even Numbers
function evenOnly(arr){
    const result = arr.filter(function(num){
        if (num % 2 === 0) {
            return true;
      };
   });  
     return result;   
 };
 //console.log(evenOnly([3, 6, 8, 2]));


 //Section B

 //Doubles
 function doubleNumbers(arr){
     const result = arr.map(function(num){
         return num * 2
   });  
     return result;   
 };
 //console.log(doubleNumbers([2, 5, 100]));

 //Capitalize
  
    const name = ["john", "jacob", "jingeheimer", "shmidt"];
    let capitalize = name.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
 
   //console.log(capitalize)


 // Extra Credit String
 function namesOnly(arr){
    return arr.map(i => i.name)
    };     
    var res = namesOnly([
        {
          name: "Angelina Jolie",
          age: 80
        },
        {
          name: "Eric Jones",
          age: 2
        },
        {
          name: "Paris Hilton",
          age: 5
        },
        {
          name: "Kayne West",
          age: 16
        },
        {
          name: "Bob Ziroll",
          age: 100
        }
      ])
    
    //console.log(res);

//Section C

//Total of Numbers
function total(arr){
    const result = arr.reduce(function(final, num){
        final += num
        return final
    })
    return result
}
    //console.log(total([1, 2, 3]));


//Voters
function totalVotes(array) {
    return array.reduce(function(count, voter) {
        return count + voter.voted;
    }, 0);
}

var voters = [
{ name: 'Bob', age: 30, voted: true }, 
{ name: 'Jake', age: 32, voted: true }, 
{ name: 'Kate', age: 25, voted: false }, 
{ name: 'Sam', age: 20, voted: false }, 
{ name: 'Phil', age: 21, voted: true }, 
{ name: 'Ed', age:55, voted: true }, 
{ name: 'Tami', age: 54, voted: true }, 
{ name: 'Mary', age: 31, voted: false }, 
{ name: 'Becky', age: 43, voted: false }, 
{ name: 'Joey', age: 41, voted: true }, 
{ name: 'Jeff', age: 30, voted: true }, 
{ name: 'Zack', age: 19, voted: false }];

    //console.log(totalVotes(voters));

//Extra Credit 2
function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }
  var arrays = [
      ["1", "2", "3"],
      [true],
      [4, 5, 6]
  ]

    //console.log(flatten(arrays));


//Section D

//Largest to smallest
function greatestToLeast(arr) {
   const result = arr.sort(function(a, b){
       return  b-a
    });
        return result
}
    //console.log(greatestToLeast([1, 3, 5, 2, 90, 20]))

//Smallest to largest
function leastTGreatest(arr) {
    const result = arr.sort(function(a, b){
        return  a-b
     });
         return result
 }
     //console.log(leastTGreatest([1, 3, 5, 2, 90, 20]))

     //Shortest to longest string
     function lengthSort(arr) {
        const result = arr.sort(function(a, b){
            return a.length - b.length
        });
            return result 
     }
    //console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]))

     //Extra Credit alphabetically
     function alphabetical(arr) {
         const result = arr.sort(function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
          });
            return result
    }
     console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));


