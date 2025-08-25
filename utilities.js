// function getInputValueById(){
//     const addMoney = document.getElementById("add-money").vlaue;
//     return addMoney;
// };

// input feild er jonno function:

function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
};

// Text-Feiled er jonno function:

function getTextValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
};

function showFormSectionById(id){
    
}