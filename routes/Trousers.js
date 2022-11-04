var express = require('express');
var router = express.Router();


class Trousers {
  constructor(Trouser_Type, Trouser_size, Trouser_color) 
  {
    this.Trouser_Type = Trouser_Type;
    this.Trouser_size = Trouser_size;
    this.Trouser_color = Trouser_color;
  }
}

/* GET Trousers page. */
router.get('/', function(req, res, next) {
  var Trouser_obj1 = new Trousers("Skinny", 34, "Black");
  var Trouser_obj2 = new Trousers("Boot-cut", 32, "White");
  var Trouser_obj3 = new Trousers("Wide leg", 30, "Green");
  res.render('Trousers', { title: 'Search Results Trousers' , Trousers : [Trouser_obj1, Trouser_obj2, Trouser_obj3]});
});

module.exports = router;
