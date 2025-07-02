import { prisma } from '@/prisma/prisma-client';
import { ChooseModalProduct } from '@/shared/components/shared';
import { notFound } from 'next/navigation';

export default async function ProductModalPage({ params: { id } }: { params: { id: string } }) {
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
