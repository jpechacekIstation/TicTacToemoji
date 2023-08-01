var origBoard;
var emojis = [
	'😄','😃','😀','😊','☺','😉','😍','😘','😚','😗','😙','😜','😝','😛',
    '😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅',
    '😓','😩','😫','😨','😱','😠','😡','😤','😖','😆','😋','😷','😎','😴',
    '😵','😲','😟','😦','😧','😈','👿','😮','😬','😐','😕','😯','😶','😇',
    '😏','😑','👲','👳','👮','👷','💂','👶','👦','👧','👨','👩','👴','👵',
    '👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','👹','👺',
    '🙈','🙉','🙊','💀','👽','💩','🔥','✨','🌟','💫','💥','💢','💦','💧',
    '💤','💨','👂','👀','👃','👅','👄','👍','👎','👌','👊','✊','✌','👋',
    '✋','👐','👆','👇','👉','👈','🙌','🙏','☝','👏','💪','🚶','🏃','💃',
    '👫','👪','👬','👭','💏','💑','👯','🙆','🙅','💁','🙋','💆','💇','💅',
    '👰','🙎','🙍','🙇','🎩','👑','👒','👟','👞','👡','👠','👢','👕','👔',
    '👚','👗','🎽','👖','👘','👙','💼','👜','👝','👛','👓','🎀','🌂','💄',
    '💛','💙','💜','💚','❤','💔','💗','💓','💕','💖','💞','💘','💌','💋',
    '💍','💎','👤','👥','💬','👣','💭','🐶','🐺','🐱','🐭','🐹','🐰','🐸',
    '🐯','🐨','🐻','🐷','🐽','🐮','🐗','🐵','🐒','🐴','🐑','🐘','🐼','🐧',
    '🐦','🐤','🐥','🐣','🐔','🐍','🐢','🐛','🐝','🐜','🐞','🐌','🐙','🐚',
    '🐠','🐟','🐬','🐳','🐋','🐄','🐏','🐀','🐃','🐅','🐇','🐉','🐎','🐐',
    '🐓','🐕','🐖','🐁','🐂','🐲','🐡','🐊','🐫','🐪','🐆','🐈','🐩','🐾',
    '💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵',
    '🌴','🌲','🌳','🌰','🌱','🌼','🌐','🌞','🌝','🌚','🌑','🌒','🌓','🌔',
    '🌕','🌖','🌗','🌘','🌜','🌛','🌙','🌍','🌎','🌏','🌋','🌌','🌠','⭐',
    '☀','⛅','☁','⚡','☔','❄','⛄','🌀','🌁','🌈','🌊','🎍','💝','🎎','🎒',
    '🎓','🎏','🎆','🎇','🎐','🎑','🎃','👻','🎅','🎄','🎁','🎋','🎉','🎊',
    '🎈','🎌','🔮','🎥','📷','📹','📼','💿','📀','💽','💾','💻','📱','☎',
    '📞','📟','📠','📡','📺','📻','🔊','🔉','🔈','🔇','🔔','🔕','📢','📣',
    '⏳','⌛','⏰','⌚','🔓','🔒','🔏','🔐','🔑','🔎','💡','🔦','🔆','🔅','🔌',
    '🔋','🔍','🛁','🛀','🚿','🚽','🔧','🔩','🔨','🚪','🚬','💣','🔫','🔪',
    '💊','💉','💰','💴','💵','💷','💶','💳','💸','📲','📧','📥','📤','✉',
    '📩','📨','📯','📫','📪','📬','📭','📮','📦','📝','📄','📃','📑','📊',
    '📈','📉','📜','📋','📅','📆','📇','📁','📂','✂','📌','📎','✒','✏','📏',
    '📐','📕','📗','📘','📙','📓','📔','📒','📚','📖','🔖','📛','🔬','🔭','📰',
    '🎨','🎬','🎤','🎧','🎼','🎵','🎶','🎹','🎻','🎺','🎷','🎸','👾','🎮',
    '🃏','🎴','🀄','🎲','🎯','🏈','🏀','⚽','⚾','🎾','🎱','🏉','🎳','⛳',
    '🚵','🚴','🏁','🏇','🏆','🎿','🏂','🏊','🏄','🎣','☕','🍵','🍶','🍼',
    '🍺','🍻','🍸','🍹','🍷','🍴','🍕','🍔','🍟','🍗','🍖','🍝','🍛','🍤',
    '🍱','🍣','🍥','🍙','🍘','🍚','🍜','🍲','🍢','🍡','🍳','🍞','🍩','🍮',
    '🍦','🍨','🍧','🎂','🍰','🍪','🍫','🍬','🍭','🍯','🍎','🍏','🍊','🍋','🍒',
    '🍇','🍉','🍓','🍑','🍈','🍌','🍐','🍍','🍠','🍆','🍅','🌽','🏠','🏡',
    '🏫','🏢','🏣','🏥','🏦','🏪','🏩','🏨','💒','⛪','🏬','🏤','🌇','🌆',
    '🏯','🏰','⛺','🏭','🗼','🗾','🗻','🌄','🌅','🌃','🗽','🌉','🎠','🎡',
    '⛲','🎢','🚢','⛵','🚤','🚣','⚓','🚀','✈','💺','🚁','🚂','🚊','🚉',
    '🚞','🚆','🚄','🚅','🚈','🚇','🚝','🚋','🚃','🚎','🚌','🚍','🚙','🚘',
    '🚗','🚕','🚖','🚛','🚚','🚨','🚓','🚔','🚒','🚑','🚐','🚲','🚡','🚟',
    '🚠','🚜','💈','🚏','🎫','🚦','🚥','⚠','🚧','🔰','⛽','🏮','🎰','♨','🗿',
    '🎪','🎭','📍','🚩','⬆','⬇','⬅','➡','🔠','🔡','🔤','↗','↖','↘','↙','↔',
    '↕','🔄','◀','▶','🔼','🔽','↩','↪','ℹ','⏪','⏩','⏫','⏬','⤵','⤴','🆗',
    '🔀','🔁','🔂','🆕','🆙','🆒','🆓','🆖','📶','🎦','🈁','🈯','🈳','🈵',
    '🈴','🈲','🉐','🈹','🈺','🈶','🈚','🚻','🚹','🚺','🚼','🚾','🚰','🚮',
    '🅿','♿','🚭','🈷','🈸','🈂','Ⓜ','🛂','🛄','🛅','🛃','🉑','㊙','㊗','🆑',
    '🆘','🆔','🚫','🔞','📵','🚯','🚱','🚳','🚷','🚸','⛔','✳','❇','❎',
    '✅','✴','💟','🆚','📳','📴','🅰','🅱','🆎','🅾','💠','➿','♻','♈',
    '♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','⛎','🔯','🏧',
    '💹','💲','💱','©','®','™','〽','〰','🔝','🔚','🔙','🔛','🔜','❌','⭕',
    '❗','❓','❕','❔','🔃','🕛','🕧','🕐','🕜','🕑','🕝','🕒','🕞','🕓','🕟',
    '🕔','🕠','🕕','🕖','🕗','🕘','🕙','🕚','🕡','🕢','🕣','🕤','🕥','🕦',
    '✖','➕','➖','➗','♠','♥','♣','♦','💮','💯','✔','☑','🔘','🔗','➰','🔱',
    '🔲','🔳','◼','◻','◾','◽','▪','▫','🔺','⬜','⬛','⚫','⚪','🔴','🔵',
    '🔻','🔶','🔷','🔸','🔹'
];
let huPlayer = '❌';
let aiPlayer = '⭕';

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];
const cells = document.querySelectorAll('.cell');
const charSelector = document.getElementById("character-select");
const disabler = document.getElementById("disabler");
const r = document.querySelector(':root');
const click1 = document.getElementById("click-1");
const click2 = document.getElementById("click-2");
const click3 = document.getElementById("click-3");
const winSound = document.getElementById("win");
const tieSound = document.getElementById("tie");
const lostSound = document.getElementById("lost");

console.log(emojis.length);

startGame();

function startGame() {
    huPlayer = charSelector.value;
    document.querySelector(".endgame").style.display = "none";
    origBoard = Array.from(Array(9).keys());
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.filter = "none";
        cells[i].removeEventListener('click', turnClick, false);
        cells[i].classList.remove("cell-filled");
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
}

function turnClick(square) {
    if (typeof origBoard[square.target.id] == 'number') {
        turn(square.target.id, huPlayer);
        if (!checkTie() && !checkWin(origBoard, huPlayer)) {
            disabler.style.display = "block";
            setTimeout(function(){
                turn(bestSpot(), aiPlayer);
                disabler.style.display = "none";
            }, 750 + Math.floor(Math.random() * 1000));
        }
    }
}

function turn(squareId, player) {
    origBoard[squareId] = player;
    var square = document.getElementById(squareId);
    square.innerText = player;
    square.classList.add("cell-filled");
    if(player == huPlayer) {
        click2.play();
    } else {
        click3.play();
    }
    let gameWon = checkWin(origBoard, player);
    if (gameWon) gameOver(gameWon);
}

function checkWin(board, player) {
    let plays = board.reduce((a, e, i) => 
        (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = {index: index, player: player};
            break;
        }
    }
    return gameWon;
}

function gameOver(gameWon) {
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.filter = "blur(.5rem)";
    }
    for (let index of winCombos[gameWon.index]) {
        const winCombo = document.getElementById(index);
        if (gameWon.player == huPlayer) {
            winSound.currentTime = 0;
            winSound.play();
            winCombo.style.backgroundColor = "rgba(0, 155, 255, .5)";
            r.style.setProperty('--button-shadow', 'rgb(0, 155, 255)');
        } else {
            lostSound.play();
            winCombo.style.backgroundColor = "rgba(255, 0, 0, .5)";
            r.style.setProperty('--button-shadow', 'rgb(255, 0, 0)');
        }
        document.getElementById(index).style.filter = "none";
    }
    declareWinner(gameWon.player == huPlayer ? "You win!" : "You lose.");
    if (gameWon.player == huPlayer) {
        addChar(aiPlayer);
        // emojis.array.remove(aiPlayer);
        aiPlayer = emojis[Math.floor(Math.random() * emojis.length)];
    }
}

function declareWinner(who) {
    document.querySelector(".endgame").style.display = "flex";
    document.querySelector(".endgame .text").innerText = who;
}

function emptySquares() {
    return origBoard.filter(s => typeof s == 'number');
}

function bestSpot() {
    var chanceToMinimax = Math.random() * 101;
    console.log("chance to minimax = " + chanceToMinimax);
    if (chanceToMinimax < 40) {
        console.log("choose minimax");
        return minimax(origBoard, aiPlayer).index;
    } else {
        console.log("choose dumb");
        return emptySquares()[0];
    }
}

function checkTie() {
    if (emptySquares().length == 0 && !checkWin(origBoard, huPlayer)) {
        tieSound.play();
        r.style.setProperty('--button-shadow', 'rgb(100, 100, 100)');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.filter = "blur(.5rem)";
            cells[i].removeEventListener('click', turnClick, false);
        }
        declareWinner("Tie Game!");
        return true;
    }
    return false;
}

function minimax(newBoard, player) {
    var availSpots = emptySquares(newBoard);

    if (checkWin(newBoard, huPlayer)) {
        return {score: -10};
    } else if (checkWin(newBoard, aiPlayer)) {
        return {score: 10};
    } else if (availSpots.length === 0) {
        return {score: 0};
    }
    var moves = [];
    for (var i = 0; i < availSpots.length; i++) {
        var move = {};
        move.index = newBoard[availSpots[i]];
        newBoard[availSpots[i]] = player;

        if (player == aiPlayer) {
            var result = minimax(newBoard, huPlayer);
            move.score = result.score;
        } else {
            var result = minimax(newBoard, aiPlayer);
            move.score = result.score;
        }

        newBoard[availSpots[i]] = move.index;

        if ((player === aiPlayer && move.score === 10) || (player === huPlayer && move.score === -10))
            return move;
        else 
            moves.push(move);
    }

    var bestMove;
    if(player === aiPlayer) {
        var bestScore = -10000;
        for(var i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        var bestScore = 10000;
        for(var i = 0; i < moves.length; i++) {
            bestScore = moves[i].score;
            bestMove = i;
        }
    }

    return moves[bestMove];
}

function addChar(newChar) {
    var option = document.createElement("option");
    option.text = newChar;
    option.value = newChar;
    charSelector.appendChild(option);
}