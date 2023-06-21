function bankAccount(accountNumber,balance){
  this.accountNumber = accountNumber;
  this.balance = balance
}

bankAccount.prototype.deposit = function(amount){
    this.balance += amount;
}

bankAccount.prototype.wintdraw = function(amount){
  this.balance -= amount;
}

bankAccount.prototype.getBalance = function(){
  return console.log(this.balance);
}

function savingAccount (accountNumber, balance, interestRate){
  bankAccount.call(this, accountNumber, balance);
  this.interestRate = interestRate;
}
savingAccount.prototype.wintdraw = function(amount){
  if(amount> this.balance){
    console.log('you exceeded the balance')
  }else{
    return console.log(this.balance - amount)
  }

}

function checkingAccount ( accountNumber, balance){
  bankAccount.call(this, accountNumber,balance)
  this.transactionlimit = 1500;
}

checkingAccount.prototype.wintdraw= function(amount){
  if(amount > this.transactionlimit){
    console.log('you exceeded the transaction limit')
  }else{
    let currentBalane = this.balance - amount;
    return console.log(currentBalane);
  }
}

let account1 = new bankAccount('TT788GH', 10255);
console.log(account1);

account1.deposit(7000);
account1.getBalance();

account1.wintdraw(1500);
account1.getBalance();

let savingAccount1 = new savingAccount('DTY555',5550, 120);

savingAccount1.wintdraw(350);

let transaction1 = new checkingAccount('KLGC67', 77500);
transaction1.wintdraw(700);