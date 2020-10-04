const sum = (num1, num2) => num1 + num2;

const PI = 3.14;

class SomeMathObject {
	constructor() {
		console.log('object created!');
	}
}

// module.exports.sum = sum; Transforma em um objeto e adiciona a ele

// Serve para exportar alguma coisa para outros arquivos .js;
module.exports = {
	sum,
	PI,
	SomeMathObject
}