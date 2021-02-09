const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser"); // clientserver에서 분석해서 가져올 수 있게해주는것.
const { User } = require("./models/User");
const config = require("./config/key");

// application/x-www-form-ulencoded << 이렇게 된 데이터를 분석해서 가져올 수 있게해줌
app.use(bodyParser.urlencoded({ extended: true }));
// application/json << 이렇게 된 데이터를 분석해서 가져올 수 있게 해 줌
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("안녕하세요!");
});

app.post("/register", (req, res) => {
  // 회원 가입할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.
  console.log(req);

  const user = new User(req.body); // req 안에 id : abc password : 1234 이렇게 들어있음. 정보를 받아옴

  user.save((err, userInfo) => {
    //
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
