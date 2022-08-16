// step=1
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2
    const depositFiled = document.getElementById('deposit-field');
    const newdepositAmountString = depositFiled.value;
    const newdepositAmount = parseFloat(newdepositAmountString);

    // step-3 get the current deposit total
    // for non-input (elemnt other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousdepositTotalString = depositTotalElement.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);
    // step-4 add number to set the total deposit
    const currentDepositTotal = previousdepositTotal + newdepositAmount;

    depositTotalElement.innerText = currentDepositTotal;
    // step-5 get blnc current  total
    const blanceTotalElement = document.getElementById('blnc-total');
    const previusBlanceTotaString = blanceTotalElement.innerText;
    const previosBlanceTotal = parseFloat(previusBlanceTotaString);

    // step-6 calculate current total blance
    const currentBlanceTotal = previosBlanceTotal + newdepositAmount;

    blanceTotalElement.innerText = currentBlanceTotal;

    // step-7 clear the text
    depositFiled.value = '';
})