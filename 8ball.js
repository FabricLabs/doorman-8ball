module.exports = function (Doorman) {
	const responses = [
		'As I see it, yes',
		'Better not tell you now',
		'Cannot predict now',
		'Don\'t count on it',
		'If you say so',
		'In your dreams',
		'It is certain',
		'Most likely',
		'My CPU is saying no',
		'My CPU is saying yes',
		'Out of psychic coverage range',
		'Signs point to yes',
		'Sure, sure',
		'Very doubtful',
		'When life gives you rice, you make rice',
		'Without a doubt',
		'Wow, Much no, very yes, so maybe',
		'Yes, definitely',
		'Yes, unless you run out of memes',
		'You are doomed',
		'You can\'t handle the truth',
	];
	return {
		commands: [
			'8ball'
		],
		'8ball': {
			usage: '<Question>',
			description: 'Ask the magic 8 ball a question.',
			process: (msg, suffix, isEdit, cb) => {
				let response = 'Not even I have an answer to a question not asked.';
				if (suffix) {
					response = 'I don\'t know what to tell you. I\'m all out of answers.';
					if (responses && responses.length) {
						response = responses[Math.floor(Math.random() * responses.length)];
					}
				}

				cb({
					embed: {
						color: Doorman.Config.discord.defaultEmbedColor,
						title: suffix,
						description: `:8ball: **${response}**`,
					}
				}, msg);
			}
		}
	}
}