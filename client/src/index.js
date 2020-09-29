import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./style.css";

toast.configure();

function App() {
  const [product] = React.useState({
    name: "Tesla Roadster",
    price: 64887.98,
  });

  async function handleToken(token) {
    const res = await axios.post("http://localhost:8080/checkout", {
      token,
      product,
    });
    const { status } = res.data;

    if (status === "success") {
      toast("Success! Check your email for the receipt", { type: "success" });
    } else {
      toast("Something went very wrong", { type: "error" });
    }
  }
  return (
    <div className="container">
      <div className="product">
        <h1>{product.name}</h1>
        <h3>On Sale . ${product.price}</h3>
      </div>
      <StripeCheckout
        stripeKey="pk_test_51HWJtrIxaVsLDMSFMkK03kQHG6KmYBE5PcH3sQsp8doamMfcPFBOCEY8edy6W9ODj5vXDHB5c2Fj5s42MamZ4AyM00jFjUfGb7"
        token={handleToken}
        billingAddress
        shippingAddress
        name={product.name}
        amount={product.price * 100}
      />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
