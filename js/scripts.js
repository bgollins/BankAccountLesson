// Busines logic
function BankAccount(name, initialDeposit){
  this.name = name;
  this.currentBalance = initialDeposit;
}


BankAccount.prototype.withdrawal = function(withdrawalAmount){
  bankAccounts[0].currentBalance -= withdrawalAmount;
  return bankAccounts[0].currentBalance;
}

BankAccount.prototype.deposit = function(depositAmount){
    bankAccounts[0].currentBalance += depositAmount;
  return bankAccounts[0].currentBalance;
}

var bankAccounts = [];
var bankAccountsIndex = 0;

// UI logic
$(document).ready(function() {
  $("form.contact").submit(function(event) {
      event.preventDefault();
    var submittedName = $("input#NewName").val();
    var submittedInitialAmount = parseInt($("input#InitialDeposit").val());
    var newBankAccount = new BankAccount(submittedName, submittedInitialAmount);

    console.log("This is the name: " + newBankAccount.name);
    console.log("This is the initial deposit: " + newBankAccount.currentBalance);
    bankAccounts.push(newBankAccount);
    console.log(newBankAccount);
    $("#CurrentBalance").text("$" + bankAccounts[0].currentBalance);
    $("#CurrentBalanceArea").show();
  });

  $("form.DepositOrWithdraw").submit(function(event) {
    event.preventDefault();
    var inputDepositMoney = parseInt($("input#DepositMoney").val());
    var inputWithdrawMoney =  parseInt($("input#WithdrawMoney").val());
    bankAccounts[0].deposit(inputDepositMoney);
    bankAccounts[0].withdrawal(inputWithdrawMoney);
    console.log("This is the current balance after submission: " + bankAccounts[0].currentBalance);
    $("#CurrentBalance").text("$" + bankAccounts[0].currentBalance);
    $("#CurrentBalanceArea").show();
  });
});
