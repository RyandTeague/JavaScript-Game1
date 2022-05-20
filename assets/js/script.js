let pattern = [];
let playerPattern = [];
let score;
let flash;
let good;
let compTurn;
let intervalId;
let win;

const startButton = document.getElementById("gamestart")
const infoButton = document.getElementById('info')
const scoreCounter = document.getElementById('score')
const boxes = document.querySelectorAll('.tile')
const t1 = document.getElementById('1')
const t2 = document.getElementById('2')
const t3 = document.getElementById('3')

function runGame() {
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

function columnOne() {
    if (pattern[flash] == 1) {
        t1.style.backgroundColor = "yellow"
    }
    if (pattern[flash] == 2) {
        t1.style.backgroundColor = "yellow"
    }
    if (pattern[flash] == 3) {
        t1.style.backgroundColor = "yellow"
    }

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

function nextLevel () {
    score += 1;
    scoreCounter.textContent = score;
    const newPattern = [pattern]
    newPattern.push(pathBuild());
    console.log(newPattern)
}

function gameWin() {

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


startButton.addEventListener('click', runGame)

for (const box of boxes) {
    box.addEventListener('click', yellow);
  }