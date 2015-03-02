var News = require('../news.js')

News.find({}, function(err, results){
  if(results.length === 0){
    var item1 = new News({
      title: 'Cat breaks internet',
      url: 'http://www.google.com',
      author: 'Chris',
      votes: 0,
      tags: ['cat', 'internet'],
      content: 'This cat is funny!',
      imageUrl: 'http://2.bp.blogspot.com/-MrdX0JhwM9U/T65PZsmNS7I/AAAAAAAAAKM/SkTZHvBUMq8/s1600/1336023490071.png'
    });
    
    item1.save();

    var item2 = new News({
      title: 'Dingo has fun',
      url: 'http://www.google.com',
      author: 'Dave',
      votes: 0,
      tags: ['dingo', 'funny'],
      content: 'This dingo is dumb!',
      imageUrl: 'http://upload.wikimedia.org/wikipedia/commons/b/ba/Canis_lupus_dingo_2.jpg'
    });
      
    item2.save();

      var item3 = new News({
        title: 'baby crazy',
        url: 'http://www.google.com',
        author: 'Sara',
        votes: 0,
        tags: ['baby', 'funny'],
        content: 'this baby crazy!',
        imageUrl: 'http://www.9freepictures.com/d/file/babies/201001/baby-black-and-white-photography-140-2.jpg'
      });
        
      item3.save();
      
  }
});