export const Categories = [
	{
		id: "1",
		font: "hp-font",
		image: "../Assets/hp.jpg",
		categoryName: "Harry Potter",
		bodyText:
			"MR H POTTER,The Cupboard under the Stairs, 4 Privet Drive, Little Whinging,Surrey",

		questions: [
			{
				questionId: 1,
				category: "Harry Potter",
				quote:
					'"It is our choices, that show what we truly are, far more than our abilities"',
				question: "What was the name of Harry Potter's pet ?",
				options: ["Dobby", "Hedwig", "Scabbers"],
				isCorrect: true,
				points: 10,
				correctAns: "Hedwig",
			},
			{
				questionId: 2,
				category: "Harry Potter",
				quote:
					'"If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals"',
				question: "Who was the Godfather of Harry Potter ?",
				options: ["Prof. Severus Snape", "James Potter", "Sirius Black"],
				correctAns: "Sirius Black",
				isCorrect: true,
				points: 10,
			},
			{
				questionId: 3,
				category: "Harry Potter",
				quote:
					'"Things we lose have a way of coming back to us in the end, if not always in the way we expect"',
				question:
					"Which one of the following was not the Harry Potter's best friend ?",
				options: ["Ronald Weasley", "Draco Malfoy", "Hermione Granger"],
				correctAns: "Draco Malfoy",
				isCorrect: true,
				points: 10,
			},
			{
				questionId: 4,
				category: "Harry Potter",
				quote:
					'"We are only as strong as we are united, as weak as we are divided."',
				question: "Who gave Harry the cake on his Eleventh birthday ?",
				options: ["Hermione Granger", "Ronald Weasley", "Rubeus Hagrid"],
				correctAns: "Rubeus Hagrid",
				isCorrect: true,
				points: 10,
			},
			{
				questionId: 5,
				category: "Harry Potter",
				quote:
					'"Differences of habit and language are nothing at all if our aims are identical and our hearts are open"',
				question: "What was the name of Harry Potter's cousin ?",
				options: ["Fred", "Dudley", "George"],
				correctAns: "Dudley",
				isCorrect: true,
				points: 10,
			},
		],
	},
	{
		id: "2",
		image: "../Assets/precious.jpg",
		font: "lord-font",
		categoryName: "Lord of the Rings",
		bodyText: "	Not All Those who Wander are Lost. -Bilbo Baggins.",
		questions: [
			{
				questionId: 1,
				category: "Lord of the Rings",
				quote:
					'"All we have to decide is what to do with the time that is given us"',
				question:
					"The Lord of the Rings films are based on a novel written by which author?",
				options: ["J. R. R. Tomkin", "J. R. R. Tolkien", "J. K. Rowling"],
				isCorrect: true,
				points: 10,
				correctAns: "J. R. R. Tolkien",
			},
			{
				questionId: 2,
				category: "Lord of the Rings",
				quote:
					'"If more of us valued food and cheer and song above hoarded gold, it would be a merrier world"',
				question:
					" What is the name of the giant spider who tried to eat Frodo?",
				options: ["Ungoliant", "Balrog", "Shelob"],
				correctAns: "Shelob",
				isCorrect: true,
				points: 10,
			},
			{
				questionId: 3,
				category: "Lord of the Rings",
				quote:
					'"It is useless to meet revenge with revenge: it will heal nothing"',
				question: "What colour is Bilbo Baggins’ door?",
				options: ["Green", "Wooden", "Blue"],
				correctAns: "Green",
				isCorrect: true,
				points: 10,
			},
			{
				questionId: 4,
				category: "Lord of the Rings",
				quote:
					'"It is not the strength of the body, but the strength of the spirit"',
				question: "Who finally slays the witch-king?",
				options: ["Sam", "Éowyn", "Merry"],
				correctAns: "Éowyn",
				isCorrect: true,
				points: 10,
			},
			{
				questionId: 5,
				category: "Lord of the Rings",
				quote: '"Even the smallest person can change the course of history"',
				question: "What type of animal does Gollum give to Frodo?",
				options: ["A rabbit", "A mouse", "A rat"],
				correctAns: "A rabbit",
				isCorrect: true,
				points: 10,
			},
		],
	},
];

export default Categories;
