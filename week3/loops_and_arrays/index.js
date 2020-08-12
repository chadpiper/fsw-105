var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]
//Old enough/Not old enough
function oldEnough(){
    for( i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18){
            console.log( " is old enough " )
        
        }else{(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 )
            console.log( " is not old enough ")
        }
    }
}

oldEnough();

//Old enough/Not old enough with Name
function oldEnoughWithName(){
    for( i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough " )
        
        }else{(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 )
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough ")
        }
    }
}

oldEnoughWithName();

//He or She
function heOrShe(){
    for( i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18){
            var userGender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ? "HE'S" : "SHE'S"
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. " + userGender + " good to see Mad Max Fury Road.")
         
        }else{
            var userGender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ? "HIM" : "HER"
            
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let " + userGender + " in.")
        }
      
    }
}

heOrShe()

//Odd Even

for (var i = 0; i <= 100; i++) {
    if (i === 0) {
            console.log(i +  " is even");
    }
    else if (i % 2 === 0) {
            console.log(i + " is even");   
    }
    else {
            console.log(i + " is odd");
    }
}