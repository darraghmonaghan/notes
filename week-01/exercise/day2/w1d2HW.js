
// var temp = process.argv.slice(2);

/* 
Your a thermoeter Harry, F and Celcius
*/

// var temp = process.argv.slice(2);

// function convertToCelcius(temp) {
// 	console.log((temp - 32) * 5/9);
// }


// function convertToFarenheit(temp) {
// 	console.log((temp * 9/5) + 32);
// }


// convertToCelcius(temp);
// convertToFarenheit(temp);


/* 
Thermometer Stretch Challenge - Kelvin
*/

// var input = process.argv.slice(2);

// var type = input[0];
// var temp = input[1];

// function convertToKelvin(type, temp) {
// 	if (type === 'F') {
// 		console.log((temp + 459.67) * 5/9);
// 	} else if (type === 'C') {
// 		console.log(temp + 273.15);
// 	} else {
// 		console.log('Enter "C" or "F" for temp format');
// 	}
// }

// convertToKelvin(type, temp);

/* 
2. The great comparator - A and B
*/

// var numbers = process.argv.slice(2);

// var a = numbers[0];
// var b = numbers[1];

// function compare(a, b) {
// 	if (a > b) {
// 		console.log("+1");
// 	} else if (a < b) {
// 		console.log("-1");
// 	} else {
// 		console.log("0");
// 	}
// }

// compare(a, b);


/* 
3. A man, A plan, A Canal: Panam!
*/

// var input = process.argv.slice(2);

// var a = input[0].split('').join('');
// var b = input[0].split('').reverse().join('');

// function isPalindrome(a) {
// 		if (a === b) {
// 			console.log(true);
// 		} else {
// 			console.log(false);
// 		}
// 	console.log(a);
// 	console.log(b);
// }

// isPalindrome(a);


/* 
3.1 A man, A plan, A Canal: Panam! STRETCH GOAL
*/


var input = process.argv.slice(2);

var a = input[0].split('').join('');
var b = input[0].split('').reverse().join('');

function isPalindrome(a) {
		if (a === b) {
			console.log(true);
		} else {
			console.log(false);
		}
	console.log(a);
	console.log(b);
}

isPalindrome(a);



