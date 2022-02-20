import { ProductCard } from "../components/ProductCard"
import { ProductImage, ProductTitle, ProductButtons } from '../components';

const product = {
  id: '1',
  title: 'Cofee Mug 23',
  image: './coffee-mug.png'
};

export const ShoppingPage = () => {
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

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={'Café'} />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

      </div>
    </div>
  )
}
