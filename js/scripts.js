/// view functions ///
function update (element, content, klass) {
	var p = element.firstChild || document.createElement("p");
	p.textContent = content;
	element.appendChild(p);
	if (klass) {
		p.className = klass;
	};
}

//// dom references ///
var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedback = document.getElementById("feedback");

var quiz = {
	"name":"Super Hero Neme Quiz",
	"description":"How many heroes can you name?",
	"question":"What is the real name of ",
	"questions": [
		{ "question":"Superman", "answer":"Clarke Kent" },
		{ "question":"Wonderwoman", "answer":"Dianna Prince" },
		{ "question":"Bataman", "answer":"Bruce Wayne" }
	]
}


var score = 0; // Initialize score

update($score, score);

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
		update($question, quiz.question + question);
		return prompt("Enter your answer:");
	}

	function check(answer) {
	if (answer === quiz.questions[i].answer) { // quiz[i][1] is the ith answer
		update($feedback, "Correct!", "right");

		score++; // increase score by 1
		update($score, score);
	} else {
		update($feedback, "Wrong!", "wrong");
		}
	}

	function gameOver() {
	// inform the player that the game has finished and tell them
	// how many points they have scored
	update($question, "Game Over, you scored " + score + " points");
	}
}




