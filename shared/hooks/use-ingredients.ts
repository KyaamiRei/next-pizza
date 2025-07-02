import { useEffect, useState } from 'react';

import { Api } from '@/shared/services/api-client';
import { Ingredient } from '@prisma/client';

export const useIngredients = () => {
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    async function getIngredients() {
      try {
        setLoading(true);
        const ingredient = await Api.ingredients.getAll();
        setIngredients(ingredient);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getIngredients();
  }, []);

  return { ingredients, loading };
};
