// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
// let userChoice = userChoice

let userChoice = ""
let computerChoice = ""
let randomNummber = Math.random();

$("button").click(function(){
    userChoice = $("#input").val().toLowerCase()
    $("#userChoice").text(userChoice);
});
let rock = 0
let paper = 1
let sissors = 2

document.getElementById("shoot").addEventListener("click",function(e) {
    let randomNumber = Math.random();
    if(randomNumber>.60){
        computerChoice="rock";
    }else if(randomNumber>.40){
        computerChoice="paper";
    }else if(randomNumber>.20){
        computerChoice="sissors";
    }else{
        computerChoice="runs away out of fear";
    }
    document.getElementById("computerChoice").innerHTML=computerChoice;
    if(computerChoice === "rock" && userChoice==="paper"){
        document.getElementById("result").innerHTML="user wins";
    }else if(computerChoice==="paper" && userChoice==="rock")
    {document.getElementById("result").innerHTML="computer wins";
    }else if(computerChoice === "sissors" && userChoice === "paper"){
        document.getElementById("result").innerHTML="computer wins";
    }else if(computerChoice==="paper" && userChoice=== "sissors")
    {document.getElementById("result").innerHTML="user wins";
    }else if(computerChoice === "rock" && userChoice === "sissors"){
        document.getElementById("result").innerHTML="computer wins";
    }else if(computerChoice==="sissors" && userChoice==="rock")
    {document.getElementById("result").innerHTML="user wins";
    }else if(computerChoice === "runs away out of fear" && (userChoice === "rock" || userChoice==="paper" || userChoice==="sissors")){
        document.getElementById("result").innerHTML="user wins by default"
    }else if(computerChoice === userChoice){
        document.getElementById("result").innerHTML="it's a tie "
    }else {document.getElementById("result").innerHTML="Not valid input"}
});





// DOCUMENT READY FUNCTION BELOW

