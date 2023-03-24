const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: "string",
  age: "string",
  favouriteFoods: ["string"],
});
module.exports = person = mongoose.model("person", personSchema);
