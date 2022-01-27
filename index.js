const express = require("express");
const bodyParser = require("body-parser");
app = express();
app.use(bodyParser.json());

const userService = require("./user_service");


app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(req.body)
    const user = await userService.authenticate(email, password);
    res.json(user);
  } catch (err) {
      console.log(err.message)
    res.status(401).json({ error: err.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started at port ${port}`));