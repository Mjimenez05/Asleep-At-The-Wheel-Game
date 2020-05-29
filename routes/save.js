
const axios = require("axios")
const db = require("../models")


module.exports = function (app){

    app.get('/saved', function (request, response) {
        // response.send('The Holy Hand Grenade Of Antioch');
        db.SaveScore
          .find({})
          .then(function (data) {
            response.json(data);
          });
      });

      app.post("/saveScore", function (req, res){
        // console.log(body);
        
        // const {volumeInfo} = body

        db.SaveScore.create({
          initals: req.initals,
          score:
          
        })
        .then(response => {res.send(response)})
      })
}
