function compWin(i){alert(`Round ${i+1}\nA computer beat you ${computerScore} out of 5 times\nYou have won ${userScore} out of 5 times`)}
function userWin(i){alert(`Round ${i+1}\n*Slow Clap*, you have won ${userScore} out of 5 times\nThe computer has won ${computerScore} out of 5 times`)}
let computerScore = 0
let userScore = 0


for (let i = 0; i < 5; i++) {

let computerChoice = computerPlay()
let userChoice = userPlay()
let result = gameOn(computerChoice,userChoice);

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

function userPlay(){
    while (typeof(userInput) != "string"){
        let userInput = prompt("Pick your weapon: Rock, Paper or Scissors", "Rock");
        if (userInput != null){
            userInput = userInput.toLowerCase();
        }
        switch (true){
            case (userInput == "rock"):
        console.log(userInput);
        return userInput;
        break;

        case (userInput == "paper"):
            console.log(userInput);
            return userInput;
            break;
            
            case (userInput == "scissors"):
                console.log(userInput);
        return userInput;
        break;
        
        default:
            console.log("Good job, you broke it")
        }
    }
}

function gameOn(){
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
}
alert(`Refresh the page to play another round`);