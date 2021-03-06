const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoot = require("./router/users");
const authUserRoot = require("./router/auth");
const postsRoot = require("./router/posts");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, ()=> {
  console.log('Connected to MongoDB');
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get('/', (req, res)=> {
  res.send("welcome to home page");
});

app.use('/api/auth', authUserRoot);
app.use('/api/users', userRoot);
app.use('/api/posts', postsRoot);


app.listen(PORT, ()=> {
  console.log(`Server run on ${PORT}`);
});