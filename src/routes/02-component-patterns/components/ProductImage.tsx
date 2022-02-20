import { useContext } from "react";
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface Props {
  image?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const ProductImage = ({ image, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={image || product.image || noImage}
      alt="Coffee Mug"
      style={style}
    />
  )
};