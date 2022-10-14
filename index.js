let teamOneScore = document.getElementById("team1")
let teamTwoScore = document.getElementById("team2")
let teamOne = 0
let teamTwo = 0

function add1() {
    teamOne += 1
    teamOneScore.textContent = teamOne
}
function add2() {
    teamOne += 2
    teamOneScore.textContent = teamOne
}
function add3() {
    teamOne += 3
    teamOneScore.textContent = teamOne
}
function addO1() {
    teamTwo += 1
    teamTwoScore.textContent = teamTwo
}
function addO2() {
    teamTwo += 2
    teamTwoScore.textContent = teamTwo
}
function addO3() {
    teamTwo += 3
    teamTwoScore.textContent = teamTwo
}

function reset() {
    teamOne = 0
    teamTwo = 0
    teamTwoScore.textContent = 0
    teamOneScore.textContent = 0
}