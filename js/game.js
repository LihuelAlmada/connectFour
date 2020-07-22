//  all variables with HTML in their name, refers to the dom element
var turn = 'blue',
    acumSP1 = 0,
    acumMP1 = 0,
    acumSP2 = 0,
    acumMP2 = 0,
    ChronometerP1,
    ChronometerP2,
    savedGamesHTML = null,
    buttonLoadHTML = null,
    timeP1HTML = null,
    timeP2HTML = null,
    timeMP1HTML = null,
    timeSP1HTML = null,
    timeMP2HTML = null,
    timeSP2HTML = null;
//  Stop all Chronometers
var stopChronometer = function(){
    clearInterval(ChronometerP1);
    clearInterval(ChronometerP2);
}
//  Star the Chronometer, depending on the turn
var startChronometer = function(){
    if(turn === 'blue'){
        ChronometerP1 = setInterval(
        function(){
            if (acumSP1 == 60){
                acumSP1 = 0;
                acumMP1++;
                timeMP1HTML.innerHTML = acumMP1;
            }
            timeSP1HTML.innerHTML = acumSP1;
            acumSP1++;
        },1000);
    }else if (turn === 'green'){
        ChronometerP2 = setInterval(
        function(){
            if (acumSP2 == 60){
                acumSP2 = 0;
                acumMP2++;
                timeMP2HTML.innerHTML = acumMP2;
            }
            timeSP2HTML.innerHTML = acumSP2;
            acumSP2++;
        },1000);
    }
}
var toggleTurn = function(){
    stopChronometer();
    if(turn === 'blue'){
        turn='green';
        timeP2HTML.style.background = '#52EE5A';
        timeP1HTML.style.background = 'black';
    }else{
        turn='blue';
        timeP1HTML.style.background = '#4684F8';
        timeP2HTML.style.background = 'black';
    }
    startChronometer();
}

var buttonLoadHandler = function (){
    buttonLoadHTML = document.getElementsByClassName('buttonLoad');
    for (var i = 0; i < buttonLoadHTML.length; i++){
        buttonLoadHTML[i].onclick = loadGame;
    }
}
//  load the saved games
//  generates HTML content in the window
var renderLoad = function(){ 
    var html = '';
    for (var i = 0; i < LSSavedGames.length; i++){
        html += '<div id="load' + i + '" class="buttonWindow buttonLoad">' + i + '</div>';
    }
    savedGamesHTML.innerHTML = html;
    buttonLoadHandler();
}