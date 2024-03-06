const accounts = [
    {
        accountNo: 123,
        balance: 1000,
        type: 'saving'
    },
    {
        accountNo: 234,
        balance: 2000,
        type: 'current'
    }
]
export function getAccounts() {
    return accounts;
}

export function addAccount(account) {
    accounts.push(account);
}