#! /usr/bin/env node
import inquirer from "inquirer";
const currancies = {
    PKR: 280,
    USD: 1,
    IND: 76.57,
    JPN: 0.76,
    Euro: 0.91,
};
let useranswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter From Currancies",
        choices: ['PKR', 'USD', 'IND', 'JPN', 'Euro']
    },
    {
        name: "To",
        type: "list",
        message: "Enter To Currancies",
        choices: ['PKR', 'USD', 'IND', 'JPN', 'Euro']
    },
    {
        name: "Amount",
        type: "number",
        message: "Enter Your Amount",
    }
]);
let fromamount = currancies[useranswer.from];
let toamount = currancies[useranswer.To];
let amount = useranswer.Amount;
let baseamount = amount / fromamount;
let convertedamount = baseamount * toamount;
console.log(fromamount);
console.log(toamount);
console.log(amount);
console.log(convertedamount);
