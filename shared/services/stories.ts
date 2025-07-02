import { Story, StoryItem } from '@prisma/client';

import { axiosIntance } from './instance';

export type IStory = Story & {
  items: StoryItem[];
};

export const getAll = async () => {
  const { data } = await axiosIntance.get<IStory[]>('/stories');

  return data;
};
