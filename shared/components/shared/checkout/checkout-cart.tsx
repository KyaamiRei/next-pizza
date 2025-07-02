import React from 'react';
import { CheckoutItem, CheckoutItemSkeleton, WhiteBlock } from '..';
import { PizzaType, PizzaSize } from '@/shared/constants';
import { getCartItemDetails } from '@/shared/lib';
import { CartStateItem } from '@/shared/lib/get-cart-details';

interface Props {
  loading?: boolean;
  items: CartStateItem[];
  className?: string;
  onClickCountButton: (id: number, quantity: number, type: 'plus' | 'minus') => void;
  onClickRemoveButtton: (id: number) => void;
}

export const CheckoutCart: React.FC<Props> = ({
  items,
  className,
  loading,
  onClickCountButton,
  onClickRemoveButtton,
}) => {
  return (
    <WhiteBlock title='1. Корзина' className={className}>
      <div className='flex flex-col gap-5'>
        {loading
          ? [...Array(4)].map((_, id) => <CheckoutItemSkeleton key={id} />)
          : items.map((item) => (
              <CheckoutItem
                key={item.id}
                id={item.id}
                imageUrl={item.imageUrl}
                details={getCartItemDetails(item.ingredients, item.pizzaType as PizzaType, item.pizzaSize as PizzaSize)}
                name={item.name}
                disabled={item.disabled}
                price={item.price}
                quantity={item.quantity}
                onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
                onClickRemove={() => onClickRemoveButtton(item.id)}
              />
            ))}
      </div>
    </WhiteBlock>
  );
};
