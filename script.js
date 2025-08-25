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
    } else{
        alert("Failed To Add Money");
    }
});

// document.getElementById("btn-add-money").addEventListener('click' , function(event){
//     event.preventDefault();

//     const addMoney = getInputValueById("add-money");
//     const pinNumber = getInputValueById("pin-number");

//     // শুধু practice এর জন্য
//     if (pinNumber === 1234) {
//         const amount = getTextValueById("main-amount"); // ✅ এখন ঠিক আছে
//         const newBalance = amount + addMoney;
//         document.getElementById("main-amount").innerText = newBalance;
//     } else {
//         alert("Failed To Add Money");
//     }
// });