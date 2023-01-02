/***************** DAILY CHALLENGE EXERCICE *******************/

/**
 * @author Wilfried Koua
 * @description this code is to loop from a lyrics with a differents format
 * @param  userSentence : String
 * @param  userSentenceCp  : String
 * @param  defaultNumber : Number
 * @param  numberInString : Number
 * @param  sentence  : Number
 */

//declaration des variables
let userSentence   = prompt("Put your lyrics");
let userSentenceCp = userSentence;
let defaultNumber  = Number.parseInt(userSentence.match(/\d+/)[0]);
let numberInString = defaultNumber
let sentence       = "Take {number} down, pass it around";

// instruction loop
while(numberInString != 0){
    userSentenceCp = userSentence.replace(/[0-9][0-9]/,numberInString);
    console.log(userSentenceCp);
    console.log(formatElement(numberInString));
    numberInString = numberInString - 1;
}

/**
 * @description string formatter function
 * @param  elementSize  : Number
 * @returns String
 */
function formatElement(elementSize){
    const instance = getInstanceOfElement(elementSize);
    if(instance > 1) return  sentence.replace("{number}",instance).replace("it","them");
    return sentence.replace("{number}",instance);
}

/**
 * @description function de retour d'instance
 * @param  elementSize  : Number
 * @returns 
 */

function getInstanceOfElement(elementSize) {
    return  defaultNumber - elementSize == 0 ? 1 : elementSize  ;
}



