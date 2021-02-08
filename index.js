const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://seunghwan:6428@hwan.mo8nu.mongodb.net/hwan?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!!!!!! 안녕하세여어어어어");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
