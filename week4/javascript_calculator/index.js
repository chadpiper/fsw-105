var readlineSync = require('readline-sync');
var firstNum = readlineSync.questionInt("PLease enter the first number:");
var secondNum = readlineSync.questionInt("PLease enter the second number:");
var enteredOperator = readlineSync.question("What operation do you want to perform? add/sub/mul/div/quit:");


function addTwoNumbers(num1, num2){
    return num1 + num2;
}

function multiplyTwoNumbers(num1, num2){
    return num1 * num2;
}

function divideTwoNumbers(num1, num2){
    return num1 / num2;
}

function subtractTwoNumbers(num1, num2){
    return num1 - num2;
}

//Add
if (enteredOperator == "add"){
  console.log(addTwoNumbers(firstNum, secondNum))
//Sub
} else if (enteredOperator == "sub"){
    console.log(subtractTwoNumbers(firstNum, secondNum))
    //Multiply
} else if (enteredOperator == "mul"){
    console.log(multiplyTwoNumbers(firstNum, secondNum))
    //Divide
} else if (enteredOperator == "div"){
    console.log(divideTwoNumbers(firstNum, secondNum))
} 