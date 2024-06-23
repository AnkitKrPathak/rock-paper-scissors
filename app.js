let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let newGame = document.querySelector("#new-btn");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    
    msg.innerText = "Game was draw!!";
    msg.style.color = "#05445E";
    userScore += 1;
    compScore += 1;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore += 2;
        userScorePara.innerText = userScore;
        msg.innerText = `You won!! Your ${userChoice} beat ${compChoice}`;
        msg.style.color = "green";
        
    } else {
        compScore += 2;
        compScorePara.innerText = compScore
        msg.innerText = `You lost!! ${compChoice} beat your ${userChoice}`;
        msg.style.color = "red";
        
    }
}

const playGame = (userChoice) => {
    
    //Generate computer choice
    let compChoice = genCompChoice();
    

    if(userChoice === compChoice) {
        // Draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

newGame.addEventListener("click", () => {
    window.location.reload();
});