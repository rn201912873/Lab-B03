import * as repo from './bank.js'
import { expect } from 'chai'
const testAccount = {
    accountNo: 999,
    balance: 0,
    type: 'current'
}
describe('Add Account Function', () => {
    it('Adding an account should increase the length of the array', () => {
        const beforeAddingLength = repo.getAccounts().length
        repo.addAccount(testAccount)
        const afterAddingLength = repo.getAccounts().length

        expect(afterAddingLength).to.equal(beforeAddingLength + 1)

    })
})
describe('Delete Account Function', () => {
    it('After deleting , getAccount must return undefined', () => {
        repo.deleteAccount(testAccount.accountNo)
        const account = repo.getAccount(testAccount.accountNo)

        expect(account).to.be.undefined
    })
    it('After deleting the length of the array should decrease', () => {
        const beforeDeleteLength = repo.getAccounts().length
        repo.deleteAccount(123)
        const afterDeletingLength = repo.getAccounts().length

        expect(afterDeletingLength).to.equal(beforeDeleteLength - 1)
    })

})