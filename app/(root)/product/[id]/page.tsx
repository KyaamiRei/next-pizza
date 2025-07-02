/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation';

import { prisma } from '@/prisma/prisma-client';
import { Container, ProductForm } from '@/shared/components/shared';

export default async function ProductPage({ params: { id } }: any) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredient: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className='flex flex-col my-10'>
      <ProductForm product={product} />
    </Container>
  );
}
