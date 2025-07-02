import { User } from '@prisma/client';

import { axiosIntance } from './instance';

export const getMe = async () => {
  const { data } = await axiosIntance.get<User>('/auth/me');

  return data;
};
