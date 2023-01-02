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
let decrement    = 1;

// instruction loop
while(numberInString != 0){

    userSentenceCp = userSentence.replace(/[0-9][0-9]/,numberInString);
    displayData(userSentenceCp);
    const instance  = formatElement(numberInString);

    if(instance  >= defaultNumber) break;
    
    displayData('instance',instance);
    //console.log("decrementor",decrementElement());
    numberInString = numberInString -1;
}

/**
 * @description string formatter function
 * @param  elementSize  : Number
 * @returns String
 */

function formatElement(elementSize){
    const instance = getInstanceOfElement(elementSize);
    if(instance > 1)  {
        displayData(sentence.replace("{number}",instance).replace("it","them"));
        return instance
    } 
    displayData(sentence.replace("{number}",instance))
    return instance;
}

/**
 * @description function de retour d'instance
 * @param  elementSize  : Number
 * @returns 
 */

function getInstanceOfElement(elementSize) {
    return  (defaultNumber - elementSize == 0) ? 1 : defaultNumber - elementSize  ;
}


/**
 * 
 * @returns 
 */

function decrementElement(){

   if(decrement <= defaultNumber) {
    if(decrement == 1)  return  decrement  = decrement + 1;
    return decrement = decrement + 2;
   }
  
   numberInString = 0;
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
        case errorType.LOG :
            if(value)  return console.error(element, value);
            return console.error(element);
    }

}
