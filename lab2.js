//requres to be run in browser
var http = require('http');

//url library to parse a querystring value
var url = require('url');

//start the server
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text-plain'});
    res.write('<h1>Lab2 - calculator</h1>');
    res.write('<h2>Welcome!!!</h2>')

    //get the info from the url querystring
    var queryString = url.parse(req.url, true).query;
    var method = queryString.method;
    var calculate = 0;
    var x = parseFloat(queryString.x);
    var y = parseFloat(queryString.y);
    
    if(method == 'add'){
        calculate = x + y;
        res.write('The result is '+ calculate);
    }
    else if(method == 'subtract'){
        calculate = x - y;
        res.write('The result is '+ calculate);
    }
    else if(method == 'multiply'){
        calculate = x * y;
        res.write('The result is '+ calculate);
    }
    else if(method == 'divide'){
        calculate = x / y;
        res.write('The result is '+ calculate);    
    }
    else{
        res.write('Error! Please check what you did.');
    }
    res.end();
}).listen(8000);