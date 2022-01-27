const express = require("express");
const bodyParser = require("body-parser");
app = express();
app.use(bodyParser.json());

const userService = require("./user_service");


app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  // check email
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
  const isValidEmail = emailRegex.test(email)

  if (!isValidEmail) return res.status(403).json({ error: "Email is invalid format."})
  try {
    const user = await userService.authenticate(email, password);
    return res.json(user);
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
});

app.get("/profile", async (req, res) => {
    try {
      const user = await userService.getToken();
      res.json(user);
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started at port ${port}`));