//loading in inquireer
var inquirer = require('inquirer');
//using constructor here instead of an array to hold/create questions.
var question =  function (front,back) {
    this.front = front;
        this.back= back;

};
console.log(question());
//creating questions with constructor.
var q1 = new question("A kind of monosaccharide starting with the letter 'A' is ...","aldoses");

var q2 = new question("Starches are polymers made exclusively from ...","glucose");


//initializes inquirer to ask questions
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
    }]).then(function (inquirer) {
if (inquirer.question1 === q1.back){
    console.log("CORRECT");
}
else{
    console.log("WRONG");
}
    if (inquirer.question2 === q2.back){
        console.log("CORRECT");
    }
    else{
        console.log("WRONG");
    }
    if (console.log("WRONG") === true){
        console.log("The correct answers were" + q1.back + "and" +q2.back)
    }
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