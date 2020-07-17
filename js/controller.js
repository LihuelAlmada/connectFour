var goHome = function(){
    document.getElementsByClassName('main')[0].style.display = 'none';
    document.getElementsByClassName('footer')[0].style.display = 'none';
    document.getElementById('contactWindow').style.display= 'none';
    document.getElementById('initialWindow').style.display= 'flex';
  }
  var goContact = function(){
    document.getElementById('contactWindow').style.display= 'flex';
    document.getElementById('initialWindow').style.display= 'none';
  }
  var goGame = function(){
    document.getElementsByClassName('main')[0].style.display = 'flex';
    document.getElementsByClassName('footer')[0].style.display = 'flex';
    document.getElementsByClassName('window')[0].style.display = 'none';
  }