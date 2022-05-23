let pattern = [];
let playerPattern = [];
let score;
let flash;
let good;
let compTurn;
let intervalId;
let win;
let normal;
let secret;

const startButton = document.getElementById("gamestart")
const infoButton = document.getElementById('info')
const scoreCounter = document.getElementById('score')
const bestScore = document.getElementById('bestscore')
const boxes = document.querySelectorAll('.tile')
const lop = document.getElementById("lopmode")
const background = document.getElementsByClassName('game-area')


function runGame() {
    normal = true;
    visible()
    win = false;
    cantClick()
    pattern = [];
    playerPattern = [];
    flash = 0;
    intervalId = 0;
    score = 1;
    scoreCounter.innerHTML = 0;
    good = true;

    for (var i = 0; i < 10; i++) {
        pathBuild(i)
    };
    compTurn = true;
    intervalId = setInterval(gameTurn, 800)
}

function gameTurn() {
    if (flash == score) {
        clearInterval(intervalId);
        compTurn = false;
        clearBox();
        canClick();
    }

    if (compTurn) {
        cantClick()
        clearBox();
        setTimeout(() => {
            anim();
            flash++
        }, 200)
    }
}

function anim() {
    let tile = document.getElementById(`${pattern[flash]}`)
    tile.classList.add('activated')
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

function check() {
        if (playerPattern[playerPattern.length - 1] !== pattern[playerPattern.length - 1])
            good = false;

        if (playerPattern.length == 10 && good) {
            gameWin()
        };

        if (good == false) {
            gameLose()
        }

        if (score == playerPattern.length && good && !win) {
            score++;
            scoreCounter.innerHTML = score - 1
            playerPattern = [];
            compTurn = true;
            flash = 0;
            intervalId = setInterval(gameTurn, 800)
        }
}


/* generates a random number 10 times, each time changing the range by 3
 * to create a number for each row of the path
 */
function pathBuild(i) {
    if (i < 1) {
        pattern.push(Math.floor(Math.random() * 3 + 1))
    } else if (i < 2) {
        pattern.push(Math.floor(Math.random() * 3 + 4))
    } else if (i < 3) {
        pattern.push(Math.floor(Math.random() * 3 + 7))
    } else if (i < 4) {
        pattern.push(Math.floor(Math.random() * 3 + 10))
    } else if (i < 5) {
        pattern.push(Math.floor(Math.random() * 3 + 13))
    } else if (i < 6) {
        pattern.push(Math.floor(Math.random() * 3 + 16))
    } else if (i < 7) {
        pattern.push(Math.floor(Math.random() * 3 + 19))
    } else if (i < 8) {
        pattern.push(Math.floor(Math.random() * 3 + 22))
    } else if (i < 9) {
        pattern.push(Math.floor(Math.random() * 3 + 25))
    } else if (i < 10) {
        pattern.push(Math.floor(Math.random() * 3 + 27))
    }
}

function gameWin() {
    alert("you win");
    cantClick();
    win = true;
    lop.style.opacity = "100"
    lop.classList.remove('unclickable')
    setTimeout(() => {
        for (box of boxes) {
            clearBox()
        }
    }, 1600);
}

function gameLose() {
    alert("you lose")
    if (bestScore.innerHTML < scoreCounter.innerHTML) {
        bestScore.innerHTML = scoreCounter.innerHTML
    }
    scoreCounter.innerHTML = 0
    for (i = 0; i < playerPattern.length; i++) {
        let wrong = document.getElementById(`${pattern[i]}`)
        wrong.style.backgroundColor = "red"
    }
    cantClick()
    setTimeout(() => {
        for (box of boxes) {
            box.style.backgroundColor = "white"
        }
    }, 1600);
    clearBox()
}

function yellow() {
    if (this.classList.contains("activated")) {
        this.classList.remove("activated")
    } else {
        this.classList.add("activated")
    }
}

function clearBox() {
    for (const box of boxes) {
        box.classList.remove('activated');
    }
}

function invisible() {
    for (const box of boxes) {
        box.classList.add('invisible');
    }
}

function visible() {
    for (const box of boxes) {
        box.classList.remove('invisible');
    }
}

function gameOver() {
    t10.innerHTML = "G"
    t13.innerHTML = "A"
    t16.innerHTML = "M"
    t19.innerHTML = "E"
    t11.innerHTML = "O"
    t14.innerHTML = "V"
    t17.innerHTML = "E"
    t20.innerHTML = "R"
}

//canClick()

startButton.addEventListener('click', runGame)

for (const box of boxes) {
    box.addEventListener('click', (event) => {
        if (playerPattern.indexOf(event.target.id) != -1) {
            return;
        };
        playerPattern.push(parseInt(event.target.id));
        if (normal) {
        check();
        } else {
            checkLop()
        }
        if (!win) {
            setTimeout(() => {
            }, 300)
        }
    });
}

for (const box of boxes) {
    box.addEventListener('click', yellow)
}


function playerPath() {
    playerPattern.push(this.id)
}


// Secret Mode
lop.addEventListener('click', runLopGame)

function runLopGame() {
    normal = false;
    visible()
    win = false;
    cantClick()
    pattern = [];
    playerPattern = [];
    flash = 0;
    intervalId = 0;
    score = 1;
    scoreCounter.innerHTML = 0;
    good = true;

    for (var i = 0; i < 10; i++) {
        pathBuild(i)
    };
    compTurn = true;
    intervalId = setInterval(gameTurnLop, 800)
}

function gameTurnLop() {
    if (flash == score) {
        clearInterval(intervalId);
        compTurn = false;
        clearBox();
        canClick();
        invisible()
    }

    if (compTurn) {
        visible()
        cantClick()
        clearBox();
        setTimeout(() => {
            anim();
            flash++
        }, 200)
    }
}

function checkLop() {
    if (playerPattern[playerPattern.length - 1] !== pattern[playerPattern.length - 1])
            good = false;

        if (playerPattern.length == 10 && good) {
            gameWin()
        };

        if (good == false) {
            gameLose()
        }

        if (score == playerPattern.length && good && !win) {
            score++;
            scoreCounter.innerHTML = score - 1
            playerPattern = [];
            compTurn = true;
            flash = 0;
            intervalId = setInterval(gameTurnLop, 800)
            invisible()
        }
}