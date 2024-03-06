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
export function deposit(accountNo, amount) {
    const account = accounts.find(account => account.accountNo === accountNo)
    if (!account || amount < 0) return false
    account.balance += amount
    return true

}
export function withdraw(accountNo, amount) {
    const account = accounts.find(account => account.accountNo === accountNo)
    if (!account || amount > account.balance) return false
    account.balance += amount
    return true
}