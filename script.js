/* .js files add interaction to your website */
var LearnToBeScore = 0; 
var SchoolhouseScore = 0;
var UpchieveScore = 0;
var questionCount = 0;

var result = document.getElementById("result");
var restart = document.getElementById("restart");

if (restart) {
  restart.addEventListener("click",restartQuiz);
}

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");

var q3a1 = document.getElementById ("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

var q4a1 = document.getElementById ("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");

q1a1.addEventListener("click", LearnToBe);
q1a2.addEventListener ("click", Upchieve);
q1a3.addEventListener("click", Schoolhouse)

q2a1.addEventListener ("click", LTBSchool); 
q2a2.addEventListener ("click", Upchieve);

q3a1.addEventListener ("click", LTBChieve);
q3a2.addEventListener ("click", Schoolhouse);

q4a1.addEventListener("click", LTBSchool)
q4a2.addEventListener("click", LTBChieve)
q4a3.addEventListener ("click", LearnToBe)

//outcomes 
function LearnToBe(){
  LearnToBeScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " LearnToBeScore = " + LearnToBeScore);

  if (questionCount == 4) {
    updateResults();
    console.log("The quiz is done!");
    if (LearnToBeScore >=3){
      console.log("Learn To Be is the best suit for you! Learn more by clicking volunteer opportunities above! " );
    } else if (UpchieveScore >= 3 ) {
      console.log ("Upchieve is a great fit for you! Learn more by clicking volunteer opportunities above!");
    } else if (SchoolhouseScore >= 3 ) {
      console.log ("Schoolhouse is the best choice for you! Learn more by clicking volunteer opportunities above!");
    }
  }
}

function LTBChieve(){
  LearnToBeScore += 1;
  UpchieveScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " LearnToBeScore = " + LearnToBeScore);

  if (questionCount == 4) {
    updateResults();
    console.log("The quiz is done!");
    if (LearnToBeScore >=3){
      console.log("Learn To Be is the best suit for you! Learn more by clicking volunteer opportunities above! " );
    } else if (UpchieveScore >= 3 ) {
      console.log ("Upchieve is a great fit for you! Learn more by clicking volunteer opportunities above!");
    } else if (SchoolhouseScore >= 3 ) {
      console.log ("Schoolhouse is the best choice for you! Learn more by clicking volunteer opportunities above!");
    }
  }
}

function LTBSchool(){
  LearnToBeScore += 1;
  SchoolhouseScore +=1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " LearnToBeScore = " + LearnToBeScore);

  if (questionCount == 4) {
    updateResults();
    console.log("The quiz is done!");
    if (LearnToBeScore >=3){
      console.log("Learn To Be is the best suit for you! Learn more by clicking volunteer opportunities above! " );
    } else if (UpchieveScore >= 3 ) {
      console.log ("Upchieve is a great fit for you! Learn more by clicking volunteer opportunities above!");
    } else if (SchoolhouseScore >= 3 ) {
      console.log ("Schoolhouse is the best choice for you! Learn more by clicking volunteer opportunities above!");
    }
  }
}

function Schoolhouse(){
  SchoolhouseScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " LearnToBeScore = " + LearnToBeScore);

  if (questionCount == 4) {
    updateResults();
    console.log("The quiz is done!");
    if (LearnToBeScore >=3){
      console.log("Learn To Be is the best suit for you! Learn more by clicking volunteer opportunities above! " );
    } else if (UpchieveScore >= 3 ) {
      console.log ("Upchieve is a great fit for you! Learn more by clicking volunteer opportunities above!");
    } else if (SchoolhouseScore >= 3 ) {
      console.log ("Schoolhouse is the best choice for you! Learn more by clicking volunteer opportunities above!");
    }
  }
}

function Upchieve(){
  UpchieveScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " LearnToBeScore = " + LearnToBeScore);

  if (questionCount == 4) {
    updateResults();
    console.log("The quiz is done!");
    if (LearnToBeScore >=3){
      console.log("Learn To Be is the best suit for you! Learn more by clicking volunteer opportunities above! " );
    } else if (UpchieveScore >= 3 ) {
      console.log ("Upchieve is a great fit for you! Learn more by clicking volunteer opportunities above!");
    } else if (SchoolhouseScore >= 3 ) {
      console.log ("Schoolhouse is the best choice for you! Learn more by clicking volunteer opportunities above!");
    }
  }
}

//Others
  
function updateResults (){
  if (LearnToBeScore >=3){
    result.innerHTML = "Learn To Be is the best suit for you! Learn more by clicking volunteer opportunities above! ";
  } else if (UpchieveScore >= 3 ) {
    result.innerHTML = ("Upchieve is a great fit for you! Learn more by clicking volunteer opportunities above!");
  } else if (SchoolhouseScore >= 3 ) {
    result.innerHTML = ("Schoolhouse is the best choice for you! Learn more by clicking volunteer opportunities above!");
  }
}

function restartQuiz(){
  variableReset();
  console.log("Quiz is restarted");
}

function variableReset() {
  result.innerHTML = "Your result is... "
  LearnToBeScore = 0;
  UpchieveScore = 0; 
  SchoolhouseScore = 0;
  questionCount = 0;
}