var arguments = process.argv.slice(2);

var n1 = arguments[0];
var n2 = arguments[1];

function mathematician(n1, n2) {
	for (i = 0; i <= n1; i++) {
		if (i % n2 === 0) {
			console.log(i);
		}
	}
}

mathematician(arguments[0], arguments[1]);