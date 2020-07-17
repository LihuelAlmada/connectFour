var boardHTML = null,
    timeP1HTML = null,
    timeP2HTML = null,
    timeMP1HTML = null,
    timeSP1HTML = null,
    timeMP2HTML = null,
    timeSP2HTML = null,
    boardArray = [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        ];

var init = function () {
    console.log('Initial');
    boardHTML = document.getElementById('board');
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
}
window.onload = init;