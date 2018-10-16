// Busines logic
function BankAccount(name, initialDeposit){
  this.name = name;
  this.currentBalance = initialDeposit;
}


BankAccount.prototype.withdrawal = function(withdrawalAmount, index){
  return BankAccount.currentBalance - withdrawalAmount;
}

BankAccount.prototype.withdrawal = function(depositAmount, index){
  return BankAccounts[index].currentBalance + depositAmount;
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
  });

});
