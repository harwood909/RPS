function userWin(){alert(`Round ${roundCount}\n*Slow Clap*, you have won ${userScore} out of ${roundLimit} times\nThe computer has won ${computerScore} out of ${roundLimit} times`)}
function compWin(){alert(`Round ${roundCount}\nA computer beat you ${computerScore} out of ${roundLimit} times\nYou have won ${userScore} out of ${roundLimit} times`)}

let roundCount = 0;
const roundLimit = 5;
let computerScore = 0;
let userScore = 0;

const btn = document.querySelector(`div.buttons`)
btn.addEventListener(`click`,(e)=>runMatch(e));

function runMatch(e){
    if(roundCount<roundLimit){
        let userChoice = (e.target.className);
        gameOn(computerPlay(),userChoice);
        console.log(roundCount)
    }
    else{
        finalScore();
    }
}
function finalScore(){
    if(computerScore<userScore)
    alert(`You won\n*Slow Clap*, you have won ${userScore} out of ${roundLimit} times\nThe computer has won ${computerScore} out of ${roundLimit} times\nRefresh the page to play another match`)
    else{
    alert(`You lost\nA computer beat you ${computerScore} out of ${roundLimit} times\nYou have won ${userScore} out of ${roundLimit} times\nRefresh the page to play another match`)

    }
}

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
        ++roundCount
        return compWin();
        break;

        case (computerChoice == "paper" && userChoice == "rock"):
        ++computerScore
        ++roundCount
        return compWin();
        break;

        case (computerChoice == "scissors") && userChoice == "paper":
        ++computerScore
        ++roundCount
        return compWin();
        break;

        case (computerChoice == userChoice):
        alert(`Draw, try again`);
        return;

        default:
        ++userScore
        ++roundCount
        return userWin();
    }
}