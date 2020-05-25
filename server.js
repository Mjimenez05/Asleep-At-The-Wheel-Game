const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

const SaveScore = require('./models')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.PORT ? "mongodb://user:password123@ds149874.mlab.com:49874/heroku_98nsf817" : "mongodb://localhost/asleep-at-the-wheel", { useNewUrlParser: true })

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require('./routes/index')(app)



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
