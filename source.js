/* console.log(randomNumber) */

computerPlay()
function computerPlay(){
    let randomNumber = Math.random()*(100)
    switch(true){
        case (randomNumber <= 33):
        console.log("Rock");
        console.log(randomNumber);
        break;

        case (randomNumber > 33 && randomNumber <= 66):
        console.log("Paper");
        console.log(randomNumber);
        break;

        case (randomNumber > 66):
        console.log("Scissors");
        console.log(randomNumber);
        break;
        default:
        alert(`The computer picked ${randomNumber}, no decision was made`);

    }
}