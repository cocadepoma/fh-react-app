import { Product } from "../interfaces/interfaces";

export const product = {
  id: '1',
  title: 'Cofee Mug 1',
  image: './coffee-mug.png'
};

export const product2 = {
  id: '2',
  title: 'Cofee Mug 2',
  image: './coffee-mug2.png'
};

export const products: Product[] = [product, product2];

export interface ProductInCart extends Product {
  count: number;
};