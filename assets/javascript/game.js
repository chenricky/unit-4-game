$(document).ready(function () {

var clickScore = 0;
var totalScore = 0;

$("#blueGemImg").on("click", function() {
    alert("Blue Gem have been clicked! you got : " + clickScore + " points" );
    clickScore = Math.floor(Math.random()*100);
    totalScore = totalScore + clickScore;
    $("#totalScore").html("Total score is: " + totalScore);
});


})