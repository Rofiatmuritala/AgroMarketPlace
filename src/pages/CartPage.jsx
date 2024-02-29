import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { CartContext } from "../contexts/CartContextProvider";

function CartPage() {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <Container>
        <>You have no item in your cart</>
      </Container>
    );
  }

  if (cartItems.length > 0) {
    return (
      <Container>
        <h5 className="mb-5">Cart ({cartItems.length})</h5>
        {cartItems.map((item) => (
          <div key={item.id} className="mb-5">
            <div>
              <img src={item.image} alt="" width={100} height={100} />
              <h2>{item.name}</h2>
            </div>
          </div>
        ))}
      </Container>
    );
  }
}

export default CartPage;
