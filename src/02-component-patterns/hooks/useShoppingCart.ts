import { useState } from "react";
import { ProductInCart } from "../data/products";
import { Product } from "../interfaces/interfaces";

interface useShoppingFunc {
  shoppingCart: { [key: string]: ProductInCart };
  onProductCartChange: ({ count, product }: { count: number, product: Product }) => void;
}

export const useShoppingCart = (): useShoppingFunc => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCartChange = ({ count, product }: { count: number, product: Product }) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...products } = { ...oldShoppingCart };
        return products;
      } else {
        return {
          ...oldShoppingCart,
          [product.id]: { ...product, count }
        }
      }
    })
  };

  return {
    shoppingCart,
    onProductCartChange
  }
};