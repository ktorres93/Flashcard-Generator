//loading in inquireer
var inquirer = require('inquirer');
var rightAnswer= 0;
//using constructor here instead of an array to hold/create CLOZE questions.
var question =  function (front,back) {
    this.front = front;
    this.back= back;

};
console.log(question());
//creating CLOZE questions with constructor.
var q1 = new question("A kind of monosaccharide starting with the letter 'A' is ...","aldose");

var q2 = new question("Starches are polymers made exclusively from ...","glucose");


//initializes inquirer to ask questions and assigns values to answers
inquirer.prompt([

    {   type: "input",
        name:"question1",
        message:q1.front,
        back:q1.back
    },
    {   type: "input",
        name:"question2",
        message: q2.front,
        back:q2.back

        //starts right/wrong test
    }]).then(function (inquirer) {

    if (inquirer.question1 === q1.back){
        console.log("CORRECT");
        ++rightAnswer;
    }
    else{
        console.log("WRONG");
    }
    if (inquirer.question2 === q2.back){
        console.log("CORRECT");
        ++rightAnswer;
    }
    else{
        console.log("WRONG");
    }
    if (rightAnswer === 2){
        console.log("NICE YOU GOT EM ALL")
    }
    else if (rightAnswer === 1){
        console.log("1 out of 2 isnt bad...");
    }
    else if (rightAnswer === 0){
        console.log("BACK TO BIO1 FOR YOU");
    }
    console.log("The correct answers were" +" "+ q1.back+ " " + "and" + " "+ q2.back)

});


//console.log(questions);



//Psuedo code: need to take the user input for the answers. use inquire to print the question front as a message and take
//the question back as the input for the answer.
//need to see if it's correct, check this by using an if statement on the users input seeing if it's equal to the question
//back value.
//optional(assign points for correct answers and display the points at the end of the round of questions.)
//give feed back on wrong answers. another if statement can be used for this.
//Functions are needed to start and end the flashcards coming through.
//extra credit: save them from themselves by making their input always lowercase.