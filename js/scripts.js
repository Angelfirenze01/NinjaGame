var quiz = [
	["What is Superman's real name?", "Clarke Kent"],
	["What is Wonderwoman's real name?", "Dianna Prince"],
	["What is Bataman's real name?", "Bruce Wayne"],
];

var score = 0; // Initialize score

play(quiz);

function play(quiz) {
	// main game loop
	for (var i = 0, question, answer, max=quiz.length; i < max; i++) {

	question = quiz[i][0];
	answer = ask(question);
	check(answer);
	} // end of main game loop
	gameOver();
}

function ask(question) {
	return prompt(question);
}

function check(answer) {
	if (answer === quiz[i][1]) { // quiz[i][1] is the ith answer
		alert("Correct!");

		score++;
	} else {
		alert("Wrong!");
	}
}

function gameOver() {
	// inform the player that the game has finished and tell them
	// how many points they have scored
	alert("Game Over, you scored " + score + "points");

}

