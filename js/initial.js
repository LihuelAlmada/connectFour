/*  In this file, each variable is added with its respective HTML element, 
    and the variable turn is initialized randomly, starts the onclick events 
    and run the goHome function. 
    all variables with HTML in their name, refers to the dom element */
var init = ()=> {
    LSSavedGames = JSON.parse(localStorage['SaveGame'] || '[]');
    turn = Math.random() > 0.5 ? 'blue' : 'green';
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
    Players3 = document.getElementById('Players3');
    contact = document.getElementById('contact');
    home = document.getElementById('home');
    backContact = document.getElementById('backContact');
    backLoad = document.getElementById('backLoad');
    savedGamesHTML = document.getElementById('savedGames');
    load = document.getElementById('load');
    save = document.getElementById('save');
    sendContact = document.getElementById('sendContact');
    contactName = document.getElementById('contactName');
    contactEmail = document.getElementById('contactEmail');
    contactMessage = document.getElementById('contactMessage');
    contactError = document.getElementById('contactError');
    playersNamesHTML = document.getElementById('playersNames');
    backPlayersNames = document.getElementById('backPlayersNames');
    nextPlayersNames = document.getElementById('nextPlayersNames');
    backPlayersNames.onclick = goHome;
    nextPlayersNames.onclick = loadNewGame;
    newGame.onclick = loadNewGame; 
    Players2.onclick = go2PlayersNames;
    Players3.onclick = go3PlayersNames;
    contact.onclick = goContact;
    home.onclick = goHome;
    backContact.onclick = goHome;
    backLoad.onclick = goGame;
    save.onclick = saveGame;
    load.onclick = goLoad;
    sendContact.onclick = validateForm;
    goHome();
}
window.onload = init;