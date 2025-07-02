import { useRouter } from 'next/navigation';
import qs from 'qs';
import React from 'react';
import { useDeepCompareEffect } from 'react-use';

import { Filters } from './use-filters';

export const useQueryFilters = (filters: Filters) => {
  const isMounted = React.useRef(false);
  const router = useRouter();

  useDeepCompareEffect(() => {
    if (isMounted.current) {
      const params = {
        ...filters.prices,
        pizzaTypes: Array.from(filters.pizzaTypes),
        sizes: Array.from(filters.sizes),
        ingredients: Array.from(filters.selectedIngredients),
      };

      const query = qs.stringify(params, {
        arrayFormat: 'comma',
      });

      router.push(`?${query}`, {
        scroll: false,
      });

      console.log(filters, 200);
    }

    isMounted.current = true;
  }, [filters]);
};
