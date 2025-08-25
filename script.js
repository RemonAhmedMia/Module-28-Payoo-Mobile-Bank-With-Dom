document.getElementById("btn-add-money").addEventListener('click' , function(event){
    event.preventDefault();

    const addMoney = getInputValueById();
    console.log(addMoney);
    
})