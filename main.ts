#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPinCode = 2345;

console.log(`Your account balance is: ${myBalance}`);

let pinAnswer = await inquirer.prompt
(
    {
        message: "Ener your pin code:",
        type: "number",
        name: "pin",
    }
);

if (pinAnswer.pin === myPinCode)
    {
        console.log("Your pin code is correct!");

        let operationAns = await inquirer.prompt
        (
            {
                name: "operation",
                message: "Select your option:",
                type: "list",
                choices: ["withdraw", "check balance"],
            }
        );

        if (operationAns.operation === "withdraw")
            {
                let amountAns = await inquirer.prompt
                (
                    {
                        name: "amount",
                        message: "Enter your amount",
                        type: "number",
                    }
                );

                myBalance -= amountAns.amount;

                if (amountAns.amount > 10000)
                    {
                        console.log("Your account balance is insufficient!");
                    } 
                    else
                    {
                        console.log("Your remaining balance is: " + myBalance);
                    }
            } 
            else if(operationAns.operation === "check balance")
            {
                console.log(`Your account balance is : ${myBalance}`);
            }
    }
    else
    {
        console.log("Your pin code is incorrect!");
    }
