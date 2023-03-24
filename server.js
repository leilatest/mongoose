const express = require("express");
const mongoose = require("mongoose");
const person = require("./models/person");
const app = express();

mongoose
  .connect(
    "mongodb+srv://leilabechaalia:leila2023@cluster0.nvrlf6t.mongodb.net/person?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err));

person.insertMany([
  { name: "Linda", age: "23", favouriteFoods: ["Hamburger", "Pizza"] },
  {
    name: "Sarra",
    age: "34",
    favouriteFoods: ["Pizza", "Spaghetti "],
  },
  { name: "Ahlem", age: "35", favouriteFoods: ["Marmez", "Couscous"] },
  { name: "Sarra", age: "15", favouriteFoods: ["Chapati", "Ma9loub"] },
  { name: "Maha", age: "42", favouriteFoods: ["Couscous", "Jelbana"] },
  { name: "leila", age: "27", favouriteFoods: ["Pizza", "Riz"] },
]);

person
  .find()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

person
  .findById("6419b48f9039189ba0e4bf81")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

findByIdAndUpdate(
  "6419b48f9039189ba0e4bf80",
  { $set: { age: 20 } },
  { new: true }
)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

Person.findByIdAndDelete("6419b48f9039189ba0e4bf80")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

app.listen(5000, (err) => {
  if (err) {
    console.log("error");
  }
  console.log(`Server is runnig 5000`);
});
