// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) {
    return "You forgot to set the timer."
  } 
  if (remainingTime === 0) {
    return "Lasagna is done.";
  }
  return 'Not done, please wait.';
}

export function preparationTime(layers, avgtime = 2) {
  return layers.length * avgtime;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;

  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === "noodles") noodles += 50;
    if (layers[i] === "sauce") sauce += 0.2;
  }
  return {noodles, sauce};
}

export function addSecretIngredient(fList, myList) {
  let secreatIngridient = fList[fList.length - 1];
  myList.push(secreatIngridient);
}

export function scaleRecipe(recipe, portion) {
  let newRecipe = {}
  for (let ingridient in recipe) {
    newRecipe[ingridient] = recipe[ingridient] * portion / 2;
  }
  return newRecipe;
}
