let pattern = [];
let playerPattern = [];
let score = 0;
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
    console.log("you pressed the start button")
}

function pathBuild() {
    if (score = 1) {
        const tiles = ['1', '2', '3'];
        const random = tiles[Math.floor(Math.random() * 3 )];
        return random;
    } else if (score = 2) {
        const tiles = ['4', '5', '6'];
        const random = tiles[Math.floor(Math.random() * 3 )];
        return random;
    } else if (score = 3) {
        const tiles = ['7', '8', '9'];
        const random = tiles[Math.floor(Math.random() * 3 )];
        return random;
    } else if (score = 4) {
        const tiles = ['10', '11', '12'];
        const random = tiles[Math.floor(Math.random() * 3 )];
        return random;
    } else if (score = 5) {
        const tiles = ['13', '14', '15'];
        const random = tiles[Math.floor(Math.random() * 3 )];
        return random;
    } else if (score = 6) {
        const tiles = ['16', '17', '18'];
        const random = tiles[Math.floor(Math.random() * 3 )];
        return random;
    } else if (score = 7) {
        const tiles = ['19', '20', '21'];
        const random = tiles[Math.floor(Math.random() * 3 )];
        return random;
    } else if (score = 8) {
        const tiles = ['22', '23', '24'];
        const random = tiles[Math.floor(Math.random() * 3 )];
        return random;
    } else if (score = 9) {
        const tiles = ['25', '26', '27'];
        const random = tiles[Math.floor(Math.random() * 3 )];
        return random;
    } else if (score = 10) {
        const tiles = ['28', '29', '30'];
        const random = tiles[Math.floor(Math.random() * 3 )];
        return random;
    }
}

function nextLevel () {
    ++score;

    const newPattern = [sequence]
    newPattern.push(pathBuild());
}

function gameWin() {

}

function turnOn() {
    this.classList.add("activated")
}


t1.addEventListener('click', turnOn())