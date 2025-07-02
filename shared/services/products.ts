import { Product } from '@prisma/client';
import { axiosIntance } from './instance';
import { ApiRoutes } from './constans';

export const search = async (query: string): Promise<Product[]> => {
  return (await axiosIntance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, { params: { query } })).data;
};
