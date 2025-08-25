
document.getElementById("btn-cash-out").addEventListener('click', function(event) {
    event.preventDefault();

    const cashOut = getInputValueById("input-cash-out");
    const cashOutPin = getInputValueById("cash-out-pin-number");

    if (cashOutPin === 4321) {
        const mainAmount = getTextValueById("main-amount");
        const mainCashOut = mainAmount - cashOut;

        document.getElementById("main-amount").innerText = mainCashOut;
    } else {
        alert("Failed To Cash Out");
    }
});