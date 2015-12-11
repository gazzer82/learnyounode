var fileSystem = require('fs');
fileSystem.readFile(process.argv[2],function(err,buffer){
    if(err){
        console.log(err);
    } else {
        console.log(buffer.toString().split('\n').length -1);
    }
});
//console.log(fileSystem.readFileSync(process.argv[2]).toString().split('\n').length -1);