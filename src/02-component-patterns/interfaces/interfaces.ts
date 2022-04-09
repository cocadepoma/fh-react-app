import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductButtonProps } from '../components/ProductButtons';

export interface Product {
  id: string;
  title: string;
  image?: string;
};

export interface ProductContextProps {
  counter: number;
  increaseBy: (number: number) => void;
  product: Product;
  maxCount?: number;
};

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonProps) => JSX.Element;
};

export interface onChangeArgs {
  product: Product;
  count: number;
};

export interface InitialValues {
  count?: number;
  maxCount?: number;
};

export interface ProductCardHandlers {
  counter: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
};