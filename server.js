const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

const SaveScore = require('./models')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.PORT ? "mongodb://user1:password1@ds035014.mlab.com:35014/heroku_xf4r7k5w" : "mongodb://localhost/asleep-at-the-wheel", { useNewUrlParser: true })

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require('./routes/index')(app)



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
