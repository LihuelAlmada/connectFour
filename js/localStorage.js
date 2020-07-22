var LSSavedGames = [];
var saveGame = function() {
    LSSavedGames.push({turn,acumSP1,acumMP1,acumSP2,acumMP2,boardArray})
    localStorage.setItem("SaveGame", JSON.stringify(LSSavedGames));
}
var loadGame = function(e) {
    var loadId = e.target.id.substr(4, 1);
    loadLocalStorage = JSON.parse(localStorage["SaveGame"]);
    boardArray = loadLocalStorage[loadId].boardArray;
    turn = loadLocalStorage[loadId].turn;
    acumSP1 = loadLocalStorage[loadId].acumSP1;
    acumMP1 = loadLocalStorage[loadId].acumMP1;
    acumSP2 = loadLocalStorage[loadId].acumSP2;
    acumMP2 = loadLocalStorage[loadId].acumMP2;
    timeSP2HTML.innerHTML = acumSP2;
    timeMP2HTML.innerHTML = acumMP2;
    timeSP1HTML.innerHTML = acumSP1;
    timeMP1HTML.innerHTML = acumMP1;
    goGame();
}
