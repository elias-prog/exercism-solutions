/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Determine whether the lasagna is done
 *
 * @param {number} timer
 * @returns {string} Determine if lasagna is done or not
 */

export function cookingStatus(timer){
    if(timer == 0){
        return "Lasagna is done."
    }else if(Number(timer)){
        return "Not done, please wait.";
    }
    return "You forgot to set the timer.";
}

/**
 * Estimate the preparation time of lasagna
 *
 * @param {string[]} layers
 * @param {number} preparationTime
 * @returns {number} Preparation time per layer in minutes
 */

export function preparationTime(layers, preparationTime){
    if(preparationTime == undefined){
        return layers.length * 2;
    }
    return layers.length * preparationTime;
}

/**
 * Compute the amounts of noodles and sauce needed
 *
 * @param {string[]} layers
 * @returns {object[]} the number of minutes remaining
 */

export function quantities(layers){
    let numberNoodles = 0;
    let numberSauces = 0;
    for(var i = 0; i < layers.length; i++){
        if(layers[i] == "noodles"){
            numberNoodles++;
        }else if(layers[i] == "sauce"){
            numberSauces++;
        }
    }

    return {noodles: numberNoodles*50,
            sauce: numberSauces*0.2
    };
}

/**
 * Add the secret ingredient
 *
 * @param {string[]} friendsList
 * @param {string[]} myList
 * @returns {void} modify ingredients with secret
 */

export function addSecretIngredient(friendsList, myList){
    myList.push(friendsList[friendsList.length - 1]);
}

/**
 * Scale the recipe
 *
 * @param {string[]} recipe
 * @param {number} portions
 * @returns {object[]} new recipe scaled to number of portions
 */

export function scaleRecipe(recipe, portions){
    var newRecipeTotal = {};
    for(const ingredient in recipe){
        newRecipeTotal[ingredient] = recipe[ingredient] * (portions/2);
    }
    return newRecipeTotal;
}