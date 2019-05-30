var http = require('http');
var colors = require('colors');
var handlers = require('./handlers'); //import handlerów

function start() {
  function onRequest(request, response) {
    console.log("Odebrano zapytanie.".green);
    console.log("Zapytanie " + request.url + " odebrane.");
    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8","Content-Type": "text/css;"});

    let name = request.url.replace('/show/', '');

    switch (request.url) { // switch rozróżniający zapytania
        case '/':
        case '/start':
            handlers.welcome(request, response);
            break;
        case '/upload':
            handlers.upload(request, response);
            break;
        case `/show/${name}`:
    		handlers.show(request, response);
    	break;
    	case `/style.css`:
    		handlers.styles(request, response);
    	break;
        default:
            handlers.error(request, response);
    }
  }

  http.createServer(onRequest).listen(9000);

  console.log("Uruchomiono serwer!".green);
}

exports.start = start;