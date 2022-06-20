const Bank=require('./bank')

describe('Bank', () => {
  let bank; 
  beforeEach(() => {
    bank = new Bank();
  })

  describe('.deposit', () => {
    it('adds funds to the account', () => {
      bank.deposit(10)
      expect(bank.printStatement()).toEqual(10)
  });
    
  })
})