/* eslint-disable jsx-a11y/alt-text */
import { cn } from '@/shared/lib/utils';

interface Props {
  src: string;
  className?: string;
}

export const CartItemDetailsImage: React.FC<Props> = ({ src, className }) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={cn('w-[60px] h-[60px]', className)} src={src} />;
};
