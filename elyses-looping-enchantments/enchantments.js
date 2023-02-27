// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let cardsFound = 0;
  stack.forEach ((iterator) => {
    cardsFound += iterator == card ? 1 : 0;
  });
  return cardsFound;
}



/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let cardsFoundEvenOrOdd = 0;
  for (const iterator of stack) {
    if(type == true && iterator % 2 == 0) cardsFoundEvenOrOdd++;
    if(type == false && iterator % 2 !== 0) cardsFoundEvenOrOdd++;
  }
  return cardsFoundEvenOrOdd;
}
