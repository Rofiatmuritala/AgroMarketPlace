import React from "react";
import { Container } from "react-bootstrap";
import ProductsDashboardComponent from "./product/ProductsDashboardComponent";
import AddProductDashboardComponent from "./product/AddProductDashboardComponent";

function DashboardComponent() {
  return (
    <>
      <Container>
        {/* Add product Modal */}
        <AddProductDashboardComponent />

        {/* All Products */}
        <ProductsDashboardComponent />
      </Container>
    </>
  );
}

export default DashboardComponent;
