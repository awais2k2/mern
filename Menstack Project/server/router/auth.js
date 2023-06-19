const bycrpt = require("bcryptjs");
const express = require("express");

const router = express.Router();
const User = require("../models/userSchema");
const authenticate = require("../middleware/authticate");

router.get("/", (req, res) => {
  res.send("Hello from the server in router js");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Plz filled the field properly" });
  }
  const user = await User.findOne({ email });
  if (user) {
    return res.status(422).json({ error: "User already exist" });
  } else {
    if (password != cpassword) {
      return res.status(422).json({ error: "confrim password doesnot match" });
    } else {
      User.create({ name, email, phone, work, password, cpassword })
        .then(() => {
          res.status(201).json({ msg: "User Created Successfully" });
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    }
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!password || !email) {
    return res.status(422).json({ error: "Plz filled the field properly" });
  }
  const user = await User.findOne({ email });

  if (user) {
    const token = await user.generateAuthToken();

    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 2589200000),
      httpOnly: true,
    });
    const isMatch = await bycrpt.compare(password, user.password);
    if (!isMatch) {
      return res.status(422).json({ msg: "Invalid Credential" });
    } else {
      return res
        .status(200)
        .json({ msg: "User Signin Successfully", data: user });
    }
  } else {
    return res.status(422).json({ msg: "Invalid Credentials" });
  }
});

router.get("/about", authenticate, (req, res) => {
  res.send(req.rootUser);
});

router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      res.status(400).json({ msg: "Please fill the values" });
    }

    const userContact = await User.findOne({ _id: req.userId });
    if (userContact) {
      await userContact.addMessage(name, email, phone, message);
      await userContact.save();
      res.status(200).json({ msg: "Contact Successfully" });
    }
  } catch (error) {
    res.status(401).json({ msg: "Contact UnSuccessfully" });
  }
});

router.get("/getData", authenticate, (req, res) => {
  res.send(req.rootUser);
});

//logout

router.get("/logout", (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send({ msg: "Logout Successfully" });
});

router.get("/checkuser", authenticate, (req, res) => {
  res.send(req.token);
});

module.exports = router;
