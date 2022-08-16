// step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2
    const withdrawFiled = document.getElementById('withdraw-field');
    const newWithDrawString = withdrawFiled.value;
    const newWithdrawtAmount = parseFloat(newWithDrawString);
    console.log(newWithdrawtAmount)

    // step-7
    withdrawFiled.value = '';

    if (isNaN(newWithdrawtAmount)) {
        alert('Please provide a vaild number');
        return
    }

    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawTotalString);

    // step-5 get blnc current  total
    const blanceTotalElement = document.getElementById('blnc-total');
    const previusBlanceTotaString = blanceTotalElement.innerText;
    const previosBlanceTotal = parseFloat(previusBlanceTotaString);

    if (newWithdrawtAmount > previosBlanceTotal) {
        alert('Blance not found');
        return;
    }
    else {
        // step-4
        const currentWithdrawTotal = previousWithdrawAmount
            + newWithdrawtAmount;
        withdrawTotalElement.innerText = currentWithdrawTotal;
    }

    // step-6 calculate current total blance
    const currentBlanceTotal = previosBlanceTotal - newWithdrawtAmount;
    blanceTotalElement.innerText = currentBlanceTotal;
})
