import { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductContextProvider";
import { Table } from "react-bootstrap";
import EditProductDashboardComponent from "./EditProductDashboardComponent";
import DeleteProductDashboardComponent from "./DeleteProductDashboardComponent";

const ProductsDashboardComponent = () => {
  const { sellerProducts } = useContext(ProductContext);

  const loggedInSeller = JSON.parse(localStorage.getItem("loginSeller"));

  const products = sellerProducts(loggedInSeller.email);

  return (
    <div className="mt-5">
      <h4 className="mb-3">Your Products ({products.length})</h4>

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
                <EditProductDashboardComponent product={product} />

                <DeleteProductDashboardComponent productId={product.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductsDashboardComponent;
