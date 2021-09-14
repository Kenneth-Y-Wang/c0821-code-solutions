function ExampleConstructor() {}

console.log('value of the prototype property of the ExampleConstructor', ExampleConstructor.prototype);
console.log('typeof the prototype property of the ExampleConstructor', typeof ExampleConstructor.prototype);

var newFunction = new ExampleConstructor();
console.log('the value of newFunction is', newFunction);

var result = newFunction instanceof ExampleConstructor;
console.log('the result is', result);
