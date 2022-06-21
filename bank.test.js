/* eslint-disable max-len */
/* eslint-disable no-undef */
const Bank = require('./bank');

describe('Bank', () => {
  let bank;
  beforeEach(() => {
    bank = new Bank();
  });

  const date = new Date();
  let todaysDate;
  beforeEach(() => {
    todaysDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  });

  describe('.deposit', () => {
    it('augments the account by the amount deposited', () => {
      bank.deposit(10);
      bank.deposit(10);
      expect(bank.account.balance).toEqual([[10, 0], [10, 0]]);
    });

    describe('.withdraw', () => {
      it('deceases the account by the amount withdrawn', () => {
        bank.deposit(10);
        bank.deposit(10);
        bank.withdraw(5);
        expect(bank.statement.printStatementWithDate()).toEqual(`date || deposit || withdrawal || balance\n${todaysDate} || 10.00 || 0.00 || 10.00\n${todaysDate} || 10.00 || 0.00 || 20.00\n${todaysDate} || 0.00 || 5.00 || 15.00`);
      });

      it('does not allow you to become overdrawn', () => {
        expect(bank.withdraw(10)).toThrow('Insufficient funds!');
      });
    });
  });
});
