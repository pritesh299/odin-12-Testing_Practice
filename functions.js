

function capitalize(string) {
    if(string===""){return string}
else    if (string[0] === string[0].toUpperCase()) {
        return string;
    } else {
        let newString = string[0].toUpperCase() + string.slice(1);
        return newString;
    }
}

function reverseString(string) {
    let newString = '';

    for (let i = 0; i < string.length; i++) {
        newString += string[string.length - 1 - i];
    }

    return newString;
}


function calculator(x,y,operator){
      
       if(operator==="add"){return x+y}  
       if(operator==="subtract"){return x-y}  
       if(operator==="multiply"){return x*y}  
       if(operator==="divide"){return x/y}  
     
 }


 function caesarCipher(string,shift){
    let alphabets="abcdefghijklmnopqrstuvwxyz"
    let newString=""
   
    for(let i=0;i<string.length;i++){
        let currentChar=string[i];
        let isUpperCase=(currentChar === currentChar.toUpperCase())
        if (isUpperCase) {
            currentChar = currentChar.toLowerCase();
        if (currentChar === alphabets[alphabets.indexOf(currentChar)]) {
            if (alphabets.indexOf(currentChar) + shift < 26) {
                newString += alphabets[alphabets.indexOf(currentChar) + shift].toUpperCase();
            } else {
                newString += alphabets[alphabets.indexOf(currentChar) + shift - 26].toUpperCase();
            }
        } else {
            newString += currentChar.toUpperCase();
        }
    }else{ if( currentChar===alphabets[alphabets.indexOf(currentChar)]){ 
            
    if(alphabets.indexOf(currentChar)+shift<26){ newString+=alphabets[alphabets.indexOf(currentChar)+shift] }
    else{ newString+=alphabets[alphabets.indexOf(currentChar)+shift-26]}


}
else{ newString+=currentChar}  }
   
}return newString
}
caesarCipher('a',1)
    
   
 module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher
};