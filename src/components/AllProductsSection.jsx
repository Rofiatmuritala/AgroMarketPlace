export default function AllProductsSection({products}) {
    return (
        <div className="product-items">
        {products.map((product) => (
            <div key={product.id} >
                <div className="product-card">
                    {/* add width of 100% to images */}
                    <img src={product.image_url} alt="product image" />
                    <h2>{product.name}</h2>
                    <p className="price">GHC {product.price}</p>
                    <p className="seller">{product.seller}</p>
                    <p><button type="submit">Add to Cart</button></p>
                </div>
            </div>
        ))             
    }
    </div> 
    );
}