const Joi = require('joi');

const arrayString = ['banana', 'bacon', 'cheese'];
const arrayObjects = [
	{ example: 'example1' },
	{ example: 'example2' },
	{ example: 'example3' }
];

const userInput = {
	personalInfo: {
		streetAddress: '123123123',
		city: 'asdasd',
		state: 'as'
	},
	preferences: arrayString
};

const personalInfoSchema = Joi.object().keys({
	streetAddress:
		Joi.string()
			.trim()
			.required(),
	city:
		Joi.string()
			.trim()
			.required(),
	state:
		Joi.string()
			.trim()
			.length(2)
			.required()
});

//> Verifica se todos itens são string
const preferencesSchema = Joi.array().items(Joi.string());

const userSchema = Joi.object().keys({
	personalInfo: personalInfoSchema,
	preferences: preferencesSchema
});

const objectSchema = Joi.array().items(
	Joi.object().keys({
		example: Joi.string().required()
	})
);

const results = [userSchema.validate(userInput), objectSchema.validate(arrayObjects)];

for (let result of results) {
	console.log(result['error'] || result['value']);
}