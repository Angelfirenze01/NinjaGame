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
var $start = document.getElementById("start");
var $form = document.getElementById("answer");

// Event listeners //
$start.addEventListener('click', function() { play(quiz) }, false);

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

// play(quiz);

// these functions help us to hide or display element //
function hide(element) {
	element.style.display = "none";
}

function show(element) {
	element.style.display = "block";
}

// hide the form at the begining of the game
hide($form);

function play(quiz) {
	// hide button and show form
	hide($start);
	show($form);

	$form.addEventListener('submit', function(e) {
		e.preventDefault();
		check($form[0].value);
	}, false);

	var i = 0;

	chooseQuestion();

	function chooseQuestion() {
		var question = quiz.questions[i].question;
		ask(question);
	}

	function ask(question) {
		update($question, quiz.question + question);
		$form[0].value = "";
		$form[0].focus();
	}

	function check(answer) {
	if (answer === quiz.questions[i].answer) { // quiz[i][1] is the ith answer
		update($feedback, "Correct!", "right");

		score++; // increase score by 1
		update($score, score);
	} else {
		update($feedback, "Wrong!", "wrong");
		}

	i++;
	if (i === quiz.questions.length) {
		gameOver();
	} else {
		chooseQuestion()
	};
	}

	function gameOver() {
	// inform the player that the game has finished and tell them
	// how many points they have scored
	update($question, "Game Over, you scored " + score + " points");
	
	hide($form);
	show($start);
	}
}




