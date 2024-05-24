#! /usr/bin/env node
import inquirer from "inquirer";

// Initialize user balance and PIN
let myBalance = 50000;
let myPin = 1234;

// Print welcome message
console.log("\n\tWelcome to ATM Machine\n");

let pinAnswer = await inquirer.prompt([
    {
        name:"pin",
        type:"number",
        message:"Enter your PIN:"
    }
])

if(pinAnswer.pin === myPin){
    console.log("PIN is Correct, Login Successfully!");
    // console.log(`Current Account Balance is ${myBalance}`)

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type:"list",
            message:"Slect an operation:",
            choices:["Withdraw Amount", "Check Balance"]
        }
    ])
    if(operationAns.operation === "Withdraw Amount"){
        let amountAns = await inquirer.prompt([
            {
                name:"amount",
                type:"number",
                message:"Enter the amount to withdraw:"
            }
        ])
        if(amountAns.amount > myBalance){
            console.log("Insufficient Balance");
        }
        else{
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdrawn Successfully`);
            console.log(`Your Remaining Balance is:${myBalance}`);
        }

    }
    else if(operationAns.operation === "Check Balance"){
        console.log(`Your Account Balance is ${myBalance}`);
    }
}
else{
    console.log("PIN is Incorrect!, Try Again");
}