const mongoose = require("mongoose");
const schema = mongoose.Schema;
const User = new schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    points:{ type: Number },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", User);
