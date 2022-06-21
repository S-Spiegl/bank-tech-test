const Statement = require('./statement');
const Account = require('./account');

describe('Statement', () => {
  let account;
  beforeEach(() => {
    account = new Account();
  });

  let statement;
  beforeEach(() => {
    statement = new Statement(account);
  });

  const date = new Date();
  let todaysDate;
  beforeEach(() => {
    todaysDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  });

  describe('.generateStatement', () => {
    it('can handle more than one deposit/withdrawal', () => {
      account.deposit(10);
      account.deposit(10);
      expect(statement.printStatementWithDate()).toEqual(`date || deposit || withdrawal || balance\n${todaysDate} || 10.00 || 0.00 || 10.00\n${todaysDate} || 10.00 || 0.00 || 20.00`);
    });

    it('includes the date', () => {
      account.deposit(1000);
      account.deposit(2000);
      account.withdraw(500);
      expect(statement.printStatementWithDate()).toEqual(`date || deposit || withdrawal || balance\n${todaysDate} || 1000.00 || 0.00 || 1000.00\n${todaysDate} || 2000.00 || 0.00 || 3000.00\n${todaysDate} || 0.00 || 500.00 || 2500.00`);
    });

    it('returns the balance with the following header: date || deposit || withdrawal || balance', () => {
      account.deposit(1000);
      expect(statement.printStatementWithDate()).toEqual(`date || deposit || withdrawal || balance\n${todaysDate} || 1000.00 || 0.00 || 1000.00`);
    });

    // these tests only work if I deposit via the account not the bank...
  });

  describe('.printStatementWithDate', () => {
    it('rounds figures to two decimal places', () => {
      account.deposit(10.70);
      expect(statement.printStatementWithDate()).toEqual(`date || deposit || withdrawal || balance\n${todaysDate} || 10.70 || 0.00 || 10.70`);
    });
  });
});
