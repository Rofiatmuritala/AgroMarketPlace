import { useContext } from "react";
import { CartContext } from "../contexts/CartContextProvider";
import { ProductContext } from "../contexts/ProductContextProvider";
import { PiShoppingCartFill } from "react-icons/pi";

export default function ProductsComponent() {
  const { products } = useContext(ProductContext);
  const { addToCart, itemExistInCart, removeCompletelyFromCart } =
    useContext(CartContext);

  return (
    <section className="mx-auto w-4/5">
      <div className="">
        <h2 className="font-semibold text-2xl text-center mb-3 text-gray-800">
          All Products
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <div key={product.id} className="hover:shadow-2xl">
            <div className="p-3">
              <img
                src={product.image}
                alt="product image"
                className="h-60 w-full rounded-lg"
              />
              <h2 className="py-3 text-lg font-medium">{product.name}</h2>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <p className="mr-1 font-bold text-xl">
                    GHC {product.sellingPrice}
                  </p>
                  <p className="ml-1 line-through">GHC {product.actualPrice}</p>
                </div>
                <div className="bg-orange-400 px-3 py-1 rounded-full text-white text-sm">
                  {(
                    ((product.actualPrice - product.sellingPrice) /
                      product.actualPrice) *
                    100
                  ).toFixed(2)}
                  % off
                </div>
              </div>
              <p>{product.description}</p>

              {itemExistInCart(product.id) ? (
                <>
                  <div
                    className="bg-red-600 text-white flex items-center justify-center mt-5 mb-3 py-3 px-5 rounded-lg cursor-pointer hover:bg-red-800"
                    onClick={() => removeCompletelyFromCart(product)}
                  >
                    <div className="mr-1">Remove from cart</div>
                    <PiShoppingCartFill className="ml-1 text-lg" />
                  </div>
                </>
              ) : (
                <div
                  className="bg-gray-800 text-white flex items-center justify-center mt-5 mb-3 py-3 px-5 rounded-lg cursor-pointer hover:bg-gray-600"
                  onClick={() => addToCart(product)}
                >
                  <div className="mr-1">Add to Cart</div>
                  <PiShoppingCartFill className="ml-1 text-lg" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
