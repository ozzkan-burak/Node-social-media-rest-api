const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
dotenv.config();

const PORT = process.env.PORT; 
app.listen(PORT, ()=> {
  console.log(`Server run on ${PORT}`);
});