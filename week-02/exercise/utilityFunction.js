

var days = ["monnday", "tuesday", "wednesday"];


///  MASTER TEST FUNCTION  /////

function assert(input, output, testFunction) {
    return output === testFunction(input);
    console.log("test passed???");
}


///   EXERCISES  ////////

function firstOfArray() {
	console.log('true');
	return days[0];
}

function lastOfArray() {
	return days[days.length - 1];
}



assert('monday', 'monday', lastOfArray);
