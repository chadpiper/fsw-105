const readlineSync = require('readline-sync');

// Wait for user's response.
const userName = readlineSync.question('May I have your name? ');

const introWelcomeMessage = `Welcome ${userName} to the Escape Room Simulation Game`
console.log(introWelcomeMessage);

//Tracking Player
let playerHasKey = false;
let playerIsAlive = true;
let playerAlreadyHasKey = false


while (playerIsAlive == true)
{
    
    const menuOptions = readlineSync.keyIn(`Press 1 to put hand in hole \n Press 2 to find the key \n  Press 3 to open the door`, {limit: '$<1-3>'});
    if (menuOptions == 1){
        //PlayerDead
        console.log(`Bummer ${userName}! Try again next time. GAME OVER`)
        playerIsAlive = false;
    }
    else if (menuOptions == 2 && playerAlreadyHasKey == false){
        console.log(`${userName}, Key found!!! Continue with game.`)
        playerAlreadyHasKey = true
    }
    else if (menuOptions == 2 && playerAlreadyHasKey == true){
        console.log(`${userName}, how many keys do you need to open one door with one lock.... Try a different option.`)
    }
    else if (menuOptions == 3 && playerAlreadyHasKey == false){
        console.log(`${userName}, Key found!!! Insert key into lock.`)
        playerAlreadyHasKey = true;
    }
    else if (menuOptions == 3 && playerAlreadyHasKey == true){
        console.log(`${userName}, Key is found!!! You insert key into lock.`)
        playerIsAlive = false;
    }
}
 

