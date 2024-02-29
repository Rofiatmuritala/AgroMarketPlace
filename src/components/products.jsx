import { useContext } from "react";
import { CartContext } from "../contexts/CartContextProvider";
import { ProductContext } from "../contexts/ProductContextProvider";

export default function Products() {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <section className="products-section">
        <div className="products-section-title">
          <h2>All Products</h2>
        </div>
        <div className="product-items">
          {products.map((product) => (
            <div key={product.id}>
              <div className="product-card">
                {/* add width of 100% to images */}
                <img src={product.image} alt="product image" />
                <h2>{product.name}</h2>
                <div className="price">
                  <p className="">GHC {product.sellingPrice}</p>
                  <p className="actualPrice">GHC {product.actualPrice}</p>
                </div>
                <p>
                  {(
                    ((product.actualPrice - product.sellingPrice) /
                      product.actualPrice) *
                    100
                  ).toFixed(2)}
                  % off
                </p>
                <p>{product.description}</p>
                <p>
                  <button type="submit" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
