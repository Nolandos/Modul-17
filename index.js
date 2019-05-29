var fs = require('fs');
var colors = require('colors');

fs.readdir('./','utf8', (err, data) => {
  if (err) throw err;
  //Wyświetlanie jako obiekt
  console.log(data);

  //Wyświetlanie jako osobne rekordy
  data.forEach(item => {
  	console.log(item);
  });

  //Zapisywanie do pliku
  fs.writeFile('message.txt', data, (err) => {
  	if (err) throw err;
  	console.log('The file has been saved!');
	});
  
  //Tutaj jedno pod drugim :)
  data.forEach(item => {
  	fs.appendFile('message2.txt', `${item} \r\n`, (err) => {
  	if (err) throw err;
  	console.log('The file has been saved!');
	});
  });
});