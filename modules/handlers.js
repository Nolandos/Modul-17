var fs = require('fs');
var formidable = require('formidable'); //Moduł do obsługi zapytań formularza


exports.upload = function(request, response) {
    console.log("Rozpoczynam obsługę żądania upload."); 

    var form = new formidable.IncomingForm();

    form.parse(request, function(error, fields, files) {

        fs.renameSync(files.upload.path, `./image/${files.upload.name}`);
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write("received image:<br/>");
        response.write(`<img src='/show/${files.upload.name}' />`);
        response.end();
    });
}

exports.welcome = function(request, response) {
    console.log("Rozpoczynam obsługę żądania welcome.");
    fs.readFile('templates/start.html', function(err, html) {
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(html);
        response.end();
    });
}

exports.styles = function(request, response) {
    console.log("Rozpoczynam obsługę styli.");
    fs.readFile('style.css', function(err, css) {
        response.writeHead(200, {"Content-Type": "text/css;"});
        response.write(css);
        response.end();
    });
}

exports.error = function(request, response) {
    console.log("Nie wiem co robić.");
    response.write("404 :(");
    response.end();
}

exports.show = function(request, response) {
	
	let name = request.url.replace('/show/', '');

    fs.readFile(`./image/${name}`, "binary", function(error, file) {
        response.writeHead(200, {"Content-Type": "image/png"});
        response.write(file, "binary");
        response.end();
    });
}