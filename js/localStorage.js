var LSSavedGames = [];
var saveGame = function() {
    LSSavedGames.push({turn,acumSP1,acumMP1,acumSP2,acumMP2,boardArray})
    localStorage.setItem("SaveGame", JSON.stringify(LSSavedGames))
}


