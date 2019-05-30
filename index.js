var http = require('http');
const fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
    		fs.readFile('./html/index.html','utf-8', (err, data) => {
  				if (err) throw err;
  				response.write(data);
  				response.end();
			});        
            
    } else {
    	 	response.setHeader("Content-Type", "text/html; charset=utf-8");
            response.write('<img src="https://3kllhk1ibq34qk6sp3bhtox1-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/screen-shot-2017-11-16-at-3.50.20-pm-1.png">');
            response.statusCode = 404;
            response.end();
    }
});

console.log('połączono z: localhost:8080');
server.listen(8080);