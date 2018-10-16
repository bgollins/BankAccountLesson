// Busines logic
function BankAccount(name, initialDeposit){
  this.name = [];
  this.initialDeposit = initialDeposit;
}

BankAccount.prototype.withdrawal() = function(withdrawalAmount){
  return initialDeposit - withdrawalAmount;
}

// UI logic
$(document).ready(function(event){
  event.preventDefault();
  console.log("I'm Ready");
  
});
