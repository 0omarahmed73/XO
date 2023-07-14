let tiles = Array.from(document.querySelectorAll('.tile'));
let playerDisplay = document.querySelector('.display');
let resetButton = document.querySelector('#reset');
let  announcer = document.querySelector('.announcer');
let playButton = document.querySelector('.play');
let board = [ '' , '' , '' , '' , '' , '' ,'', '' ,''];
let currentPlayer = 'X';
let isGameActive = true;
const tie = 'TIE'
const winnerConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

playButton.addEventListener('click' , function(){
  document.querySelector('.container').classList.remove('hide');
  playButton.classList.add('hide');
  playerDisplay.classList.remove('hide');
})


let i = 0;
tiles.forEach(el => {
  el.addEventListener('click' , function(e){
    if (el.innerHTML === '') {
      el.innerHTML = `<span class="display-player player${currentPlayer}">${currentPlayer}</span>`
      board[tiles.indexOf(el)] = currentPlayer;
      // let currentPlayerOld = currentPlayer
      console.log(board)
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      playerDisplay.innerHTML = `Player <span class="display-player player${currentPlayer}">${currentPlayer}</span>'s Turn`
      i++;
      if (checkWinner() !== undefined ){
        announcer.classList.remove('hide');
        if (checkWinner() === 'Draw'){
          announcer.innerHTML = `No one is won , the result is <span class="display-player">${checkWinner()}</span>`
        }
        else {
          announcer.innerHTML = `Player <span class="display-player player${checkWinner()}">${checkWinner()}</span> is the <span class='winner'>Winner</span>`

        }
        resetButton.classList.remove('hide');
      }
    }
  })
})

function checkWinner(){
  let winner;
  let a = '';
  let b = '';
  let c = '';
  console.log('##########');
  for (let i = 0 ; i < winnerConditions.length ; i++){
    a = winnerConditions[i][0];
    console.log('#' + i + 'a');
    console.log(board[a])
    b = winnerConditions[i][1];
    console.log('#' + i + 'b');
    console.log(board[b])
    c  = winnerConditions[i][2];
    console.log('#' + i + 'c');
    console.log(board[c])
    if (board[a] === '' || board[b] === '' || board[c] === ''){
      continue;
    }
    else if (board[a] === board[b] && board[b] === board[c]){
        winner = board[a];
        return winner;
    }
    else if (!board.includes('') && board[a] !== board[b] && board[b] !== board[c] && i === 7 ) {
      winner = 'Draw';
      return winner;
    }
  }

}resetButton.addEventListener('click' , function() {
  window.location.reload();
})

document.querySelector('.year').innerText = (new Date()).getFullYear();
