$(document).ready(function () {

var totalScore = 0;
var winCount = 0;
var lossCount = 0;
var computerScore = Math.floor(Math.random()*410);
console.log(computerScore);

var lossStatus = false;

if (lossStatus = true) {
    var computerScore = Math.floor(Math.random()*410);
}

$("#blueGemImg").on("click", function() {
    var clickScore = Math.floor(Math.random()*100);
    alert("Blue Gem have been clicked! you got : " + clickScore + " points" );
    totalScore = totalScore + clickScore;
    
    if (totalScore < computerScore) {
        $("#winCount").html("winCount is: " + winCount++);
    }
    else {
        $("#lossCount").html("lossCOunt is: " + lossCount++);
        lossStatus = true;
    }

    $("#totalScore").html("Total score is: " + totalScore);
});

$("#purpleGemImg").on("click", function() {
    var clickScore = Math.floor(Math.random()*50);
    alert("purple Gem have been clicked! you got : " + clickScore + " points" );
    totalScore = totalScore + clickScore;
    
    if (totalScore < computerScore) {
        $("#winCount").html("winCount is: " + winCount++);
    }
    else {
        $("#lossCount").html("lossCount is : " + lossCount++);
    }

    $("#totalScore").html("Total score is: " + totalScore);
});

$("#pinkGemImg").on("click", function() {
    var clickScore = Math.floor(Math.random()*250);
    alert("purple Gem have been clicked! you got : " + clickScore + " points" );
    totalScore = totalScore + clickScore;
    
    if (totalScore < computerScore) {
        $("#winCount").html("winCount is: " + winCount++);
    }
    else {
        $("#lossCount").html("lossCount is: " + lossCount++);
    }

    $("#totalScore").html("Total score is: " + totalScore);
});

$("#threeGemImg").on("click", function() {
    var clickScore = Math.floor(Math.random()*10);
    alert("purple Gem have been clicked! you got : " + clickScore + " points" );
    totalScore = totalScore + clickScore;
    
    if (totalScore < computerScore) {
        $("#winCount").html("winCount is: " + winCount++);
    }
    else {
        $("#lossCount").html("lostCount is: " + lossCount++);
    }

    $("#totalScore").html("Total score is: " + totalScore);
});


})