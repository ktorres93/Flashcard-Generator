//loading in inquireer
var inquirer = require('inquirer');
//using constructor here instead of an array to hold/create questions.
var question =  function (front,back) {
    this.front = front;
        this.back= back;

};
console.log(question());
//creating questions with constructor.
var q1 = new question("The two kinds of monosaccharides are ...","aldoses, ketoses");

var q2 = new question("Starches are polymers made exclusively from ...","glucose");


//initializes inquirer to ask questions
inquirer.prompt([

    {   type: "input",
        name:"Q1",
        message:"The two kinds of monosaccharides are ...",
        back:"aldoses, ketoses"
},
    {   type: "input",
        name:"Q2",
        message: "Starches are polymers made exclusively from ...",
        back:"glucose"
    }]).then(function (answers) {
if ("input" === "back"){
    console.log("CORRECT");
}
else{
    console.log("WRONG");
}
});

//console.log(questions);


function startRound () {

}

//Psuedo code: need to take the user input for the answers. use inquire to print the question front as a message and take
//the question back as the input for the answer.
//need to see if it's correct, check this by using an if statement on the users input seeing if it's equal to the question
//back value.
//optional(assign points for correct answers and display the points at the end of the round of questions.)
//give feed back on wrong answers. another if statement can be used for this.
//Functions are needed to start and end the flashcards coming through.
//