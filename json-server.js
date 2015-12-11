var http = require('http');

function parsetime(isoDate){
    var date = new Date(isoDate);
    return JSON.stringify({
        'hour' : date.getHours(),
        'minute' : date.getMinutes(),
        'second' : date.getSeconds()
    });
}

function parseunix(isoDate){
    var date = new Date(isoDate);
    return JSON.stringify({
        'unixtime' : date.getTime()
    });
}

var server = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type' : 'application/json'});
    var url = request.url.split('?')[0];
    var date = request.url.split('?')[1].split('=')[1];
    switch(request.url.split('?')[0]){
        case '/api/parsetime':
            response.write(parsetime(date));
            break;
        case '/api/unixtime':
            response.write(parseunix(date));
            break;
        default:
            response.write('unknown');
            break;
    }
    response.end();
})

server.listen(process.argv[2]);