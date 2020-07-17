var turn = 'blue',
    acumSP1 = 0,
    acumMP1 = 0,
    acumSP2 = 0,
    acumMP2 = 0,
    ChronometerP1,
    ChronometerP2;

var stopChronometer = function () {
    clearInterval(ChronometerP1);
    clearInterval(ChronometerP2);
  }
  var startChronometer = function () {
    if(turn === 'blue'){
      ChronometerP1 = setInterval(
        function(){
          if (acumSP1 == 60)
          {
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
          
          if (acumSP2 == 60)
          {
            acumSP2 = 0;
            acumMP2++;
            timeMP2HTML.innerHTML = acumMP2;
          }
          timeSP2HTML.innerHTML = acumSP2;
          acumSP2++;
        },1000);
    }
  }
  var toggleTurn = function () {
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