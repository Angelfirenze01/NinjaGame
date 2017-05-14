var quiz = {
	"name":"Super Hero Neme Quiz",
	"description":"How many heroes can you name?",
	"question":"What is the real name of",
	"questions": [
		{ "question":"Superman", "answer":"Clarke Kent" },
		{ "question":"Wonderwoman", "answer":"Dianna Prince" },
		{ "question":"Bataman", "answer":"Bruce Wayne" }
	]
}


var score = 0; // Initialize score

play(quiz);

function play(quiz) {
	// main game loop
	for (var i = 0, question, answer, max=quiz.questions.length; i < max; i++) {

	question = quiz.questions[i].question;
	answer = ask(question);
	check(answer);
	} // end of main game loop

	gameOver();

	function ask(question) {
	return prompt(quiz.question + question);
	}

	function check(answer) {
	if (answer === quiz.questions[i].answer) { // quiz[i][1] is the ith answer
		alert("Correct!");

		score++;
	} else {
		alert("Wrong!");
		}
	}

	function gameOver() {
	// inform the player that the game has finished and tell them
	// how many points they have scored
	alert("Game Over, you scored " + score + " points");
	}
}




