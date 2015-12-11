var fs = require('fs');
var path = require('path');
module.exports = function(directory,extension,callback){
    fs.readdir(directory,function(err,data){
        if (err){
            return callback(err);
        } else {
            var returnData = data.filter(function(file){
                return path.extname(file) === '.' + extension;
            });
            return callback(null, returnData);
        }
    })
};