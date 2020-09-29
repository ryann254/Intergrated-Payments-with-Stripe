const cors = require("cors");
const express = require("express");
const stripe = require("stripe")(
  "sk_test_51HWJtrIxaVsLDMSFiq3WOZ0lsvAADykMWwdN07kNdnSxiPs96SzKzz1lk6q5doEzdumoxrEnxm1rqwuo8EeMoBFT00lR6iwyLd"
);
const path = require("path");
const uuid = require("uuid/v4");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// app.get("/", (req, res) => {
//   res.send("Heey your backend is up and running!");
// });

app.post("/checkout", async (req, res) => {
  let error;
  let status;
  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line1,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      {
        idempotency_key,
      }
    );

    status = "success";
  } catch (error) {
    console.error("Error: ", error);
    status = "failure";
  }

  res.json({ error, status });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Your app is up and running");
});
