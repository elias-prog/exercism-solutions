// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  var totalBirds = 0;
  if(birdsPerDay.length > 0){
    for(var i = 0; i < birdsPerDay.length; i++){
      totalBirds += birdsPerDay[i];
    }
  }
  return totalBirds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  var totalBirdsInWeek = 0;
  for(var i = (7*week) - 7; i < week*7; i++){
    totalBirdsInWeek += birdsPerDay[i];
  }
  return totalBirdsInWeek;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for(var i = 0; i < birdsPerDay.length; i+=2){
      birdsPerDay[i] += 1;
  }
  return birdsPerDay;
}
