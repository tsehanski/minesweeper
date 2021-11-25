function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function shuffle(items) {
    var randIdx, keep;
    for (var i = items.length - 1; i > 0; i--) {
        randIdx = getRandomInt(0, items.length);
        randIdx = getRandomInt(0, i + 1);

        keep = items[i];
        items[i] = items[randIdx];
        items[randIdx] = keep;
    }
    console.log('items :>> ', items);
    return items;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// function printMat(mat, selector) {
//     var strHTML = '<table border="0"><tbody>';
//     for (var i = 0; i < mat.length; i++) {
//         strHTML += '<tr>';
//         for (var j = 0; j < mat[0].length; j++) {
//             var cell = mat[i][j];
//             var className = `cell cell-${i}-${j}`
//             strHTML += `<td class="${className}">${cell}</td>`
//         }
//         strHTML += '</tr>'
//     }
//     strHTML += '</tbody></table>';
//     var elContainer = document.querySelector(selector);
//     elContainer.innerHTML = strHTML;
// }

function easy() {
    clearInterval(gGameInterval)
    gLevel = { SIZE: 4, MINES: 2 };
    gNumOfFlags = gLevel.MINES
    reset()

}

function medium() {
    clearInterval(gGameInterval)
    gLevel = { SIZE: 4 * 2, MINES: 12 };
    gNumOfFlags = gLevel.MINES
    reset()
}

function hard() {
    gLevel = { SIZE: 4 ** 2, MINES: 30, };
    gNumOfFlags = gLevel.MINES
    clearInterval(gGameInterval)
    reset()
}

function gameOver() {
    var elModal = document.querySelector('.modal')
    var elMsg = elModal.querySelector('span.msg')
    var elSmily = document.querySelector('button.reset')
    var elEmj = elModal.querySelector('span.emj')
    clearInterval(gGameInterval)
    showAllMines(gBoard)
    gGame.isOn = false
    elMsg.innerText = 'You have Lost'
    elEmj.innerText = 'want to try again?'
    elModal.classList.toggle('hide')

}

function win() {
    var elSmily = document.querySelector('button.reset')
    var elModal = document.querySelector('.modal')
    var elMsg = elModal.querySelector('span.msg')
    var elEmj = elModal.querySelector('span.emj')
    elModal.classList.toggle('hide')
    elMsg.innerText = 'You Have Won!'
    elEmj.innerText = 'Mama Must Be Proud'
    gGame.isOn = false
    clearInterval(gGameInterval)
    elSmily.innerText = '🏆'
}


function createHearts() {
    str = ''
    for (var i = 0; i < gNumOfLives; i++) {
        str += '❤ '
    }
    return str
}

function createMat(length) {
    var mat = []
    for (var i = 0; i < length; i++) {
        mat[i] = []
        for (var j = 0; j < length; j++) {
            mat[i][j] = []
        }
    }
    return mat
}