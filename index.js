//Enkodowanie przyjmowania danych z domyślnego (szesnastkowe) na utf-8
process.stdin.setEncoding('utf-8');

//Nasłuchiwanie na odczyt 'readable'
process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();

    if(input !== null) {     //opakowanie w if'a żeby przy kompilowaniu kodu od razu nie wywalało błędu   
        var instruction = input.toString().trim(); //to co wpisujemy przerabia na stringa toString() i ucina białe znaki z jednej i drugiej strony .trim()

        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else {
           process.stderr.write('Wrong instruction!');
        }
    }

    //Wyświetlenie wersji node
    console.log(process.versions.node);

    //Sprawdzenie Oprogramowanie i w przypadku macOS i Linux wyświetlamy język systemowy
    let expr = process.env.OS.toString().trim();
    let lang = process.env.LANG.toString();
    
	switch (expr) {
  		case 'Windows_NT':
    		console.log(`Posiadasz system ${expr}`);
    	break;
  		case 'macOS':
  		case 'Linux':
    		console.log(`Posiadasz system macOS lub linux`);
    		console.log(`Język systemowy to ${lang}`);	
    	break;
  		default:
    		console.log(`Posiadasz inny system operacyjny`);
}
});