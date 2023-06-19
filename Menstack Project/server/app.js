const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cookieParser = require("cookie-parser");

dotenv.config({ path: "./config.env" });
require("./db/conn");

//json middleware
app.use(express.json());
app.use(cookieParser());
//link our routes
app.use(require("./router/auth"));

//Listening
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
