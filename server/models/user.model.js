const mongoose = require("mongoose");

const User = new mongoose.Schemata({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  quote: { type: String },
});
