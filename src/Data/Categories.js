export const Categories = [
	{
		id: 1,
		image: "../Assets/hp.jpg",
		categoryName: "Harry Potter",
		bodyText:
			"MR H POTTER,The Cupboard under the Stairs, 4 Privet Drive, Little Whinging,Surrey",

		quizOne: [
			{
				questionId: 1,
				quote:
					'"It is our choices, that show what we truly are, far more than our abilities"',
				question: "What was the name of Harry Potter's pet ?",
				options: [{ a: "Dobby", b: "Hedwig", c: "Scabbers" }],
				isCorrect: true,
				points: 5,
				correctAns: "Hedwig",
			},
			{
				questionId: 2,
				quote:
					'"If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals"',
				question: "Who was the Godfather of Harry Potter ?",
				options: [
					{ a: "Prof. Severus Snape", b: "James Potter", c: "Sirius Black" },
				],
				correctAns: "Sirius Black",
				isCorrect: true,
				points: 5,
			},
			{
				questionId: 3,
				quote:
					'"Things we lose have a way of coming back to us in the end, if not always in the way we expect"',
				question:
					"Which one of the following was not the Harry Potter's best friend ?",
				options: [
					{ a: "Ronald Weasley", b: "Draco Malfoy", c: "Hermione Granger" },
				],
				correctAns: "Draco Malfoy",
				isCorrect: true,
				points: 5,
			},
			{
				questionId: 4,
				quote:
					'"We are only as strong as we are united, as weak as we are divided."',
				question: "Who gave Harry the cake on his Eleventh birthday ?",
				options: [
					{ a: "Hermione Granger", b: "Ronald Weasley", c: "Rubeus Hagrid" },
				],
				correctAns: "Rubeus Hagrid",
				isCorrect: true,
				points: 5,
			},
			{
				questionId: 5,
				quote:
					'"Differences of habit and language are nothing at all if our aims are identical and our hearts are open"',
				question: "What was the name of Harry Potter's cousin ?",
				options: [{ a: "Fred", b: "Dudley", c: "George" }],
				correctAns: "Dudley",
				isCorrect: true,
				points: 5,
			},
		],
	},
	{
		id: 2,
		image: "../Assets/precious.jpg",
		category: "Lord of the Rings",
		bodyText: "	Not All Those who Wander are Lost. -Bilbo Baggins.",
	},
];

export default Categories;
