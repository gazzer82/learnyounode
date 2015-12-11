var fileModule = require('./fileModule.js');
fileModule(process.argv[2],process.argv[3],function(err,result){
    result.forEach(function(file){
        console.log(file);
    })
})