const data = require('./converted.js').data;
let book = [];
let author = {};

 var keys = Object.keys(data[0]);

 for (var i = 0; i < keys.length; i++) {
   var keyArr = keys[i].split(' ');
   if(keyArr[0] == 'Author'){
     console.log(keyArr);
   }
 }

for (var i = 0; i < data.length; i++) {
  let obj = {};
  obj.title = data[i]['Book Title'];
  obj.genre = data[i]['Book Genre'];
  obj.desc = data[i]['Book Description'];
  obj.cover_img = data[i]['Book Cover URL'];
  book.push(obj);
}

// for (var i = 0; i < data.length; i++) {
//   let obj = {};
//   obj.fname = data[i]['First Name']
//   data[i]
// }

// console.log(keys);
module.exports = {
  book,
  author,
};
