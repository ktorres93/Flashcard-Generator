//loading in inquireer
var inquirer = require('inquirer');
var rightAnswer= 0;
//using constructor here instead of an array to hold/create CLOZE questions.
var cloze  =  function (unClozedText,clozedText,clozedWord) {
    this.unClozedText = unClozedText;
    this.clozedText= clozedText;
    this.clozedWord= clozedWord
};
//console.log(cloze());
//creating CLOZE questions with constructor.
var q1clozed = new cloze("A kind of monosaccharide starting with the letter 'A' is aldose","A kind of monosaccharide starting with the letter 'A' is ... ","aldose");
//console.log(q1clozed);
var q2clozed = new cloze("Starches are polymers made exclusively from glucose","Starches are polymers made exclusively from glucose","glucose");


//initializes inquirer to ask questions and assigns values to answers
inquirer.prompt([

    {   type: "input",
        name:"question1",
        message:q1clozed.clozedText,
        answer:q1clozed.clozedWord
    },
    {   type: "input",
        name:"question2",
        message: q2clozed.clozedText,
        answer:q2clozed.clozedWord

        //starts right/wrong test
    }]).then(function (inquirer) {

    if (inquirer.question1 === q1clozed.clozedWord){
        console.log("CORRECT");
        ++rightAnswer;
        console.log(q1clozed.unClozedText);
    }
    else{
        console.log("WRONG");
        console.log(q1clozed.unClozedText);
    }
    if (inquirer.question2 === q2clozed.clozedWord){
        console.log("CORRECT");
        ++rightAnswer;
        console.log(q2clozed.unClozedText);
    }
    else{
        console.log("WRONG");
        console.log(q2clozed.unClozedText);
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
    console.log("The correct answers were" +" "+ q1clozed.clozedWord+ " " + "and" + " "+ q2clozed.clozedWord)

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