import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function RegisterComponent() {
  // the usestate is null or empty string because the seller is yet to enter the information
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const registerSellerSubmitHandler = (e) => {
    e.preventDefault();

    const newSeller = {
      fullName: fullName,
      email: email,
      password: password,
    };

    // we are checking if the seller is null then the entire seller does not exist
    if (localStorage.getItem("sellers") === null) {
      localStorage.setItem("sellers", JSON.stringify([]));
    }

    const sellersInLocalStorageArray = JSON.parse(
      localStorage.getItem("sellers")
    );

    // confirming or comparing if the seller's email in the localstorage is the same as the email they are entering
    const sellerAlreadyRegistered = sellersInLocalStorageArray.some(
      (seller) => seller.email === email
    );

    //   react toastify
    if (sellerAlreadyRegistered === true) {
      toast.error("You've Registered");
    } else {
      sellersInLocalStorageArray.push(newSeller);

      localStorage.setItem(
        "sellers",
        JSON.stringify(sellersInLocalStorageArray)
      );

      toast.success("You've successfully registered as a seller");
      setInterval(() => {
        // Redirect the seller to their dashboard after a sucessful register.
        // The purpose of the setInverval is to wait for 3 secs before redirecting the seller to the dashboard. This will wait for the notication to finish
        return navigate("/login");
      }, 3000);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="bg-auth">
          <div className="flex justify-center h-full text-white">
            <div className="mt-20 mx-auto w-4/5">
              <h1 className="font-bold text-2xl lg:text-4xl text-orange-400 my-10 capitalize">
                Sign up as a seller today!
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate laborum, exercitationem iusto earum nulla eveniet
                maiores sequi at quo, hic nobis rerum rem esse libero vitae?
                Vero reiciendis odio
              </p>
            </div>
            sunt?
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="mx-auto w-4/5">
            <h3 className="mb-4 text-center font-bold text-2xl text-orange-400">
              Register As A Seller
            </h3>
            <Form onSubmit={registerSellerSubmitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                {/* saying that what the seller is typing should be saved as fullname */}
                <Form.Control
                  type="text"
                  placeholder="Team Ruby"
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <button
                type="submit"
                className="bg-orange-400 text-white px-3 py-2 rounded-lg hover:bg-orange-300"
              >
                Register
              </button>
            </Form>
            <p className="mt-3">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-orange-400 hover:text-orange-800"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterComponent;
