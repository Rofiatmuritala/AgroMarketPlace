import React from "react";
import { productItems } from "./products-json.js";
import { landingProductItems } from "./products-json.js";

function ProductComponent() {
    return (
            <div>
                <section className="products-section">
                    <div className="products-section-title">
                        <h2>All Products</h2>
                    </div>
                    <div className="product-items">

                        {landingProductItems.map((product) => (
                            <div key={product.id} >
                                <div className="product-card">
                                    {/* add width of 100% to images */}
                                    <img src={product.image_url} alt="product image" />
                                    <h2>{product.name}</h2>
                                    <p className="price">GHC {product.price}</p>
                                    <p>{product.description}</p>
                                    <p><button type="submit">Add to Cart</button></p>
                                </div>
                            </div>))}
                    </div>
                </section>
            </div>
    
    );
}
export default ProductComponent;
