import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContextProvider";
import { Table } from "react-bootstrap";

const DashboardProductsComponent = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="mt-5">
      <h4 className="mb-3">Products</h4>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Actual Price</th>
            <th>Selling Price</th>
            <th>Qty In Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                <img src={product.image} alt="" width={70} height={70} />
              </td>
              <td>GHS {product.actualPrice}</td>
              <td>GHS {product.sellingPrice}</td>
              <td>{product.qtyInStock}</td>
              <td>
                {/* <EditProductComponent product={product} />
              <DeleteProductComponent productId={product.id} /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DashboardProductsComponent;
