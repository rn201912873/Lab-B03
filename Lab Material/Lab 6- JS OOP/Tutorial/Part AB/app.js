import * as bank from "./repo/bank.js";

const temp = {
    accountNo: 555,
    balance: 1500,
    type: 'saving'
}

console.log(bank.getAccounts());

bank.addAccount(temp)
console.log(`After adding the account`);
console.log(bank.getAccounts());