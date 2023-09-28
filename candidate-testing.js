const input = require('readline-sync');

// TODO 1.1a: Define candidateName // 
let candidateName;
candidateName = (" ");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";

let correctAnswer = "Sally Ride";

let candidateAnswer;
candidateAnswer =(" ");

//TODO: Variables for Part 2
let questions = [
      "Who was the first American woman in space? ",
      "True or false: 5 kilometer == 5000 meters? ",
      "(5 + 3)/2 * 10 = ? ",
      "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
      "What is the minimum crew size for the ISS? "
  ];

let correctAnswers = [
      "Sally Ride",
      "true",
      "40",
      "Trajectory",
      "3"
  ];

let candidateAnswers;
candidateAnswers =[];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //

  candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let x = 0; x < question.length; x++) {
    let candidateAnswer = input.question(questions[x]);
    candidateAnswers.push (candidateAnswer)
   
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let numAnswer = 0;
    for (let x = 0; x < questions.length; x++) {
      if(candidateAnswers[x]===correctAnswers[x]){numAnswer++;
    }
      console.log("Your answer is correct!");
    //} else {
      console.log("Your answer is incorrect!");
}
  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
    grade = (numAnswer/questions.length) * 100
    if (grade >= 80) {
      console.log("passed!");
    } else {
      console.log("failed!");
    }
    console.log(`Your total score for the quiz is: ${grade}%`);

  return grade;
  }

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log();
   console.log("Hi " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
