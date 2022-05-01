require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => {
    console.log("Error", err);
  });

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
