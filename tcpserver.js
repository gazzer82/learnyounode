var net = require('net');

var server = net.createServer(function(socket){
    var date = new Date()
    //console.log(date.getFullYear());
    var dateString = '';
    socket.write(date.getFullYear()  + '-' + (date.getMonth()+1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes());
    socket.end();
});
server.listen(process.argv[2]);