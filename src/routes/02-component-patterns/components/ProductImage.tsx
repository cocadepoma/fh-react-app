import { useContext } from "react";
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductImage = ({ image = '' }) => {
  const { product } = useContext(ProductContext);

  return (
    <img
      className={styles.productImg}
      src={image || product.image || noImage}
      alt="Coffee Mug"
    />
  )
};