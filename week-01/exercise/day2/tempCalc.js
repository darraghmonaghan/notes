
var arguments = process.argv.slice(2);

console.log(arguments);

if (arguments > 60 && arguments < 80) {
	console.log('Enjoy the day! Lets have a picnic');
} else if (arguments > 80) {
	console.log("Too darn hot! I'm shvitzing over here.");
} else {
	console.log("Brrrr.....It's too darn cold");
}

