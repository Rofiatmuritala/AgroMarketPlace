import React, { useEffect, useState } from "react";
import { doraItems, michaellItems, productItems, rachealItems } from "./products-json.js";

import AllProductsSection from "./AllProductsSection.jsx";
import { Button } from "react-bootstrap";

export default function Products() {
    const [products, setProducts] = useState(productItems);




    const filterItems = (seller) => {
        if (seller === 'a') {
            setProducts(productItems);
        }
        if (seller === 'd') {
            setProducts(doraItems);
        }
        if (seller === 'm') {
            setProducts(michaellItems);
        }
        if (seller === 'r') {
            setProducts(rachealItems);
        }
    }
    return (
        <div>
            <section className="products-section">
                <div className="products-section-header">
                    <div className="products-section-title">
                        <h2>Our Products</h2>
                    </div>
                    <div className="products-section-buttons">
                        <Button className="filterButton btn-dark" onClick={() => filterItems('a')}>All</Button>
                        <Button className="filterButton btn-dark" onClick={() => filterItems('d')}>Dora</Button>
                        <Button className="filterButton btn-dark" onClick={() => filterItems('m')}>Michael</Button>
                        <Button className="filterButton btn-dark" onClick={() => filterItems('r')}>Racheal</Button>
                    </div>
                </div>
                <AllProductsSection products={products} />
               
            </section>
        </div>
    );
}