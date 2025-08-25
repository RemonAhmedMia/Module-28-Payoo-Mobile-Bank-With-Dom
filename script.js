document.getElementById("btn-add-money").addEventListener('click' , function(event){
    event.preventDefault();

    // const addMoney = getInputValueById();
    // console.log(addMoney);
    const addMoney = getInputValueById("add-money");
    const pinNumber = getInputValueById("pin-number")
    
    // Wrong Way To Varify. do not try it for your serious WebTransportBidirectionalStream, just for begaier practice
    if (pinNumber === 1234) {
        const amount = getTextValueById("main-amount");
        const newBalance = amount + addMoney;
        document.getElementById("main-amount").innerText = newBalance;

        // Add To Transaction
        const p = document.createElement("p");
        p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`

        // Should Be A Common Function
        document.getElementById("transaction-container").appendChild(p);


    } else{
        alert("Failed To Add Money");
    }
});

