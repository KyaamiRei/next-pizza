import { Ingredient } from '@prisma/client';
import { axiosIntance } from './instance';
import { ApiRoutes } from './constans';

export const getAll = async (): Promise<Ingredient[]> => {
  return (await axiosIntance.get<Ingredient[]>(ApiRoutes.INRGEDIENTS)).data;
};
