var http = require('http');
var fs = require("fs");
var url = require('url');

http.createServer(function (req, res){
      var path = url.parse(req.url).path;

      console.log("Request for " + path + " received");

      fs.readFile(path.substr(1), function(err, data){
            if(err){
                  console.log(err);
                  res.writeHead(404, {'Content-Type': 'text/html'});
                  res.write('Error Page not found!');
            }else{
                  res.writeHead(200,{'Content-Type': 'text/html'})
                  res.write(data.toString());
            }
            res.end();
      });
}).listen(5000);

console.log('Server running at localhost:5000');