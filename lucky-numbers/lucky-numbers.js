// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  var number1 = "";
  for(var i = 0;i < array1.length; i++){
    number1+=array1[i];
  }

  var number2 = ""
  for(var i = 0;i < array2.length; i++){
    number2+=array2[i];
  }
  console.log(number1);
  return Number(number1) + Number(number2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  var numberInArray = String(value).split("");
  var numberStartLast = [];
  for(var i = numberInArray.length - 1; i >= 0; i--){
    numberStartLast.push(numberInArray[i]);
  }

  for(var i = 0; i < numberInArray.length; i++){
    if(numberInArray[i] != numberStartLast[i]){
      return false;
    }  
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  var inputToArray = String(input);
  if(Number(inputToArray)){
    return "";
  }else if (inputToArray == "" || input === null || input === undefined) {
    return "Required field";
  }
  return "Must be a number besides 0";
}
