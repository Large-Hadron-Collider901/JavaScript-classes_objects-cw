// ### Challenge 2:
// Create a Bank class with the the name and balance properties.
// Afterwards, create an instance of the class and follow the instructions below:
// - Creates an account named "Matt's account" with the balance of 1000
// - Creates an account named "My account" with the balance of 0
// - Withdraws 100.0 from Matt's account
// - Deposits 100.0 to My account
// - Prints both accounts

class Bank {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  withdraw() {
    let amount = prompt(
      "Please enter the amount you would like to withdraw in the box below"
    );
    this.balance = this.balance - amount;
    return this.balance;
  }
  deposit() {
    let amount = prompt(
      "Please enter the amount you would like to deposit in the box below"
    );
    this.balance = this.balance + amount;
    return this.balance;
  }
  print() {
    console.log(`Bank Account Name: ${this.name} Balance: ${this.balance} `);
  }
}

let account1 = new Bank("Matt's Account", "1000");
let account2 = new Bank("My Account", "0");

account1.print();
account2.print();
account1.withdraw();
account2.deposit();
account1.print();
account2.print();
