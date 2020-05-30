
// const axios = require("axios")
const db = require("../models")


module.exports = function (app){

    app.get('/saved', function (request, response) {
        
        db.SaveScore
          .find()
          .sort({score: -1})
          .limit(10)
          .then(function (data) {
            response.json(data);
          });
      });

      app.post("/saveScore", function (req, res){
        console.log(req.body);
        
        db.SaveScore.create({
          initals: req.body.initals,
          score: req.body.score
          
        })
        .then(response => {console.log(response);
          res.send("ok")
        })
        
      })
}
