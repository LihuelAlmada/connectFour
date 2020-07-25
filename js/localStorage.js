var LSSavedGames = [];
var saveGame = ()=> {
    LSSavedGames.push({turn,acumSP1,acumMP1,acumSP2,acumMP2,boardArray,playerName1Value,playerName2Value,players,acumSP3,acumMP3,playerName3Value})
    localStorage.setItem("SaveGame", JSON.stringify(LSSavedGames));
}
var loadGame = (e)=> {
    var loadId = e.target.id.substr(4, 1);
    loadLocalStorage = JSON.parse(localStorage["SaveGame"]);
    players = loadLocalStorage[loadId].players;
    renderTurn();
    boardArray = loadLocalStorage[loadId].boardArray;
    turn = loadLocalStorage[loadId].turn;
    timeP1HTML = document.getElementById('timeP1');
    timeP2HTML = document.getElementById('timeP2');
    timeMP1HTML = document.getElementById('timeMP1');
    timeSP1HTML = document.getElementById('timeSP1');
    timeMP2HTML = document.getElementById('timeMP2');
    timeSP2HTML = document.getElementById('timeSP2');
    PlayerName1TurnHTML = document.getElementById('PlayerName1Turn');
    PlayerName2TurnHTML = document.getElementById('PlayerName2Turn');
    acumSP1 = loadLocalStorage[loadId].acumSP1;
    acumMP1 = loadLocalStorage[loadId].acumMP1;
    acumSP2 = loadLocalStorage[loadId].acumSP2;
    acumMP2 = loadLocalStorage[loadId].acumMP2;
    playerName1Value = loadLocalStorage[loadId].playerName1Value;
    playerName2Value = loadLocalStorage[loadId].playerName2Value;
    timeSP2HTML.innerHTML = acumSP2;
    timeMP2HTML.innerHTML = acumMP2;
    timeSP1HTML.innerHTML = acumSP1;
    timeMP1HTML.innerHTML = acumMP1;
    PlayerName1TurnHTML.innerHTML = playerName1Value;
    PlayerName2TurnHTML.innerHTML = playerName2Value;
    timeP1HTML.style.background = 'black';
    timeP2HTML.style.background = 'black';
    if(players == 3) {
        timeP3HTML = document.getElementById('timeP3');
        timeMP3HTML = document.getElementById('timeMP3');
        timeSP3HTML = document.getElementById('timeSP3');
        PlayerName3TurnHTML = document.getElementById('PlayerName3Turn');
        playerName3 = document.getElementById('playerName3');
        acumSP3 = loadLocalStorage[loadId].acumSP3;
        acumMP3 = loadLocalStorage[loadId].acumMP3;
        playerName3Value = loadLocalStorage[loadId].playerName3Value;
        timeSP3HTML.innerHTML = acumSP3;
        timeMP3HTML.innerHTML = acumMP3;
        PlayerName3TurnHTML.innerHTML = playerName3Value;
        timeP3HTML.style.background = 'black';
    }
    if(turn == 'blue') {
        timeP1HTML.style.background = '#4684F8';
    }else if(turn == 'green') {
        timeP2HTML.style.background = '#52EE5A';
    }else {
        timeP3HTML.style.background = '#d44931';
    }
    goGame();
}
