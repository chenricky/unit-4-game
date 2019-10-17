$(document).ready(function () {

var totalScore = 0;
var winCount = 1;
var lossCount = 1;
var computerScore;
function randomComputerScore () {
    var computerScore = Math.floor(Math.random()*410);
    //console.log("computer score is :" + computerScore);
    return computerScore;
}

//randomComputerScore();
var computerScoreNew = randomComputerScore();
//console.log("random computer score from a func is " + randomComputerScore());
console.log("computer score should not change in the same iteration: " + computerScoreNew);

//var lossStatus = false;

if (totalScore > computerScoreNew) {
    //var computerScore = Math.floor(Math.random()*410);
    totalScore = 0;
    computerScoreNew = randomComputerScore();
}

$("#blueGemImg").on("click", function() {
    var clickScore = Math.floor(Math.random()*100);
    alert("Blue Gem have been clicked! you got : " + clickScore + " points" );
    totalScore = totalScore + clickScore;
    console.log("blue click score is " + clickScore);
    console.log("total score is " + totalScore);
    console.log("computer score is " + randomComputerScore());
    console.log("computer score should not change in the same iteration: " + computerScoreNew);
    
    if (totalScore < computerScoreNew) {
        $("#winCount").html("winCount is: " + winCount++);
       // console.log("lossStatus is " + lossStatus + " from blue gem If block");
    }
    else {
        $("#lossCount").html("lossCount is: " + lossCount++);
        //lossStatus = true;
        //console.log(lossStatus + " from blue gem ELSE block");
        totalScore = 0;
        computerScoreNew = randomComputerScore();
       
    }

    $("#totalScore").html("Total score is: " + totalScore);
});

$("#pinkGemImg").on("click", function() {
    var clickScore = Math.floor(Math.random()*100);
    alert("Pink Gem have been clicked! you got : " + clickScore + " points" );
    totalScore = totalScore + clickScore;
    console.log("blue click score is " + clickScore);
    console.log("total score is " + totalScore);
    console.log("computer score is " + randomComputerScore());
    console.log("computer score should not change in the same iteration: " + computerScoreNew);
    
    if (totalScore < computerScoreNew) {
        $("#winCount").html("winCount is: " + winCount++);
        //console.log("lossStatus is " + lossStatus + " from pink gem If block");
    }
    else {
        $("#lossCount").html("lossCount is: " + lossCount++);
        //lossStatus = true;
        //console.log(lossStatus + " from pink gem ELSE block");
        totalScore = 0;
        computerScoreNew = randomComputerScore();
       
    }

    $("#totalScore").html("Total score is: " + totalScore);
});

$("#purpleGemImg").on("click", function() {
    var clickScore = Math.floor(Math.random()*100);
    alert("Purple Gem have been clicked! you got : " + clickScore + " points" );
    totalScore = totalScore + clickScore;
    console.log("purple click score is " + clickScore);
    console.log("total score is " + totalScore);
    console.log("computer score is " + randomComputerScore());
    console.log("computer score should not change in the same iteration: " + computerScoreNew);
    
    if (totalScore < computerScoreNew) {
        $("#winCount").html("winCount is: " + winCount++);
        //console.log("lossStatus is " + lossStatus + " from purple gem If block");
    }
    else {
        $("#lossCount").html("lossCount is: " + lossCount++);
        //lossStatus = true;
        //console.log(lossStatus + " from ppourple gem ELSE block");
        totalScore = 0;
        computerScoreNew = randomComputerScore();
      
    }

    $("#totalScore").html("Total score is: " + totalScore);
});

$("#threeGemImg").on("click", function() {
    var clickScore = Math.floor(Math.random()*100);
    alert("Three Gem have been clicked! you got : " + clickScore + " points" );
    totalScore = totalScore + clickScore;
    console.log("blue click score is " + clickScore);
    console.log("total score is " + totalScore);
    console.log("computer score is " + randomComputerScore());
    console.log("computer score should not change in the same iteration: " + computerScoreNew);
    
    if (totalScore < computerScoreNew) {
        $("#winCount").html("winCount is: " + winCount++);
        //console.log("lossStatus is " + lossStatus + " from three gem If block");
    }
    else {
        $("#lossCount").html("lossCount is: " + lossCount++);
        //lossStatus = true;
        //console.log(lossStatus + " from three gem ELSE block");
        totalScore = 0;
        computerScoreNew = randomComputerScore();
    
    }

    $("#totalScore").html("Total score is: " + totalScore);
});

})