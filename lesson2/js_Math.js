function Account(accountNumber, balance,  owner){
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner  = owner;


    this.deposit = function(amount){
        this.balance += amount
        console.log(`Your new account balance is ${this.balance}`);
    }

    this.deposit = function(amount){
        this.balance += amount
        console.log(`Your new account balance is ${this.balance}`);
    }

    this.withdraw = function(amount){
        this.balance -= amount
        console.log(`Your new account balance is ${this.balance}`);
    }

    this.yearlyinterest = function(rate){
        let interest = this.balance * (Math.pow((1 + rate / 100), 1));
        let CompInt = interest - this.balance;
        console.log(`At your current balance of ${this.balance}, your yearly compound interest would be ${CompInt}`);
    }
}

let Smitty = new Account(78945, 1201, "Smitty Worldwide")


Smitty.deposit(202)
Smitty.withdraw(100)
Smitty.yearlyinterest(5)