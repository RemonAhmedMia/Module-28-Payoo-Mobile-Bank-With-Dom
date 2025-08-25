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
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
    // ==========
    document.getElementById(id).classList.remove("hidden");

    //orthat ami gono hare sob gula k hide kore dilam tarpor jeta dhekte chai setar id to deoa ache sekhane sei button e click korle seta remove kore dibe hide option ta ar shodu setai dhekabe,baki sob hide thakbe.
}