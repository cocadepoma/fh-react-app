import { ProductCard } from "../components/ProductCard"
import { ProductImage, ProductTitle, ProductButtons } from '../components';

import { products } from "../data/products";

import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h2>Shopping Page</h2>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({ reset, increaseBy, isMaxCountReached, counter, maxCount }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {
                !isMaxCountReached && <button onClick={() => increaseBy(2)} >+2</button>
              }

              <span>{counter} - {maxCount}</span>
            </>
          )
        }
      </ProductCard>

    </div >
  )
}
