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
let soundStrings   = ["{number} bottles of beer","{number} bottles of beer on the wall","0 bottle of beer on the wall"];
let decrement      = 0;


// instruction loop

while(numberInString != 0){
    
    if(decrement == 0) {
        displayData(userSentenceCp);
        displayData(soundStrings[0].replace("{number}",numberInString));
    }

    const instance  = formatElement(numberInString);

    if(numberInString < 0)  break;


    //userSentenceCp = "{number} bottles of beer on the wall".replace(/[0-9]*/,numberInString);
    userSentenceCp  = soundStrings[1].replace("{number}",numberInString)
   

   
    displayData(userSentenceCp);
    displayData(userSentenceCp+" ");
    displayData(soundStrings[0].replace("{number}",numberInString));

    instance[1];
   
    if(instance[0] > defaultNumber && typeof instance[0] != "number") {
        displayData(soundStrings[2]);
        break;
    };

    numberInString = numberInString - Number.parseInt(instance[0]);

    if(numberInString < 0) {
        displayData(soundStrings[2]);
    }

    //numberInString = 0;
  
}


/**
 * @description string formatter function
 * @param  elementSize  : Number
 * @returns String
 */

function formatElement(currentIteration){

    const instance = decrementElement();

    if(instance > 1)  
      return [instance, displayData(sentence.replace("{number}",instance).replace("it","them"))]

    return [instance, displayData(sentence.replace("{number}",instance))];
}



/**
 * 
 * @returns 
 */

function decrementElement(currentElement){
   return  (currentElement==defaultNumber) ? decrement = 0 :  decrement = decrement+1;
}


/**
 * 
 * @param  element      : String
 * @param  value        : String | Number | Object
 * @param  typeOfError  : String {log,error}
 * @returns 
 */

function displayData(element , value = null , typeOfError = 'log'){
    
    const errorType = {
        LOG : 'log',
        ERROR: 'error'
    }
    switch(typeOfError){
        case errorType.LOG : 
            if(value)  return console.log(element, value);
            return console.log(element);
        case errorType.ERROR :
            if(value)  return console.error(element, value);
            return console.error(element);
    }

}
