
function rpsGame(yourChoice){
    // console.log(yourChoice);

    var humanChoise, botChoice;
    
    humanChoise = yourChoice.id;
    botChoice = numberTochoice(rpsToIntiger());

    results = decideWinner(humanChoise, botChoice); // [0, 1] 
    // console.log(results);

    message = finalMessage (results)
    // console.log(message)

    rpsFrontEnd(yourChoice.id, botChoice, message);
}


function rpsToIntiger (){
    return Math.floor(Math.random() * 3);
}

function numberTochoice(number){
    return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        "rock" : {'scissors' : 1, 'rock' : 0.5, 'paper' : 0},
        "paper" : {'rock' : 1, 'paper' : 0.5, 'scissors' : 0},
        "scissors" : {'paper' : 1, 'scissors' : 0.5, 'rock' : 0}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if (yourScore === 0){
        return {"message" : 'You lost! ', "color" : 'red'};
    }else if (yourScore === 0.5){
        return {"message" : 'You tied!', "color" : 'yellow'};
    }
    else {
        return {"message" : 'You worn!', "color" : 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        "rock" : document.getElementById("rock").src,
        "paper" : document.getElementById("paper").src,
        "scissors" : document.getElementById("scissors").src
    }

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    var humanDiv = document.createElement("div");
    var messageDiv = document.createElement("div");
    var botDive = document.createElement("div");

    humanDiv.innerHTML = "<img src = '" + imagesDatabase[humanImageChoice] + "' style='box-shadow: 0px 10px 34px rgba(37, 54, 233, 11);'>";

    messageDiv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + "; padding: 20px; '>" + finalMessage['message'] + "</h1>";

    botDive.innerHTML = "<img src = '" + imagesDatabase[botImageChoice] + "'  style = 'box-shadow: 0px 10px 34px rgba(243, 38, 24, 11);'>";

    document.getElementById("flex-container").appendChild(humanDiv);
    document.getElementById("flex-container").appendChild(messageDiv);
    document.getElementById("flex-container").appendChild(botDive);

    document.getElementById("btn").innerHTML = "RESTART";
}


function reloadPage(){
    window.location.reload();
}
