/*this file controll all windows*/
var goHome = ()=> {
	document.getElementsByClassName('main')[0].style.display = 'none';
	document.getElementsByClassName('footer')[0].style.display = 'none';
	document.getElementById('contactWindow').style.display= 'none';
	document.getElementById('winWindows').style.display= 'none';
	document.getElementById('loadWindows').style.display= 'none';
	document.getElementById('initialWindow').style.display= 'flex';
}
var goContact = ()=> {
	document.getElementById('contactWindow').style.display= 'flex';
	document.getElementById('initialWindow').style.display= 'none';
}
var goGame = ()=> {
	document.getElementsByClassName('main')[0].style.display = 'flex';
	document.getElementsByClassName('footer')[0].style.display = 'flex';
	document.getElementsByClassName('window')[0].style.display = 'none';
	document.getElementById('loadWindows').style.display= 'none';
	document.getElementById('winWindows').style.display= 'none';
	renderBoard();
}
var goWin = ()=> {
	document.getElementsByClassName('main')[0].style.display = 'none';
	document.getElementsByClassName('footer')[0].style.display = 'none';
	document.getElementById('winWindows').style.display= 'flex';
}

var goLoad = ()=> {
	document.getElementsByClassName('main')[0].style.display = 'none';
	document.getElementsByClassName('footer')[0].style.display = 'none';
	document.getElementById('loadWindows').style.display= 'flex';
	renderLoad();
}

