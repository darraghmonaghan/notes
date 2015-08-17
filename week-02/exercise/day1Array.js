

// Question 1: Lunch line timings - WORKING / CORRECT


var customers = ['Justin', 'Ilias', 'Nathan', 'Camilo', 'Vikash', 'Adam', 'Brianna', 'Sarah', 'Ali', 'Jessie', 'Cameron'];
var time = 2;

customers.forEach(function callback(element) {
	console.log(element + ': ' + time + 'minutes');
	time = time + 2;
});

