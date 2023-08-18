const quizData = [
  {
    question: "How old is Shagun",
    a: "18",
    b: "11",
    c: "23",
    d: "12",
    correct: "a",
  },
  {
    question: "what is most used programming language",
    a: "java",
    b: "js",
    c: "c++",
    d: "c",
    correct: "b",
  },
  {
    question: "favourite singer?",
    a: "kiing",
    b: "paradox",
    c: "mc stan",
    d: "emiway",
    correct: "d",
  },
  {
    question: "HTML stands for?",
    a: "hyper text manipulation language",
    b: "hyper test markup language",
    c: "hyper time mask language",
    d: "hyper text markup language",
    correct: "d",
  },
  {
    question: "Shagun birthday?",
    a: "7 june 2004",
    b: "7 june 2003",
    c: "7 june 2005",
    d: "7 june 2006",
    correct: "b",
  },
];
const quiz = document.getElementById("quiz");

const answersEls = document.querySelectorAll(".answer");
// question
const questionE1 = document.getElementById("question");
// options a b c d
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
// submit button
const submitBtn = document.getElementById("submit-btn");

let currentQuiz = 0;
let score = 0;
// let answer = undefined;

loadQuiz();
function loadQuiz() {
  deselectAnswer();
  
  const currentQuizData = quizData[currentQuiz];

  questionE1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  
  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswer() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2> you answered correctly  ${score}/ ${quizData.length} questions.</h2>
      <button onclick="location.reload()">Reload</button>`
    }
  }
});

