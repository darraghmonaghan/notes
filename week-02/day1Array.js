

// Question 1: Lunch line timings - WORKING / CORRECT


// var customers = ['Justin', 'Ilias', 'Nathan', 'Camilo', 'Vikash', 'Adam', 'Brianna', 'Sarah', 'Ali', 'Jessie', 'Cameron'];
// var time = 2;

// customers.forEach(function callback(element) {
// 	console.log(element + ': ' + time + 'minutes');
// 	time = time + 2;
// });


// var prices = [3.00,4.00,10.00,2.25,3.01];

// prices.map(function callback(element) {
// 	return element - 0.01;
// 	//console.log(prices);
// });

//[2.99, 3.99, 9.99, 2.24, 3.00]



// var birthDates = [1, 1, 2, 3, 3, 4, 7, 4, 9, 11, 15, 12, 22, 30];
// var evenDates;
// var oddDates;

// birthDates.filter(function callback(element) {
// 	if (element % 2 === 0) {
// 		evenDates.push(element);
// 	} else {
// 		oddDates.push(element);
// 	}
// });
// console.log(evenDates);
// console.log(oddDates);




// var earnings = [20, 25, 60, 20, 85, 20];
// var dollars20 = 0;

// earnings.reduce(function callback(previousValue, currentValue, index, array) {
// 	return previousValue + currentValue;
// }, 500);



// earnings.reduce(function callback(previousValue, currentValue, index, array) {
// 	for (var i = 0; i < earnings.length; i++) {
// 	    if (earnings[i] === 20) { 
// 	    	dollars20++;
// 	    	//dollars20.push(earnings[i]);
// 	    }
// 	}	
// 	return dollars20;
// });


// earnings.forEach(function callback(cash) {
// 	if (cash === 20) { 
// 	    dollars20++;
// 	    }
// });
// console.log(dollars20); // for TESTING
// return dollars20;


