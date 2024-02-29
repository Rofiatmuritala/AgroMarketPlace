import React from "react";
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import DashboardProductsComponent from "./DashboardProductsComponent";
import DashboardAddProductComponent from "./DashboardAddProductComponent";

function DashboardComponent() {
  return (
    <>
      <Container>
        <ToastContainer />

        {/* Add product Modal */}
        <DashboardAddProductComponent />

        {/* All Products */}
        <DashboardProductsComponent />
      </Container>
    </>
  );
}

export default DashboardComponent;
