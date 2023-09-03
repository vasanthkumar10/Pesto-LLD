// Banking account

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  checkBalance() {
    return `Current balance: ${this.balance}`;
  }

  deposit(amount) {
    this.balance += amount;
    return `Deposited ${amount}. ${this.checkBalance()}`;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return `Withdrawn ${amount}. ${this.checkBalance()}`;
    } else {
      return `Insufficient balance. ${this.checkBalance()}`;
    }
  }
}

const bankAccount = new BankAccount(1000);

const bankAccountProxy = new Proxy(bankAccount, {
  get(target, property) {
    if (
      property === "deposit" ||
      property === "checkBalance" ||
      property === "balance"
    )
      return target[property];
    return "Access Denied";
  },

  set(target, property, value) {
    console.log(target, property, value);
    if (property === "deposit" && value < 0) {
      console.log("Invalid data");
    } else {
      console.log(target);
      target.deposit(value);
    }
  },
});

console.log(bankAccountProxy.checkBalance());
// console.log(bankAccountProxy.withdraw(500));
// console.log(bankAccountProxy.deposit(100));
bankAccountProxy.deposit = -100;
console.log(bankAccountProxy.checkBalance());
