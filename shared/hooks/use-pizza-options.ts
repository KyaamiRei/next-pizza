import { useEffect, useState } from 'react';
import { useSet } from 'react-use';

import { Variant } from '../components/shared/group-variant';
import { PizzaSize, PizzaType } from '@/shared/constants';
import { ProductItem } from '@prisma/client';
import { getAvailablePizzaSizes } from '../lib';

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  currentItemId?: number;
  selectedIngredients: Set<number>;
  availebelPizzaSizes: Variant[];
  setSelectedIngredients: (id: number) => void;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
}
export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);

  const [selectedIngredients, { toggle: setSelectedIngredients }] = useSet(new Set<number>([]));

  const availebelPizzaSizes = getAvailablePizzaSizes(type, items);

  const currentItemId = items.find((item) => item.pizzaType === type && item.size === size)?.id;

  useEffect(() => {
    const isAvailableSize = availebelPizzaSizes?.find((item) => Number(item.value) === size && !item.disabled);
    const availableSize = availebelPizzaSizes?.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [availebelPizzaSizes, size, type]);

  return {
    currentItemId,
    size,
    type,
    setSize,
    setType,
    selectedIngredients,
    setSelectedIngredients,
    availebelPizzaSizes,
  };
};
