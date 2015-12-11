var http = require('http');
var dataStore = ['','',''];
var comp1 = false;
var comp2 = false;
var comp3 = false;

function checkStatus(){
    if(comp1 && comp2 && comp3){
        console.log(dataStore[0]);
        console.log(dataStore[1]);
        console.log(dataStore[2]);
    }
}

//Data 1
http.get(process.argv[2],function(response){
    response.setEncoding('utf8');
    response.on('data',function(data){
        dataStore[0] += data;
    });
    response.on('error',console.error);
    response.on('end',function(){
        comp1 = true;
        checkStatus();
    })
})

//Data 2
http.get(process.argv[3],function(response){
    response.setEncoding('utf8');
    response.on('data',function(data){
        dataStore[1] += data;
    });
    response.on('error',console.error);
    response.on('end',function(){
        comp2 = true;
        checkStatus();
    })
})

//Data 3
http.get(process.argv[4],function(response){
    response.setEncoding('utf8');
    response.on('data',function(data){
        dataStore[2] += data;
    });
    response.on('error',console.error);
    response.on('end',function(){
        comp3 = true;
        checkStatus();
    })
})