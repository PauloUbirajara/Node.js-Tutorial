const tutorial = require('./tutorial'); // Importa o que tiver sido declarado dentro de module.exports em outros arquivos;

console.log('Hello World from Nodejs');
console.log(`Sum of 1 and 2 is ${tutorial.sum(1, 2)}`);
console.log(`PI: ${tutorial.PI}`);
console.log(`Some Math Class: ${new tutorial.SomeMathObject()}`);