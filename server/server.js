const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const currencyRoute = require("./routes/currency.router.js");
const userRoute = require("./routes/user.router.js");
// const clientRoute = require('./routes/client.router.js');
const accountRoute = require("./routes/account.router.js");
const entryRoute = require("./routes/entry.router.js");
const bondRoute = require("./routes/bond.router.js");
const currencyValueRoute = require("./routes/currencyValue.router.js");
const merchantsGroupRoute = require("./routes/merchantsGroup.router.js");
const merchantRoute = require("./routes/merchant.router.js");
const bankingRoute = require("./routes/banking.router.js");
const transferRoute = require("./routes/transfer.router.js");

require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: process.env.origin,
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

// mongoos
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("server connect with mongo");
  } catch (err) {
    console.log(err);
  }
};

//route
app.use("/currency", currencyRoute);
app.use("/user", userRoute);
app.use("/account", accountRoute);
app.use("/entry", entryRoute);
app.use("/bond", bondRoute);
// app.use("/client",clientRoute);
app.use("/currency_value", currencyValueRoute);
app.use("/merchants_group", merchantsGroupRoute);
app.use("/merchant", merchantRoute);
app.use("/banking", bankingRoute);
app.use("/transfer", transferRoute);

//error
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong";
  return res.status(500).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// server listen
app.listen(process.env.port, () => {
  connect();
  console.log(`Server listening on the port  ${process.env.port}`);
});
