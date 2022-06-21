/* eslint-disable no-undef */
const Account = require('./account');

describe('Account', () => {
  let account;
  beforeEach(() => {
    account = new Account();
  });

  describe('.deposit', () => {
    it('augments the account by the amount deposited', () => {
      account.deposit(10);
      account.deposit(10);
      expect(account.balance).toEqual([[10, 0], [10, 0]]);
    });
  });
});
