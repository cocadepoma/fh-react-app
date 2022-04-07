import { useShoppingCart } from '../hooks/useShoppingCart';

import { ProductCard } from "../components/ProductCard"
import { ProductImage, ProductTitle, ProductButtons } from '../components';

import { products } from "../data/products";

import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  const { onProductCartChange, shoppingCart } = useShoppingCart();

  return (
    <div>
      <h2>Shopping Page</h2>
      <hr />
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        gap: 10
      }}>

        {/* <ProductCard product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" title={'Café'} />
          <ProductCard.Buttons />
        </ProductCard> */}
        {
          products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark text-white"
              onChange={onProductCartChange}
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductImage className="custom-image" />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }

        <div className="shopping-cart">

          {
            Object.entries(shoppingCart).map(([key, product]) => (
              <ProductCard
                key={key}
                product={product}
                className="bg-dark text-white"
                style={{ width: '100px' }}
                value={product.count}
                onChange={onProductCartChange}
              >
                <ProductImage className="custom-image" />
                <ProductButtons
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                  className="custom-buttons"
                />
              </ProductCard>
            ))
          }
        </div>
      </div>
    </div >
  )
}
