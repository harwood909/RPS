computerPlay()
function computerPlay(){
    let randomNumber = Math.round(Math.random()*(100))
    switch(true){
        case (randomNumber <= 33):
        console.log("rock");
        console.log(randomNumber);
        return "rock";
        break;

        case (randomNumber > 33 && randomNumber <= 66):
        console.log("paper");
        console.log(randomNumber);
        return "paper";
        break;

        case (randomNumber > 66):
        console.log("scissors");
        console.log(randomNumber);
        return "scissors";
        break;

        default:
        alert(`The computer picked ${randomNumber}, no decision was made`);

    }
}
userPlay()
function userPlay(){
    while (typeof(userChoice) != "string"){
        let userChoice = prompt("Pick your weapon: Rock, Paper or Scissors", "Rock");
        if (userChoice != null){
            userChoice = userChoice.toLowerCase();
        }
        switch (true){
            case (userChoice == "rock"):
        console.log(userChoice);
        return userChoice;
        break;

        case (userChoice == "paper"):
            console.log(userChoice);
            return userChoice;
            break;
            
            case (userChoice == "scissors"):
                console.log(userChoice);
        return userChoice;
        break;
        
        default:
            console.log("Good job, you broke it")
        }
    }
}