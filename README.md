# bank-tech-test
#diagrams 
![diagram](public/images/diagram.png)

#questions/notes for Eóin, with reference to the guidance: 

Ask each class, spec and method/function what it does, if the reply involves the word "and" you probably need to refactor. (normal)
  - account - contains the balance
  - statement - generates a statement based on the account with a header for clarity and formatting for readability 
  - bank - allows the user to put money into and take money from their account. It's also here where the user accesses and runs functions on the statement.

- I did not mock the date, the reason being I had some problems with general implementation and having struggled to mock the date at the beginning I was reluctant to spend too much time trying it at the end. I would like to discuss this/some starting points of where to look at how to do this, if possible. I feel like the only way the tests would fail is if they were run at midnight and the date changed in the few seconds they took to run...


- There is mention of needing to avoid a transaction class that has a method that prints itself ... what would a transaction class look like? does this mean statement class? should the statement be printed from within bank? And if so, does this mean a printStatement function that is defined in Statement but called from bank, or does it mean all of the work is done from within Bank, or even a Print class?

- The feature tests don't use a test framework, as far as I'm aware ... Eóin, would you be able to explain this a bit more to me? My understanding of feature tests is that in this context they would be run from node, with the developer simulating input from a user, since the REPL is where the interaction will take place. If we were building an app, presumably we'd use cypress or something similar for feature tests, but in this context I'm unsure how a framework could be used for feature tests.

- One class is significantly longer than all of the others, but falls within the size constraints of the additional requirements (no longer than 50 lines). Is this acceptable?

- I'm not sure I made the best decision about how to instantiate and use the header...

- 'Do you test for behaviour, rather than state?' (additional)... not really, I have to change the tests
every time I change the code, which isn't ideal, but the spec shows the data being returned in a very
distinctive manner, i.e with || between figures and words, which I've tried to replicate... not sure how to test in a way that checks the format without testing for state

// do your test descriptions read clearly (additional)

- Do you make appropriate use of the testing framework's methods to keep your test code clean? (additional)

- Do you have a clear separation between your program logic and output? (additional) - not sure. Most of the logic is in statement, the exception being the overdraft prevention method...


- If you loop through an array passing a block of code with puts in it: you're calling `puts` for each loop. Aim to construct the string representation of the statement before calling `puts`. (additional) ... I *think* I do this but I'm not sure, so would like feedback in this area.

- Do your unit tests mock the dependencies of the object they are testing? (normal) - I don't think so... again, would appreciate any pointers in this area...

// Does the linter (e.g. Rubocop, ESLint) pass with no warnings? (normal) - no, but the messages don't make much sense to me. 

// Are your variable, method, & class names clear and descriptive? (normal)
