var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url == "/") {
        var readStream = fs.createReadStream(__dirname + '/artigos.html', 'utf8');
        readStream.pipe(res);
    } else if (req.url == "/artigos") {
        var readStream = fs.createReadStream(__dirname + '/artigos.html', 'utf8');
        readStream.pipe(res);
    } else if (req.url == "/contato") {
        var readStream = fs.createReadStream(__dirname + '/contato.html', 'utf8');
        readStream.pipe(res);
    } else {
        fs.readFile(__dirname + '/erro.html', function(err, html) {
            if (err) {
                res.write(err.toString()); // Converter o erro para string
            }
            res.end(html);
        });
    }
});

server.listen(3000, function() {
    console.log('Servidor rodando');
});