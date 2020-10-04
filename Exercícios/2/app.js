const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', () => { // Só acontece quando chamado em EventEmitter.emit
	console.log(`Tutorial event has occurred!`);
});

eventEmitter.on('tutorial', (num1, num2) => {
	console.log(`${num1} + ${num2} = ${num1 + num2}`);
});

// eventEmitter.emit('tutorial');
// eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter {
	constructor(name) {
		super();
		this._name = name;
	}

	get name() {
		return this._name;
	}
}

let person = new Person('Paulo');
person.on('name', () => {
	console.log(`My name is ${person.name}`);
});

person.emit('name');