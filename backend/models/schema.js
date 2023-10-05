const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: String },
  desc: { type: String },
});

const Users = mongoose.model("Users", userSchema, "conditioncollection");

const mySchemas = { Users: Users };

module.exports = mySchemas;
