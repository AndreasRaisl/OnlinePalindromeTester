const Phrase = require("araisl-palindrome");
const ramda = require('ramda');



function palindromeTester(event)
{
    event.preventDefault();
            
    let phrase = new Phrase(event.target.phrase.value);    
    let displayResult = document.querySelector('#displayResult');  
    if (phrase.palindrome())
    {
        displayResult.innerHTML =`<strong>"${phrase.content}" </strong> is a palindrome`;
        displayResult.style = "color: red;";
    }
    else
    {
        displayResult.innerHTML = `<strong>"${phrase.content}" </strong> is not a palindrome`; 
        displayResult.style = "color: red;"; 
    }  
}

let form = document.querySelector("#palindromeTester");    
form.addEventListener("submit", function(event) {
    palindromeTester(event);
});
