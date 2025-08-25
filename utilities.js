// function getInputValueById(){
//     const addMoney = document.getElementById("add-money").vlaue;
//     return addMoney;
// };

function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}