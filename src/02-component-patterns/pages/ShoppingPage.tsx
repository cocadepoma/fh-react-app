import { ProductCard } from "../components/ProductCard"
import { ProductImage, ProductTitle, ProductButtons } from '../components';

import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h2>Shopping Page</h2>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 4,
          // maxCount: 10
        }}
      >
        {
          ({ reset, increaseBy, isMaxCountReached, counter, maxCount }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>

    </div >
  )
}
