import { Ingredient, ProductItem } from '@prisma/client';

import { PizzaSize, PizzaType } from '../constants';

/**
 *
 * @param type
 * @param size
 * @param items
 * @param ingredients
 * @param selectedIngredients
 * @returns
 */
export const calcPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice = items.find((item) => item.pizzaType === type && item.size === size)?.price || 0;
  const totalIngPrice = ingredients
    .filter((ingr) => selectedIngredients.has(ingr.id))
    .reduce((acc, ingr) => acc + ingr.price, 0);

  return pizzaPrice + totalIngPrice;
};
