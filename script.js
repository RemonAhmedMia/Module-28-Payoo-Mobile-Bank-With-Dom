document.getElementById("btn-add-money").addEventListener('click' , function(event){
    event.preventDefault();

    // const addMoney = getInputValueById();
    // console.log(addMoney);
    const addMoney = getInputValueById("add-money");
    const pinNumber = getInputValueById("pin-number")
    
    // Wrong Way To Varify. do not try it for your serious WebTransportBidirectionalStream, just for begaier practice
    if (pinNumber === 1234) {
        
    } else{
        alert("Failed To Add Money");
    }
});