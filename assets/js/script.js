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
const t1 = document.getElementById('1')
const t2 = document.getElementById('2')
const t3 = document.getElementById('3')
const t4 = document.getElementById('4')
const t5 = document.getElementById('5')
const t6 = document.getElementById('6')
const t7 = document.getElementById('7')
const t8 = document.getElementById('8')
const t9 = document.getElementById('9')
const t10 = document.getElementById('10')
const t11 = document.getElementById('11')
const t12 = document.getElementById('12')
const t13 = document.getElementById('13')
const t14 = document.getElementById('14')
const t15 = document.getElementById('15')
const t16 = document.getElementById('16')
const t17 = document.getElementById('17')
const t18 = document.getElementById('18')
const t19 = document.getElementById('19')
const t20 = document.getElementById('20')
const t21 = document.getElementById('21')
const t22 = document.getElementById('22')
const t23 = document.getElementById('23')
const t24 = document.getElementById('24')
const t25 = document.getElementById('25')
const t26 = document.getElementById('26')
const t27 = document.getElementById('27')
const t28 = document.getElementById('28')
const t29 = document.getElementById('29')
const t30 = document.getElementById('30')

function runGame() {
    win = false;
    pattern = [];
    playerPattern = [];
    flash = [];
    intervalId = 0;
    score = 0;
    scoreCounter.innerHTML = 1;
    good = true;

    for (var i = 0; i < 10; i++) {
        if (i = 1) {
        pattern.push(Math.floor(Math.random() * 3 + 1))
        }
    }
    console.log(pattern)
}

function pathBuild() {
    if (score = 1) {
        const tiles = [t1, t2, t3];
        const random = tiles[Math.floor(Math.random() * 3 )];
        pattern.push(random)
    } else if (score = 2) {
        const tiles = [t4,t5,t6];
        const random = tiles[Math.floor(Math.random() * 3 )];
        pattern.push(random)
    } else if (score = 3) {
        const tiles = [t7,t8,t9];
        const random = tiles[Math.floor(Math.random() * 3 )];
        pattern.push(random)
    } else if (score = 4) {
        const tiles = [t10,t11,t12];
        const random = tiles[Math.floor(Math.random() * 3 )];
        pattern.push(random)
    } else if (score = 5) {
        const tiles = [t13,t14,t15];
        const random = tiles[Math.floor(Math.random() * 3 )];
        pattern.push(random)
    } else if (score = 6) {
        const tiles = [t16,t17,t18];
        const random = tiles[Math.floor(Math.random() * 3 )];
        pattern.push(random)
    } else if (score = 7) {
        const tiles = [t19,t20,t21];
        const random = tiles[Math.floor(Math.random() * 3 )];
        pattern.push(random)
    } else if (score = 8) {
        const tiles = [t22,t23,t24];
        const random = tiles[Math.floor(Math.random() * 3 )];
        pattern.push(random)
    } else if (score = 9) {
        const tiles = [t25,t26,t27];
        const random = tiles[Math.floor(Math.random() * 3 )];
        pattern.push(random)
    } else if (score = 10) {
        const tiles = [t28,t29,t30];
        const random = tiles[Math.floor(Math.random() * 3 )];
        pattern.push(random)
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


startButton.addEventListener('click', runGame)

t1.addEventListener('click', yellow)
t2.addEventListener('click', yellow)
t3.addEventListener('click', yellow)
t4.addEventListener('click', yellow)
t5.addEventListener('click', yellow)
t6.addEventListener('click', yellow)
t7.addEventListener('click', yellow)
t8.addEventListener('click', yellow)
t9.addEventListener('click', yellow)
t9.addEventListener('click', yellow)
t10.addEventListener('click', yellow)
t11.addEventListener('click', yellow)
t12.addEventListener('click', yellow)
t13.addEventListener('click', yellow)
t14.addEventListener('click', yellow)
t15.addEventListener('click', yellow)
t16.addEventListener('click', yellow)
t17.addEventListener('click', yellow)
t18.addEventListener('click', yellow)
t19.addEventListener('click', yellow)
t20.addEventListener('click', yellow)
t21.addEventListener('click', yellow)
t22.addEventListener('click', yellow)
t23.addEventListener('click', yellow)
t24.addEventListener('click', yellow)
t25.addEventListener('click', yellow)
t26.addEventListener('click', yellow)
t27.addEventListener('click', yellow)
t28.addEventListener('click', yellow)
t29.addEventListener('click', yellow)
t30.addEventListener('click', yellow)