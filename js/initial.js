var timeP1HTML = null,
    timeP2HTML = null,
    timeMP1HTML = null,
    timeSP1HTML = null,
    timeMP2HTML = null,
    timeSP2HTML = null,
    winHTML = null,
    winDescHTML = null;
var init = function () {
    turn = turn = Math.random() > 0.5 ? 'blue' : 'green';
    boardHTML = document.getElementById('board');
    winHTML = document.getElementById('winText');
    winDescHTML = document.getElementById('winDescription');
    newGame = document.getElementById('newGame');
    timeP1HTML = document.getElementById('timeP1');
    timeP2HTML = document.getElementById('timeP2');
    timeMP1HTML = document.getElementById('timeMP1');
    timeSP1HTML = document.getElementById('timeSP1');
    timeMP2HTML = document.getElementById('timeMP2');
    timeSP2HTML = document.getElementById('timeSP2');
    Players2 = document.getElementById('Players2');
    contact = document.getElementById('contact');
    home = document.getElementById('home');
    back = document.getElementById('back');
    newGame.onclick = goHome;
    Players2.onclick = goGame;
    contact.onclick = goContact;
    home.onclick = goHome;
    back.onclick = goHome;
    goHome();
}
window.onload = init;