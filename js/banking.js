function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);

    inputField.value = '';
    return inputValue;
}
// update deposit and withdraw amount
function updateField(fieldId,currentAmount){
    const amountField = document.getElementById(fieldId);
    const amountText = amountField.innerText;
    const previousAmount = parseFloat(amountText);
        
    const totalAmount = currentAmount + previousAmount;
        amountField.innerText = totalAmount;
}
// get total balance 
function getCurrentBalance(){
    const balanceAmountField = document.getElementById('current-balance');
    const balanceAmountText = balanceAmountField.innerText;
    const previousBalance = parseFloat(balanceAmountText);
    return previousBalance;
}
// update balance
function updateBalance(totalAmount){
    const balanceAmountField = document.getElementById('current-balance');
    const previousBalance = getCurrentBalance();
    const totalBalance = previousBalance + totalAmount;
    balanceAmountField.innerText = totalBalance;
}
// global variable for event listener
const depositErr = document.getElementById('deposit-error');
const depositField = document.getElementById('deposit-amount');
const withdrawErr = document.getElementById('withdraw-error');
const withdrawField = document.getElementById('withdraw-amount');

// handle event listener of deposit button
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositAmount = getInputValue('deposit-amount');
    if(depositAmount > 0){
        const totalAmount = updateField('current-deposit',depositAmount);
        updateBalance(depositAmount);
        depositErr.innerText = '';
        depositField.style.border = 'none';
    }
    else{
        depositErr.innerText = 'invalid input !';
        depositField.style.border = '2px solid red';
    }
});

document.getElementById('withdraw-button').addEventListener('click',function(){
    // debugger;
    const withdrawAmount = getInputValue('withdraw-amount');
    const totalCurrentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount<=totalCurrentBalance){
        const totalAmount = updateField('current-withdraw',withdrawAmount);
        updateBalance(-withdrawAmount);
        withdrawErr.innerText = '';
        withdrawField.style.border = 'none';
    }
    else if(withdrawAmount  > totalCurrentBalance){
        withdrawErr.innerText = 'Insufficient Balance !';
        withdrawField.style.border = '2px solid red';
    }
    else{
        withdrawErr.innerText = 'Invalid input !';
        withdrawField.style.border = '2px solid red';
    }
});
