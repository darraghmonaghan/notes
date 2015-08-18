

var days = ["monday", "tuesday", "wednesday"];
var numbers = [10, 13, 24, 45, 9, 2, 49, 243];

///  MASTER TEST FUNCTION  /////

function assert(input, output, testFunction) {
    return output === testFunction(input);
    console.log("test passed");
}


///   EXERCISES  ////////

function firstOfArray() {
	// console.log('true');
	return days[0];
}

function lastOfArray() {
	return days[days.length - 1];
}






function min() {
	numbers.sort(sortNumbers);
	numbers[0];
}

function sortNumber() {
	return a - b;
}



// assert('monday', 'monday', lastOfArray);

assert(numbers, 2, min);