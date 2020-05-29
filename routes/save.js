
const axios = require("axios")
const db = require("../models")


module.exports = function (app){

    app.get('/saved', function (request, response) {
        
        db.SaveScore
          .find({})
          .then(function (data) {
            response.json(data);
          });
      });

      app.post("/saveScore", function (req, res){
        
        console.log(req);
        

        db.SaveScore.create({
          initals: req.initals,
          score: req.score
          
        })
        .then(response => {response.send("sent!");
        })
        
      })
}
