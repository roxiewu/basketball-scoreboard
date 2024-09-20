

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

console.log(typeof(homeScoreEl))

function homeOnePoint(){
    homeScoreEl.innerText = Number(homeScoreEl.innerText) + 1
}

function homeTwoPoint(){
    homeScoreEl.innerText = Number(homeScoreEl.innerText) + 2
}


function homeThreePoint(){
    homeScoreEl.innerText = Number(homeScoreEl.innerText) + 3
}


function guestOnePoint(){
    guestScoreEl.innerText = Number(guestScoreEl.innerText) + 1
}

function guestTwoPoint(){
    guestScoreEl.innerText = Number(guestScoreEl.innerText) + 2
}


function guestThreePoint(){
    guestScoreEl.innerText = Number(guestScoreEl.innerText) + 3
}