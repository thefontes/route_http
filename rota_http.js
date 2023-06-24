var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
    if(request.url == "/"){
        fs.readFile(__dirname + '/artigos.html', function(err, html){
            response.writeHeader(200, {'Content-Type': 'text/html'});
            response.write(err);
            response.end(html);
        });
    }else if(request.url == "/artigos"){
        fs.readFile(__dirname + '/artigos.html', function(err, html){
            response.writeHeader(200, {'Content-Type': 'text/html'});
            response.write(err);
            response.end(html);
        });
    }else if(request.url == "/contato"){
        fs.readFile(__dirname + '/contato.html', function(err, html){
            response.writeHeader(200, {'Content-Type': 'text/html'});
            response.write(err);
            response.end(html);
        });
    }else{
        fs.readFile(__dirname + '/erro.html', function(err, html){
            response.writeHeader(200, {'Content-Type': 'text/html'});
            response.write(err);
            response.end(html);
        });
    }
    response.end();
});
server.listen(3000, function(){
    console.log('Servidor rodando');
});