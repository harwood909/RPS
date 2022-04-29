function compWin(i){alert(`Round ${i+1}A computer beat you ${computerScore} out of 5 times\nYou have won ${userScore} out of 5 times`)}
function userWin(i){alert(`Round ${i+1}\n*Slow Clap*, you have won ${userScore} out of 5 times\nThe computer has won ${computerScore} out of 5 times`)}
let computerScore = 0
let userScore = 0
for(i=0;i<5;i++){

const btn = document.querySelector(`div.buttons`)
btn.addEventListener(`click`, function(e){
    let userChoice = (e.target.className);
    gameOn(computerPlay,userChoice);
});
}

let computerChoice = computerPlay()

function computerPlay(){
    let randomNumber = Math.round(Math.random()*(100))
    switch(true){
        case (randomNumber <= 33):
        console.log(`rock ${randomNumber}`);
        return "rock";
        break;

        case (randomNumber > 33 && randomNumber <= 66):
        console.log(`paper ${randomNumber}`);
        return "paper";
        break;

        case (randomNumber > 66):
        console.log(`scissors ${randomNumber}`);
        return "scissors";
        break;

        default:
        alert(`The computer picked ${randomNumber}, no decision was made`);

    }
}

function gameOn(computerChoice,userChoice){
    switch(true){
        case (computerChoice == "rock" && userChoice == "scissors"):
        ++computerScore
        return compWin(i);
        break;

        case (computerChoice == "paper" && userChoice == "rock"):
        ++computerScore
        return compWin(i);
        break;

        case (computerChoice == "scissors") && userChoice == "paper":
        ++computerScore
        return compWin(i);
        break;

        case (computerChoice == userChoice):
        alert(`Draw, try again`);
        --i
        return;

        default:
        ++userScore
        return userWin(i);
    }
}
//alert(`Refresh the page to play another round`);