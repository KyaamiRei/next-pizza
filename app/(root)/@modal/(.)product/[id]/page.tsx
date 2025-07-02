/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation';

import { prisma } from '@/prisma/prisma-client';
import { ChooseModalProduct } from '@/shared/components/shared';

export default async function ProductModalPage({ params: { id } }: any) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredient: true,
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseModalProduct product={product} />;
}
