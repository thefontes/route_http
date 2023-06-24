var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  if (req.url == "/") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var readStream = fs.createReadStream(__dirname + '/artigos.html', 'utf8');
    readStream.pipe(res);
  } else if (req.url == "/artigos") {
    fs.readFile(__dirname + '/artigos.html', function(err, html) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      if (err) {
        res.write(err.toString()); // Converter o erro para string
      }
      res.end(html);
    });
  } else if (req.url == "/contato") {
    fs.readFile(__dirname + '/contato.html', function(err, html) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      if (err) {
        res.write(err.toString()); // Converter o erro para string
      }
      res.end(html);
    });
  } else {
    fs.readFile(__dirname + '/erro.html', function(err, html) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
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
