var http = require('http');
var fs = require('fs');

console.log(process.argv);

var server = http.createServer(function(request,response){
    var stream = fs.createReadStream(process.argv[3]);
    stream.on('open',function(){
        stream.pipe(response);
    });
});
server.listen(process.argv[2]);