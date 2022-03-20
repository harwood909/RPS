function compWin(){alert("Good job, a computer beat you")}
function userWin(){alert("*Slow Clap*")}

let computerChoice = computerPlay()
let userChoice = userPlay()
let result = gameOn(computerChoice,userChoice);

function computerPlay(){
    let randomNumber = Math.round(Math.random()*(100))
    switch(true){
        case (randomNumber <= 33):
        console.log("rock "+randomNumber);
        return "rock";
        break;

        case (randomNumber > 33 && randomNumber <= 66):
        console.log("paper ")+randomNumber;
        return "paper";
        break;

        case (randomNumber > 66):
        console.log("scissors "+randomNumber);
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
        return compWin();
        break;

        case (computerChoice == "paper" && userChoice == "rock"):
        return compWin();
        break;

        case (computerChoice == "scissors") && userChoice == "paper":
        return compWin();
        break;

        default:
        userWin();
    }
}