const Bank=require('./bank')

describe('Bank', () => {
  let bank; 
  beforeEach(() => {
    bank = new Bank();
  })

  let date = new Date()
  let todaysDate;
  beforeEach(() => {
    todaysDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
  })

  beforeAll(() => {
    jest.spyOn(process.stdout, 'write').mockImplementation(function () { return true; });
});

    describe('.deposit', () => {
      it('augments the account by the amount deposited', () => {
        bank.deposit(10)
        bank.deposit(10)
        expect(bank.account).toEqual([[`${todaysDate}`, 10, 0], [`${todaysDate}`, 10, 0]])
      })

    describe('.withdraw', () => {
      it('deceases the account by the amount withdrawn', () => {
        bank.deposit(10)
        bank.deposit(10)
        bank.withdraw(5)
        expect(bank.printStatement()).toEqual(`date || deposit || withdrawal || balance\n${todaysDate} || 10 || 0 || 10\n${todaysDate} || 10 || 0 || 20\n${todaysDate} || 0 || 5 || 15`)
      })
    })

    describe('.printStatement', () => {
      it('stores two deposits/withdrawals', () => {
        bank.deposit(10)
        bank.deposit(10)
        expect(bank.printStatement()).toEqual(`date || deposit || withdrawal || balance\n${todaysDate} || 10 || 0 || 10\n${todaysDate} || 10 || 0 || 20`)
      })

      it('includes the date', () => {
        bank.deposit(1000)
        bank.deposit(2000)
        bank.withdraw(500)
        expect(bank.printStatement()).toEqual(`date || deposit || withdrawal || balance\n${todaysDate} || 1000 || 0 || 1000\n${todaysDate} || 2000 || 0 || 3000\n${todaysDate} || 0 || 500 || 2500`)
      })

      it('returns the balance with the following header: date || deposit || withdrawal || balance', () => {
        bank.deposit(1000)
        expect(bank.printStatement()).toEqual(`date || deposit || withdrawal || balance\n${todaysDate} || 1000 || 0 || 1000`)
        //the below are failed attempts to test std out 
        // expect(console.log).toHaveBeenCalledWith(`date || deposit || withdrawal || balance\n${todaysDate} || 1000 || 0 || 1000`)
        // expect(process.stdout.write).toHaveBeenLastCalledWith(`date || deposit || withdrawal || balance\n${todaysDate} || 1000 || 0 || 1000`)
      })
    })
  })
})

//edge cases: overdrawing 
//can't test console.log, but return includes the line breaks... console.log gives me the output that
//matches the spec...

//to do:
// Do your commit messages clearly describe what that commit does?(normal)
// Does each class follow the single responsibility principle?
// Ask each class, spec and method/function what it does, if the reply involves the word "and" you probably need to refactor. (normal)
//do you mock dependency time?(additional)
//Is each method & class as small as possible?(normal)
//To avoid:
          //A transaction class that has a method that prints itself(normal)
          //The feature tests don't use a test framework (e.g. RSpec or Jasmine)
          //One or two classes that do all the work
          //One class is significantly longer than all of the others
          //The decimal points are missing on the end of the numbers
          //The tests only pass today, because the dates aren't mocked or passed in as arguments
          //Transaction is abbreviated to `trans` or `txn`
          
//line lengths less than 80 characters ...
//at least 3 classes that you can reasonably justify
//classes fewer than 30 lines (strict), 50 lines (additional), 
//methods fewer than 5 lines (strict), 7 lines (additional), 
//Do you use appropriate data structures to hold the necessary values your program needs?
//Eg: If you keep the statement header line in a method - it gets created every time you invoke the method. 
//What are the parts of the statement output that change often and which parts stay the same? How can you 
//refactor your code to make this clear?
//do you test for behaviour, rather than state? (additional)
//do your test descriptions read clearly (additional)
//Do you make appropriate use of the testing framework's methods to keep your test code clean? (additional)
// eg for RSpec: `described_class` , aliasing an explicit `subject`, `context`,  using `let()` carefully (additional)
//Do you have a clear separation between your program logic and output? (additional)
// (Eg for Ruby: Do you call `puts` only once in your program?) (additional)
// If you loop through an array passing a block of code with puts in it: you're calling `puts` for each loop. Aim to construct the 
//string representation of the statement before calling `puts`. (additional)
//Do your unit tests mock the dependencies of the object they are testing? (normal)
// Does the linter (e.g. Rubocop, ESLint) pass with no warnings? (normal)
// Are your variable, method, & class names clear and descriptive? (normal)




