var boardHTML = null,
    columnsHTML = null,
    boardArray = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    ];
var checkGameStatus = function () {
    var k = 0,
        l = boardArray.length;
    for (var i = 0; i < l; i++) {
        for (var j = 0; j < boardArray[i].length-3; j++) {
            if (boardArray[i][j]) {
                if (boardArray[i][j] === (boardArray[i][j + 1]) && boardArray[i][j] === (boardArray[i][j + 2]) && boardArray[i][j] === (boardArray[i][j + 3])) {
                    winHTML.innerHTML = ('You win ' + turn);
                    winDescHTML.innerHTML = ('Congratulations, placed four ' + turn + ' tiles online before your opponent!!!');
                    goWin();
                }
            }
        }
    }
    for (var i = 0; i < l-3; i++) {
        for (var j = 0; j < boardArray[i].length; j++) {
            if (boardArray[i][j]) {
                if (boardArray[i][j] === (boardArray[i + 1][j]) && boardArray[i][j] === (boardArray[i + 2][j]) && boardArray[i][j] === (boardArray[i + 3][j])) {
                    winHTML.innerHTML = ('You win ' + turn);
                    winDescHTML.innerHTML = ('Congratulations, placed four ' + turn + ' tiles online before your opponent!!!');
                    goWin();
                }
                if (boardArray[i][j] === (boardArray[i + 1][j + 1]) && boardArray[i][j] === (boardArray[i + 2][j + 2]) && boardArray[i][j] === (boardArray[i + 3][j + 3])) {
                    winHTML.innerHTML = ('You win ' + turn);
                    winDescHTML.innerHTML = ('Congratulations, placed four ' + turn + ' tiles online before your opponent!!!');
                    goWin();
                }
            }
        }
    }
    for (var i = 0; i < l-3; i++) {
        for (var j = 3; j < boardArray[i].length; j++) {
            if (boardArray[i][j]) {
                if (boardArray[i][j] === (boardArray[i + 1][j - 1]) && boardArray[i][j] === (boardArray[i + 2][j - 2]) && boardArray[i][j] === (boardArray[i + 3][j - 3]) ) {
                    winHTML.innerHTML = ('You win ' + turn);
                    winDescHTML.innerHTML = ('Congratulations, placed four ' + turn + ' tiles online before your opponent!!!');
                    goWin();
                }
            }
        }
    }
    for (var i = 0; i < l; i++){
        for (var j = boardArray[i].length-1; j < boardArray[i].length; j++){
            if (boardArray[i][j]){
                if (boardArray[i][j] !== null ){
                    console.log('Entra ' + k + l);
                    k++;
                    if(k===l){
                        winHTML.innerHTML = ('DRAW');
                        winDescHTML.innerHTML = ('No more space for tiles!');
                        goWin();
                    }
                }
            }
        }
    }


    /*for (var i = 0; i < l; i++){
        for (var j = 0; j < boardArray[i].length; j++){
            if (boardArray[i][j]){
                if (boardArray[i][j] == !null ){
                    console.log('Hola');
                }
            }
        }
    }*/
}
var columnEventHandler = function (e) {
    var columnId = e.target.id.substr(1, 1);
    for (var i = 0; i < boardArray[columnId].length; i++) {
        if (!boardArray[columnId][i]) {
            boardArray[columnId][i] = turn;
            checkGameStatus();
            toggleTurn();
            render();
            break;
        }
    }
}
var bindColumnHandlers = function () {
    columnsHTML = document.getElementsByClassName('column');
    for (var i = 0; i < columnsHTML.length; i++) {
        columnsHTML[i].onclick = columnEventHandler;
    }
}
var render = function () {
    var html = '';
    for (var i = 0; i < boardArray.length; i++) {
        html += '<div id="c' + i + '" class="column">';
        for (var j = boardArray[i].length - 1; j >= 0; j--) {
            html += '<div id="s' + i + j + '" class="spot';
            if (boardArray[i][j]) html += ' ' + boardArray[i][j]
            {
                html += '"></div>';
            }
        }
    html += '</div>';
    }
    boardHTML.innerHTML = html;
    bindColumnHandlers();
}