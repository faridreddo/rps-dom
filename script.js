const container = document.querySelector('#container');

/* Computer Inputs */

let randomNumbers;
let computerChoice;

function computerGenerate(){
/*generate a number, numbers become choice*/
randomNumbers = Math.floor(Math.random() * 10);
/*to assign numbers generated to a string*/
if (randomNumbers <= 3){
    computerChoice = 'rock';
} else if (randomNumbers <= 6){
    computerChoice = 'paper';
} else {
    computerChoice = 'scissors';
}
}

/*plays a single round,
take two parameters and returns strings that
declares the winner or loser*/
/* track wins, draws and losses, stored as a global variable*/

let win = 0;
let draw = 0;
let lose = 0;
const playRound = (a, b) => {
if(a == 'rock'){
    if (b == 'rock'){
        draw++ ;
        return 'issa draw!'
    }
    else if(b == 'scissors'){
        win++ ;
        return 'you win!'
    }
    else {
        lose++ ;
        return 'YOU LOSE!'
    }
}
else if(a == 'paper'){
    if (b == 'paper'){
        draw++ ;
        return 'issa draw!'
    }
    else if(b == 'rock'){
        win++ ;
        return 'you win!'
    }
    else {
        lose++ ;
        return 'YOU LOSE!'
    }
}
else if(a == 'scissors'){
    if (b == 'scissors'){
        draw++ ;
        return 'issa draw!'
    }
    else if(b == 'paper'){
        win++ ;
        return 'you win!'
    }
    else {
        lose++ ;
        return 'YOU LOSE!'
    }
}
else {
    return 'nope'
}
};

/*User Inputs*/

let playerChoice;

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerChoice = 'rock';
    computerGenerate();
    console.log(computerChoice);
    let game = playRound(playerChoice, computerChoice);

    const results = document.createElement('p');
    results.setAttribute('style', 'font-family: Helvetica, sans-serif; color: green; background: black');
    results.textContent = `${game} let's play again! win: ${win} draw: ${draw} lose: ${lose}`;
    container.appendChild(results);

});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerChoice = 'paper';
    computerGenerate();
    console.log(computerChoice);
    let game = playRound(playerChoice, computerChoice);

    const results = document.createElement('p');
    results.setAttribute('style', 'font-family: Helvetica, sans-serif; color: green; background: black');
    results.textContent = `${game} let's play again! win: ${win} draw: ${draw} lose: ${lose}`;
    container.appendChild(results);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerChoice = 'scissors';
    computerGenerate();
    console.log(computerChoice);
    let game = playRound(playerChoice, computerChoice);

    const results = document.createElement('p');
    results.setAttribute('style', 'font-family: Helvetica, sans-serif; color: green; background: black');
    results.textContent = `${game} let's play again! win: ${win} draw: ${draw} lose: ${lose}`;
    container.appendChild(results);
});






/* function to play 5 rounds, keep scores and reports the overall winner

function game(){
for(i = 0; i < 5; i++){
computerGenerate();
console.log(randomNumbers);
console.log('bot\'s choice is: ' + computerChoice);
console.log('your choice is: ' + playerChoice);
/* variable that stores playRound results 
let result = playRound(playerChoice, computerChoice);
console.log(result + " your wins: " + win + " your losses: " + lose + " your draws: " + draw);
}
if (win > lose){
    console.log('YOU ARE THE RPS CHAMPION'); 
} else if (win < lose){
    console.log('BETTER LUCK NEXT TIME');
} else {
    console.log('You think like a robot!');
}
}
game();

*/ 