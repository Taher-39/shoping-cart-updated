/* increments phn handler */
document.getElementById('increaseBtn').addEventListener('click', function () {

    changeAmount('pnhText');

    changeText('phnAmount', 1200);
    changeText('subtotalAmount', 1200);
    changeText('totalAmount', 1200);
});

function changeAmount(id) {
    const pnhText = document.getElementById(id).value;
    const numberOfPhn = parseFloat(pnhText);
    const currentNoPhn = numberOfPhn + 1;
    document.getElementById(id).value = currentNoPhn;

}

function changeText(id, number){
    const Amount = document.getElementById(id).innerText;
    const newAmount = parseFloat(Amount);
    const totalAmount = newAmount + number;
    document.getElementById(id).innerText = totalAmount;
}

function changeAmountLeft(id) {
    const pnhText = document.getElementById(id).value;
    const numberOfPhn = parseFloat(pnhText);
    if (numberOfPhn > 0) {
        const currentNoPhn = numberOfPhn - 1;
        document.getElementById(id).value = currentNoPhn;
    }

}

// function LeftBtn(id, number) {
//     const phnAmount = document.getElementById(id).innerText;
//     const newPhnAmount = parseFloat(phnAmount);
//     if (newPhnAmount > 0) {
//         const totalPhnAmount = newPhnAmount - number;
//         document.getElementById(id).innerText = totalPhnAmount;
//     }
// }

/* decrements phn handler */
document.getElementById('decrementBtn').addEventListener('click', function () {

    changeAmountLeft('pnhText');
    
    const phnAmount = document.getElementById('phnAmount').innerText;
    const newPhnAmount = parseFloat(phnAmount);
    if (newPhnAmount > 0) {
        const totalPhnAmount = newPhnAmount - 1200;
        document.getElementById('phnAmount').innerText = totalPhnAmount;
    }

    const subAmount = document.getElementById('subtotalAmount').innerText;
    const totalSubtotal = parseFloat(subAmount);
    if (newPhnAmount != 0) {
        const totalSubAmount = totalSubtotal - 1200;
        document.getElementById('subtotalAmount').innerText = totalSubAmount;
    }

    const totalAmount = document.getElementById('totalAmount').innerText;
    const total = parseFloat(totalAmount);
    if (newPhnAmount != 0) {
        const totalDolar = total - 1200;
        document.getElementById('totalAmount').innerText = totalDolar;
    }
    
});


/* case handler area */

document.getElementById('caseIncreaseBtn').addEventListener('click', function () {

    changeAmount('caseText');

    changeText('caseAmount', 60);
    changeText('subtotalAmount', 60);
    changeText('totalAmount', 60);
});

/* decrements case handler */
document.getElementById('caseDecrementBtn').addEventListener('click', function () {

    changeAmountLeft('caseText');

    const caseAmount = document.getElementById('caseAmount').innerText;
    const newCaseAmount = parseFloat(caseAmount);
    if (newCaseAmount > 0) {
        const totalCaseAmount = newCaseAmount - 60;
        document.getElementById('caseAmount').innerText = totalCaseAmount;
    }

    const subAmount = document.getElementById('subtotalAmount').innerText;
    const totalSubtotal = parseFloat(subAmount);
    if (newCaseAmount != 0) {
        const totalSubAmount = totalSubtotal - 60;
        document.getElementById('subtotalAmount').innerText = totalSubAmount;
    }

    const totalAmount = document.getElementById('totalAmount').innerText;
    const total = parseFloat(totalAmount);
    if (newCaseAmount != 0) {
        const totalDolar = total - 60;
        document.getElementById('totalAmount').innerText = totalDolar;
    }

});