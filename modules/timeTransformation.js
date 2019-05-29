function timeTransformation (seconds) {
	let hours = Math.floor((seconds / 3600));
	let minutes = Math.floor(((seconds - hours* 3600 )/ 60));
	let restOfSeconds = seconds % 60;

	if (seconds / 3600 < 1) {
		return `${minutes}min. ${restOfSeconds}sek.`;
	} else if(seconds/ 3600 >= 1) {
		return `${hours}godz. ${minutes}min. ${restOfSeconds}sek.`;
	}
}

exports.print = timeTransformation;

