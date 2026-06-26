const quiz = [

{
question:"What does HTML stand for?",

answers:[
"Hyper Text Markup Language",
"Home Tool Markup Language",
"High Text Machine Language",
"Hyperlinks Text Language"
],

correct:0

},

{

question:"Which language is used for styling?",

answers:[
"Python",
"Java",
"CSS",
"C++"
],

correct:2

},

{

question:"Which keyword is used to declare a variable?",

answers:[
"int",
"var",
"float",
"char"
],

correct:1

}

];

let currentQuestion = 0;

let score = 0;

const question = document.getElementById("question");

const answers = document.getElementById("answers");

const next = document.getElementById("next");

const scoreText = document.getElementById("score");

function loadQuestion(){

answers.innerHTML="";

question.innerText=quiz[currentQuestion].question;

for(let i=0;i<quiz[currentQuestion].answers.length;i++){

let button=document.createElement("button");

button.innerText=quiz[currentQuestion].answers[i];

button.addEventListener("click",function(){

if(i===quiz[currentQuestion].correct){

score++;

}

currentQuestion++;

if(currentQuestion<quiz.length){

loadQuestion();

}
else{

question.innerText="Quiz Finished";

answers.innerHTML="";

next.style.display="none";

scoreText.innerText="Your Score: "+score+" / "+quiz.length;

}

});

answers.appendChild(button);

}

}

loadQuestion();