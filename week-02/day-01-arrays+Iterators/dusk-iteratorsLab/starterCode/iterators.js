//where our iterators live
var o_o = {
  each: function(list, callback) {
    for(i = 0; i < (o_o.length - 1); i++)
        //return o_o[i];
        callback(o_o[i]);
  },
  map: function(list, callback){
    //code here...
  },
  filter: function(list, callback) {
<<<<<<< HEAD
=======
    //code here...
>>>>>>> 378a232692cc09b7562c65b71751abb72ace4793
  }
};

//expose our iterators to other files
//such as our assertions
module.exports = o_o;
