/*this file controll all windows*/
var goHome = ()=> {
	document.getElementsByClassName('main')[0].style.display = 'none';
	document.getElementsByClassName('footer')[0].style.display = 'none';
	document.getElementById('contactWindow').style.display= 'none';
	document.getElementById('winWindows').style.display= 'none';
	document.getElementById('loadWindows').style.display= 'none';
	document.getElementById('playersNamesWindow').style.display= 'none';
	document.getElementById('SaveWindows').style.display= 'none';
	document.getElementById('initialWindow').style.display= 'flex';
	stopChronometer();
}
var goContact = ()=> {
	document.getElementById('initialWindow').style.display= 'none';
	document.getElementById('contactWindow').style.display= 'flex';
}
var goGame = ()=> {
	document.getElementById('initialWindow').style.display= 'none';
	document.getElementById('playersNamesWindow').style.display= 'none';
	document.getElementById('loadWindows').style.display= 'none';
	document.getElementById('winWindows').style.display= 'none';
	document.getElementById('playersNamesWindow').style.display= 'none';
	document.getElementById('contactWindow').style.display= 'none';
	document.getElementById('SaveWindows').style.display= 'none';
	document.getElementsByClassName('main')[0].style.display = 'flex';
	document.getElementsByClassName('footer')[0].style.display = 'flex';
	noMoreTiles = false;
	renderBoard();
	stopChronometer();
}
var goWin = ()=> {
	document.getElementById('initialWindow').style.display= 'none';
	document.getElementById('playersNamesWindow').style.display= 'none';
	document.getElementById('loadWindows').style.display= 'none';
	document.getElementsByClassName('main')[0].style.display = 'none';
	document.getElementsByClassName('footer')[0].style.display = 'none';
	document.getElementById('playersNamesWindow').style.display= 'none';
	document.getElementById('SaveWindows').style.display= 'none';
	document.getElementById('winWindows').style.display= 'flex';
}
var goLoad = ()=> {
	document.getElementsByClassName('main')[0].style.display = 'none';
	document.getElementsByClassName('footer')[0].style.display = 'none';
	document.getElementById('loadWindows').style.display= 'flex';
	noMoreTiles = false;
	renderLoad();
}
var go2PlayersNames = ()=> {
	document.getElementById('initialWindow').style.display= 'none';
	document.getElementById('playersNamesWindow').style.display= 'flex';
	players = 2;
	renderPlayersNames();
	renderTurn();
}
var go3PlayersNames = ()=> {
	document.getElementById('initialWindow').style.display= 'none';
	document.getElementById('playersNamesWindow').style.display= 'flex';
	players = 3;
	renderPlayersNames();
	renderTurn();
}
var goSave = ()=> {
	document.getElementsByClassName('main')[0].style.display = 'none';
	document.getElementsByClassName('footer')[0].style.display = 'none';
	document.getElementById('SaveWindows').style.display= 'flex';
	saveGame();
}

