var numberValue;
let outPutValue;
function getNumberValue() {
    var numberInput = document.getElementById('InputValue');// Select the input element
    
    var value = numberInput.value;// Get the value of the input (as a string)
    
    // Convert the value to a number
    numberValue = parseFloat(value);
    convertUnits();
    // Display the number value in the textOutput div
    document.getElementById('textOutput').innerHTML = outPutValue + getSelectedOutPutOption();
}

function getSelectedOption() {
    var dropdown = document.getElementById('entry-dropdown');// Select the dropdown element
    
    var selectedValue = dropdown.value;// Get the value of the selected option
    
    return selectedValue;    // Return the selected value in the console
}
function getSelectedOutPutOption() {
    var dropdown = document.getElementById('outPut-dropdown');// Select the dropdown element
    
    var selectedValue = dropdown.value;// Get the value of the selected option
    
    return selectedValue;// Return the selected value in the console
}

function convertUnits (){
    let selectedOption = getSelectedOption();
    let selectedOptionForOutput = getSelectedOutPutOption();
    switch(selectedOption) {
        case 'km':
            switch (selectedOptionForOutput) {
                case 'hm':
                    outPutValue = numberValue * 10;
                    break;
                case 'dam':
                    outPutValue = numberValue * (10)**2;
                    break;
                case 'm':
                    outPutValue = numberValue * (10)**3;
                    break;
                case 'dm':
                    outPutValue = numberValue * (10)**4;
                    break;
                case 'cm':
                    outPutValue = numberValue * (10)**5;
                    break;
                case 'mm':
                    outPutValue = numberValue * (10)**6;
                    break;
                default:
                    outPutValue = numberValue;
            }
        break;
        case 'hm':
            switch (selectedOptionForOutput) {
                case 'km':
                    outPutValue = numberValue / 10;
                    break;
                case 'dam':
                    outPutValue = numberValue * (10);
                    break;
                case 'm':
                    outPutValue = numberValue * (10)**2;
                    break;
                case 'dm':
                    outPutValue = numberValue * (10)**3;
                    break;
                case 'cm':
                    outPutValue = numberValue * (10)**4;
                    break;
                case 'mm':
                    outPutValue = numberValue * (10)**5;
                    break;
                default:
                    outPutValue = numberValue;
            }
        break;
        case 'dam':
            switch (selectedOptionForOutput) {
                case 'km':
                    outPutValue = numberValue / ((10)**2);
                    break;
                case 'hm':
                    outPutValue = numberValue / (10);
                    break;
                case 'm':
                    outPutValue = numberValue * (10);
                    break;
                case 'dm':
                    outPutValue = numberValue * (10)**2;
                    break;
                case 'cm':
                    outPutValue = numberValue * (10)**3;
                    break;
                case 'mm':
                    outPutValue = numberValue * (10)**4;
                    break;
                default:
                    outPutValue = numberValue;
            }
        break;
        case 'm':
            switch (selectedOptionForOutput) {
                case 'km':
                    outPutValue = numberValue / ((10)**3);
                    break;
                case 'hm':
                    outPutValue = numberValue / ((10)**2);
                    break;
                case 'dam':
                    outPutValue = numberValue / (10);
                    break;
                case 'dm':
                    outPutValue = numberValue * (10);
                    break;
                case 'cm':
                    outPutValue = numberValue * (10)**2;
                    break;
                case 'mm':
                    outPutValue = numberValue * (10)**3;
                    break;
                default:
                    outPutValue = numberValue;
            }
        break;
        case 'dm':
            switch (selectedOptionForOutput) {
                case 'km':
                    outPutValue = numberValue / ((10)**4);
                    break;
                case 'hm':
                    outPutValue = numberValue / ((10)**3);
                    break;
                case 'dam':
                    outPutValue = numberValue / ((10)**2);
                    break;
                case 'm':
                    outPutValue = numberValue / (10);
                    break;
                case 'cm':
                    outPutValue = numberValue * (10);
                    break;
                case 'mm':
                    outPutValue = numberValue * (10)**2;
                    break;
                default:
                    outPutValue = numberValue;
            }
        break;
        case 'cm':
            switch (selectedOptionForOutput) {
                case 'km':
                    outPutValue = numberValue / ((10)**5);
                    break;
                case 'hm':
                    outPutValue = numberValue / ((10)**4);
                    break;
                case 'dam':
                    outPutValue = numberValue / ((10)**3);
                    break;
                case 'm':
                    outPutValue = numberValue / ((10)**2);
                    break;
                case 'dm':
                    outPutValue = numberValue / (10);
                    break;
                case 'mm':
                    outPutValue = numberValue * (10);
                    break;
                default:
                    outPutValue = numberValue;
            }
        break;
        case 'mm':
            switch (selectedOptionForOutput) {
                case 'km':
                    outPutValue = numberValue / ((10)**6);
                    break;
                case 'hm':
                    outPutValue = numberValue / ((10)**5);
                    break;
                case 'dam':
                    outPutValue = numberValue / ((10)**4);
                    break;
                case 'm':
                    outPutValue = numberValue / ((10)**3);
                    break;
                case 'dm':
                    outPutValue = numberValue / ((10)**2);
                    break;
                case 'cm':
                    outPutValue = numberValue / (10);
                    break;
                default:
                    outPutValue = numberValue;
            }
        break;
        }
}