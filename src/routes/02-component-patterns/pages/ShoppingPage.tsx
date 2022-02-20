import { ProductCard } from "../components/ProductCard"
import { ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';

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
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" title={'Café'} />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard
          product={product}
          className="bg-dark text-white"
        >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          className="bg-dark text-white"
          style={{ backgroundColor: '#dadada' }}
        >
          <ProductImage style={{ boxShadow: '2px 2px 10px 2px rgba(0,0,0,0.3)' }} />
          <ProductTitle style={{ color: 'green' }} />
          <ProductButtons style={{ backgroundColor: 'blue' }} />
        </ProductCard>

      </div>
    </div >
  )
}
