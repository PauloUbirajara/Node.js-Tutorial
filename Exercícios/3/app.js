const readLine = require('readline'); // Serve para receber inputs e mostrar outputs no próprio terminal
const line = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

line.question(
	`What is ${num1} + ${num2} ?\n`,
	(userInput) => {
		if (userInput.trim() == answer) {
			line.close();
		} else {
			line.setPrompt('Incorrect response, please try again!\n');
			line.prompt();
			line.on('line', (userInput) => { // Continua repetindo após receber o input do usuário
				if (userInput.trim() == answer)
					line.close();
				else {
					line.setPrompt(`Your answer of ${userInput} is incorrect !\n`);
					line.prompt();
				}
			});
		}
	});

line.on('close', () => { // Acontece devido ao método line.close() emitir o próprio evento de 'close'
	console.log('Correct!!');
})