const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AZlu8Hj3vHhk-UvdtGLwXpM9LGeFyV8eZPeZ-RRVmgP8qSSn3PheoSxBkbB9tiSDeL2fH3T_zX8cgdDS",
  client_secret: "EBlojaL-D4Ms3o43kvCOTB20Mhi_z9tuRcfgOoLIq9cGHZXzhxZRG5Gv_9muo2Z1gc1SpCrGETiM0FLS",
});

module.exports = paypal;
