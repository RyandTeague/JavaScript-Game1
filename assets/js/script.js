// Defining Variables

let pattern = [];
let playerPattern = [];
let score;
let flash;
let good;
let compTurn;
let intervalId;
let win;
let normal;

const startButton = document.getElementById("gamestart");
const scoreCounter = document.getElementById('score');
const bestScore = document.getElementById('bestscore');
const boxes = document.querySelectorAll('.tile');
const lop = document.getElementById("lopmode");
const background = document.getElementById('background');
const info = document.getElementById('info');
const instructions = document.getElementById('instructions');
const window1 = document.getElementById('win');
const window2 = document.getElementById('lose');

// Functions

//This function is activated when the Play button is pressed and starts the game by resetting values and running other functions
function runGame() {
	background.style.backgroundImage = "URL('assets/images/background-1.png')";
	normal = true;
	visible();
	win = false;
	cantClick();
	pattern = [];
	playerPattern = [];
	flash = 0;
	intervalId = 0;
	score = 1;
	scoreCounter.innerHTML = 0;
	good = true;

	for (var i = 0; i < 10; i++) {
		pathBuild(i);
	}
	compTurn = true;
	intervalId = setInterval(gameTurn, 800);
}


//This function sets the rules for the player's actions on the their's and the computer's turn
function gameTurn() {
	if (flash == score) {
		clearInterval(intervalId);
		compTurn = false;
		clearBox();
		canClick();
	}

	if (compTurn) {
		cantClick();
		clearBox();
		setTimeout(() => {
			anim();
			flash++;
		}, 200);
	}
}

// This function turns whichever tile is next in the array to yellow depending on how many in the sequence have flashed so far
function anim() {
	let tile = document.getElementById(`${pattern[flash]}`);
	tile.classList.add('activated');
}

/* removes the unclickable class from the tiles so they can be interacted with by the Player */
function canClick() {
	for (const box of boxes) {
		box.classList.remove('unclickable');
	}
}

/* adds the unclickable class from the tiles so they cannot be interacted with by the Player */
function cantClick() {
	for (const box of boxes) {
		box.classList.add('unclickable');
	}
}

//This checks whether the player's input matches the correct answer and if they have won or lost the game with that answer
function check() {
	if (playerPattern[playerPattern.length - 1] !== pattern[playerPattern.length - 1])
		good = false;

	if (playerPattern.length == 2 && good) {
		gameWin();
	}

	if (good == false) {
		gameLose();
	}

	if (score == playerPattern.length && good && !win) {
		score++;
		scoreCounter.innerHTML = score - 1;
		playerPattern = [];
		compTurn = true;
		flash = 0;
		intervalId = setInterval(gameTurn, 800);
	}
}


/* generates a random number 10 times, each time changing the range by 3
 * to create a number for each row of the path
 */
function pathBuild(i) {
	if (i < 1) {
		pattern.push(Math.floor(Math.random() * 3 + 1));
	} else if (i < 2) {
		pattern.push(Math.floor(Math.random() * 3 + 4));
	} else if (i < 3) {
		pattern.push(Math.floor(Math.random() * 3 + 7));
	} else if (i < 4) {
		pattern.push(Math.floor(Math.random() * 3 + 10));
	} else if (i < 5) {
		pattern.push(Math.floor(Math.random() * 3 + 13));
	} else if (i < 6) {
		pattern.push(Math.floor(Math.random() * 3 + 16));
	} else if (i < 7) {
		pattern.push(Math.floor(Math.random() * 3 + 19));
	} else if (i < 8) {
		pattern.push(Math.floor(Math.random() * 3 + 22));
	} else if (i < 9) {
		pattern.push(Math.floor(Math.random() * 3 + 25));
	} else if (i < 10) {
		pattern.push(Math.floor(Math.random() * 3 + 27));
	}
}


//When the game is won this function causes the pop up window to appear and changes the background image, it also checks which game mode is being played
function gameWin() {
	if (normal) {
		window1.style.display = "block";
		visible();
		background.style.backgroundImage = "URL('assets/images/background-2.png')";
		cantClick();
		win = true;
		lop.style.opacity = "100";
		lop.classList.remove('unclickable');
		setTimeout(() => {
			for (const box of boxes) {
				clearBox();
			}
		}, 1600);
	} else {
		window1.style.display = "block";
		visible();
		background.style.backgroundImage = "URL('assets/images/background-4.png')";
		cantClick();
		win = true;
		lop.style.opacity = "100";
		lop.classList.remove('unclickable');
		setTimeout(() => {
			for (const box of boxes) {
				clearBox();
			}
		}, 1600);
	}
}

//When the game is lost this function causes the pop up window to appear and shows the correct tile the player should have chosen
function gameLose() {
	window2.style.display = "block";
	visible();
	if (bestScore.innerHTML < scoreCounter.innerHTML) {
		bestScore.innerHTML = scoreCounter.innerHTML;
	}
	scoreCounter.innerHTML = 0;
	for (var i = 0; i < playerPattern.length; i++) {
		let wrong = document.getElementById(`${pattern[i]}`);
		wrong.classList.add("wrong");
	}
	cantClick();
	setTimeout(() => {
		for (const box of boxes) {
			clearWrong();
			clearBox();
		}
	}, 1600);
}

//This function is called when a player clicks a tile on their turn to turn it yellow
function yellow() {
	if (this.classList.contains("activated")) {
		this.classList.remove("activated");
	} else {
		this.classList.add("activated");
	}
}

//This function is used to clear the color yellow from all the tiles 
function clearBox() {
	for (const box of boxes) {
		box.classList.remove('activated');
	}
}

//This is used to clear the color red from tiles
function clearWrong() {
	for (const box of boxes) {
		box.classList.remove('wrong');
	}
}

// Function below will hide the win, loss and How to Play windows when they are clicked
function hide() {
	if (this.style.display !== "none") {
		this.style.display = "none";
	} else {
		this.style.display = "block";
	}
}


// Adds event listeners to all game tiles to add their selection to the player's array and then run the check function to see if they've won,lost or keep playing
for (const box of boxes) {
	box.addEventListener('click', (event) => {
		if (playerPattern.indexOf(event.target.id) != -1) {
			return;
		}
		playerPattern.push(parseInt(event.target.id));
		if (normal) {
			check();
		} else {
			checkLop();
		}
		if (!win) {
			setTimeout(() => {}, 300);
		}
	});
}

//adds event listeners to all the game tiles to make them turn yellow when clicked on the player's turn
for (const box of boxes) {
	box.addEventListener('click', yellow);
}

//Pressing the Play! button starts the game
startButton.addEventListener('click', runGame);

//Pressing the Leap of Faith button starts the alternative game
lop.addEventListener('click', runLopGame);

//Allows the pop up boxes to be closed by clicking them and the instructions for play to be opened by the information button
instructions.onclick = hide;
window1.onclick = hide;
window2.onclick = hide;
info.onclick = function() {
	instructions.style.display = "block";
};

// After the player has beaten the game they can click another button to run a different version where the tiles arn't visible during their turn
// these are alternative versions of the above functions to run the game
function runLopGame() {
	background.style.backgroundImage = "URL('assets/images/background-3.png')";
	normal = false;
	win = false;
	cantClick();
	pattern = [];
	playerPattern = [];
	flash = 0;
	intervalId = 0;
	score = 1;
	scoreCounter.innerHTML = 0;
	good = true;

	for (var i = 0; i < 10; i++) {
		pathBuild(i);
	}
	compTurn = true;
	intervalId = setInterval(gameTurnLop, 800);
}

function gameTurnLop() {
	if (flash == score) {
		clearInterval(intervalId);
		compTurn = false;
		clearBox();
		canClick();
		invisible();
	}

	if (compTurn) {
		visible();
		cantClick();
		clearBox();
		setTimeout(() => {
			anim();
			flash++;
		}, 200);
	}
}

function checkLop() {
	if (playerPattern[playerPattern.length - 1] !== pattern[playerPattern.length - 1])
		good = false;

	if (playerPattern.length == 10 && good) {
		gameWin();
	}

	if (good == false) {
		gameLose();
	}

	if (score == playerPattern.length && good && !win) {
		score++;
		scoreCounter.innerHTML = score - 1;
		playerPattern = [];
		compTurn = true;
		flash = 0;
		intervalId = setInterval(gameTurnLop, 800);
		invisible();
	}
}

//This function makes all the tiles invisible but still interactable
function invisible() {
	for (const box of boxes) {
		box.classList.add('invisible');
	}
}

//This function makes all the tiles visible
function visible() {
	for (const box of boxes) {
		box.classList.remove('invisible');
	}
}