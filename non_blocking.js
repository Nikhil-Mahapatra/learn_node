var fs = require('fs');

fs.readFile('text.txt', function(err, data){
      if(err){
            console.log(err);
      }else{
            console.log(data.toString());
      }
});
console.log('End Here');