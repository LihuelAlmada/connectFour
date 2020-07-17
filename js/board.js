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
var columnEventHandler = function (e) {
    var columnId = e.target.id.substr(1, 1);
    for (var i = 0; i < boardArray[columnId].length; i++) {
        if (!boardArray[columnId][i]) {
            boardArray[columnId][i] = turn;
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