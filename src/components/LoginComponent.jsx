import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginSellerSubmitHandler = (e) => {
    e.preventDefault();

    const loginSellerCredentials = {
      email: email,
      password: password,
    };

    const sellersInLocalStorageArray = JSON.parse(
      localStorage.getItem("sellers")
    );

    const findSellerFromTheLocalStorage = sellersInLocalStorageArray.find(
      (seller) => seller.email == loginSellerCredentials.email
    );

    if (findSellerFromTheLocalStorage === undefined) {
      // Seller was not found in the local storage
      toast.error("Invalid credentials");
    } else if (
      findSellerFromTheLocalStorage.password !== loginSellerCredentials.password
    ) {
      // A wrong password was entered
      toast.error("Invalid credentials");
    } else {
      // If the seller email is found in the sellers in the local storage and password the seller entered is the same as the one in the local storage, then save the seller as the login seller in the local storage
      localStorage.setItem(
        "loginSeller",
        JSON.stringify(loginSellerCredentials)
      );

      // Notify the seller that they've successfully logged in
      toast.success("You've successfully log in");

      setInterval(() => {
        // Redirect the seller to their dashboard after a sucessful login.
        // The purpose of the setInverval is to wait for 3 secs before redirecting the seller to the dashboard. This will wait for the notication to finish
        return navigate("/dashboard");
      }, 3000);
    }
  };

  return (
    <Container>
      <ToastContainer />
      <h3>Login to your account</h3>
      <Form onSubmit={loginSellerSubmitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Login
        </Button>
      </Form>
      <p>
        Don't have an account? <Link to={"/register"}>Register</Link>
      </p>
    </Container>
  );
}

export default LoginComponent;
