
var arguments = process.argv.slice(2);

var colors = ['blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink'];
var capital = 'Assur';
var mph = '24';

// if ((arguments[0] === colors) && (arguments[1] === capital) && (arguments[2] === mph)) {
// 	console.log('you may pass');
// } else {
// 	console.log('you are dead');
// }



// if ((arguments[0] === colors) && (arguments[1] === capital) && (arguments[2] === mph)) {
// 	console.log('you may pass');
// } else {
// 	console.log('you are dead');
// }




for (i = 0; i < colors.length; i++) {
 	if (arguments[0] === colors[i]) {
		if ((arguments[1] === capital) && (arguments[2] === mph)) {
			console.log('you may pass');
			return;
		}
	} else {
		console.log("You have been cast into the gorge of eternal peril!");
}






// function bridge(a, b, c) {
// 	for (i = 0; i < colors.length; i++) {
// 		if (ans1 === colors[i]) {
// 			if ((ans2 === 'Assur') && (ans3 === 24)) {
// 					console.log('You may pass!');
// 			}
// 		} else {
// 			console.log("You have been cast into the gorge of eternal peril!");
// 			return;
// 	} 
// }
// }

// bridge(ans1, ans2, ans3);