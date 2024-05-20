#! /usr/bin/env node

import inquirer from "inquirer";

let accountBalance = 10000;
const pinCode = 2345;

let pinNumber = await inquirer.prompt
(
    [
        {
            name: "pin",
            type: "number",
            message: "Enter your pin code :"
        }
    ]
);

if ( pinNumber.pin == pinCode)
    {
        let accountType = await inquirer.prompt
        (
            [
                {
                    name: "account",
                    type: "list",
                    message: "Select your account type :",
                    choices: ["Current account", "Saving account"]
                },
                {
                    name: "operation",
                    type: "list",
                    message: "Select your desired option :",
                    choices: ["Withdrawl", "Deposit", "Balance check"]
                }
            ]
        );

        if (accountType.operation == "Withdrawl")
            {
                let withdrawlType = await inquirer.prompt
                (
                    [
                        {
                            name: "method",
                            type: "list",
                            message: "Select your transaction method :",
                            choices: ["Cash withdrawl", "Fast cash"]
                        }
                    ]
                );

                if (withdrawlType.method == "Cash withdrawl")
                    {
                        let amount = await inquirer.prompt
                        (
                            [
                                {
                                    name: "cash",
                                    type: "number",
                                    message: "Input the amount you want to withdraw :"
                                }
                            ]
                        );

                        accountBalance -= amount.cash;

                        if (amount.cash > 10000)
                            {
                                console.log("Your account balance is insufficient!");
                            }
                            else
                            {
                                console.log(`Your remaining account balance is : ${accountBalance}`);
                            }
                    }
                    else if (withdrawlType.method == "Fast cash")
                        {
                            let cash = await inquirer.prompt
                            (
                                [
                                    {
                                        name: "fCash",
                                        type: "list",
                                        message: "Select amount you want to withdraw :",
                                        choices: ["500", "1000", "3000", "5000", "10000"]
                                    }
                                ]
                            );

                            accountBalance -= cash.fCash;

                            console.log(`Your remaining account balance is : ${accountBalance}`);
                        }

            }
            else if (accountType.operation == "Deposit")
                {
                    let amountDeposit = await inquirer.prompt
                    (
                        {
                            name: "deposit",
                            type: "number",
                            message: "Enter your amount to Deposit :",
                        }
                    )

                    accountBalance += amountDeposit.deposit;

                    console.log(`Your total amount balance is : ${accountBalance}`);

                }
                else
                {
                    console.log(`Your account balance is : ${accountBalance}`);
                }

        
        }
        else
        {
            console.log("You've entered incorrect pin code!");
        };
    