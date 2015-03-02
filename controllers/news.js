var News = require('../models/news.js');

var newsController = {
  getAll: function(req, res) {
    //goto db and find all news items
    News.find({}, function(err, results){
      //Send the entire array of results to the client as JSON
      res.send(results);
    });
  },

  newItem: function(req, res) {
    
  }
  
};

module.exports = newsController;