import { Suspense } from 'react';

import { findPizzas } from '@/shared/lib';
import { GetSearchParams } from '@/shared/lib/find-pizzas';

import {
    Container, Filters, ProductsGroupList, Stories, Title, TopBar
} from '../../shared/components/shared';

export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {
  const categories = await findPizzas(searchParams);

  return (
    <>
      <Container className='mt-8'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>

      <TopBar categories={categories.filter((cat) => cat.products.length > 0)} />

      <Stories />

      <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
          {/* Фильтрация */}
          <div className='w-[250px]'>
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          {/* Список товаров */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              {categories.map(
                (caterogy) =>
                  caterogy.products.length > 0 && (
                    <ProductsGroupList
                      key={caterogy.id}
                      title={caterogy.name}
                      categoryId={caterogy.id}
                      items={caterogy.products}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
