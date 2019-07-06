/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
class UI {
    clearField() {
        document.getElementById('score-1').textContent = 0;
        document.getElementById('score-2').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        document.getElementById('current-2').textContent = 0;
    }
}
let scores, roundScore, activePlayer;
scores = [0,0,0];
roundScore = 0;

//active
activePlayer = 1;

//start all scores at 0 - global
let ui = new UI();
ui.clearField();

//buttons
const rollDice = document.getElementById('btn-roll');
const hold = document.getElementById('btn-hold');

function nextPlayer() {
            //next player
            activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
            roundScore = 0;
    
            document.getElementById(`current-1`).textContent = '0';
            document.getElementById(`current-2`).textContent = '0';
    
            document.querySelector('.player-1-panel').classList.toggle('active');
            document.querySelector('.player-2-panel').classList.toggle('active');
    
            diceImg.style.display = 'none';
}

//hide the image - global
let diceImg = document.querySelector('.dice');
diceImg.style.display = 'none';

//select roll dice - local
rollDice.addEventListener('click', (e)=> {
    // Random Number
    dice = Math.floor(Math.random() * 6) + 1;

    //display
    diceImg.style.display = 'block';
    diceImg.src = `dice-${dice}.png`;
    //update the round score IF the rolled number was not a 1;
    if(dice > 1) {
        //add to current
        roundScore += dice;
        document.getElementById(`current-${activePlayer}`).textContent = roundScore;
    } else {
        nextPlayer();
    }
});

//hold points
document.getElementById('btn-hold').addEventListener('click', (e)=> {
    //Add Current score to the global score
    let scr = scores[activePlayer] += roundScore;
   //update UI
   document.getElementById(`score-${activePlayer}`).textContent = scr;
   //check if player won
   let p1 = document.getElementById('score-1');
   let p2 = document.getElementById('score-2');

    if(p1.textContent >= 50) {
        document.getElementById('name-1').textContent = 'WINNER!'
        displayDice();
    } else if(p2.textContent >= 50) {
        document.getElementById('name-2').textContent = 'WINNER!'
        displayDice();
    } else {
       console.log();
    }
   //next
   nextPlayer();

});

function displayDice() {
    diceImg.style.display = 'none';
    hold.style.display = 'none';
    rollDice.style.display = 'none';
};


//new game
document.querySelector('.btn-new').addEventListener('click', (e)=> {
    document.getElementById('name-1').textContent = 'Player 1'
    document.getElementById('name-2').textContent = 'Player 2'
    scores[1] = 0;
    scores[2] = 0;
    hold.style.display = 'block';
    rollDice.style.display = 'block';
    diceImg.style.display = 'none';
    ui.clearField();
});
