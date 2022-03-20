computerPlay()
function computerPlay(){
    let randomNumber = Math.round(Math.random()*(100))
    switch(true){
        case (randomNumber <= 33):
        console.log("Rock");
        console.log(randomNumber);
        return "Rock";
        break;

        case (randomNumber > 33 && randomNumber <= 66):
        console.log("Paper");
        console.log(randomNumber);
        return "Paper";
        break;

        case (randomNumber > 66):
        console.log("Scissors");
        console.log(randomNumber);
        return "Scissors";
        break;
        default:
        alert(`The computer picked ${randomNumber}, no decision was made`);

    }
}
userPlay()
function userPlay(){
    let userChoice = prompt("Pick your weapon", "Rock");
    console.log(userChoice);
}