// CheckoutForm.js

import { CartContext } from "../Cart/cartcontext";
import React, { useState, useContext } from "react";
import useSWR from "swr";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./CheckoutStyle.css";

const CheckoutForm = (orderId) => {
  const [formData, setFormData] = useState({
    Name: "",
    EmployeeID: "",
    Email: "",
  });

  const { cartItems, removeFromCart } = useContext(CartContext);

  console.log(cartItems);

  //using the useSWR() hook to load the /order/orderId endpoint in the checkout component - should fetch order data from the db
  const { data: orderData, error } = useSWR("/order/${orderId}", {
    // Specifying that we want to fetch the _id field from the database
    params: {
      _id: orderId,
    },
  });

  if (error) {
    console.error("Error fetching order data:", error);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:");
    // Clear the form after submission POSTMAN DATA GOES HERE
    setFormData({
      Name: "",
      EmployeeID: "",
      Email: "",
    });
  };


  return (
    <div className="container">
    
      <Form onSubmit={handleSubmit}>

      <h5>Order Summary</h5>
      <table>
          {cartItems.map((item) => {
       
            return(
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>Number of items# {item.quantities}</td>
              <td>Price $ {item.price}</td>
            </tr>
            )
          })}
          </table>
          

        <Form.Group className="mb-3" controlId="formBasicFullName">
          <Form.Label> Full Name</Form.Label>
          <Form.Control
            type="FullName"
            placeholder="Enter Full Name"
            required
            minLength="2"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmployeeID">
          <Form.Label>Employee ID Number</Form.Label>
          <Form.Control
            type="employeeID"
            placeholder="Employee ID Number"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your employee ID with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="amount" placeholder="Amount" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Save Payment Details" />
        </Form.Group>
        <div className="form-buttons-container">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="primary" type="submit" href="/dashboard">
          Cancel
        </Button>
        </div>
      </Form>   

    </div>
  );
};

export default CheckoutForm;
