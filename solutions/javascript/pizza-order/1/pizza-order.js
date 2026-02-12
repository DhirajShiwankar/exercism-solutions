/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */

const pizzaMenu = {
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10
  }

  const extra = {
    ExtraSauce : 1,
    ExtraToppings : 2
  }

export function pizzaPrice(pizza, ...extras){
  function extraPrice (arr) {
    if (arr.length === 0) return 0;    
    return extra[arr[0]] + extraPrice(arr.slice(1));
  }
  return pizzaMenu[pizza] + extraPrice(extras)
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let total = 0;

  for(let order of pizzaOrders) {
    total += pizzaMenu[order.pizza];

    for( let extr of order.extras){
      total += extra[extr]
    }
  }
  return total;
}
