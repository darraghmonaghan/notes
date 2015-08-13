var arguments = process.argv.slice(2);

console.log(arguments);

var order = arguments[0] || 'burger';

var textToWaiter = 'I would like a ' + order;

console.log(textToWaiter);