// let start = document.querySelector("#start");
// let guide = document.querySelector("#guide");
// let continueBtn = document.querySelector("#continue");
// let quiz = document.querySelector("#quiz");
// let questionNo = document.querySelector("#questionNo");
// let questionText = document.querySelector("#questionText"); 

// let option1 = document.querySelector("#option1");
// let option2 = document.querySelector("#option2");
// let option3 = document.querySelector("#option3");
// let option4 = document.querySelector("#option4");

// let total_correct = document.querySelector("#total_correct");
// let next_question = document.querySelector("#next_question");
 
// let result = document.querySelector("#result");
// let points = document.querySelector("#points");
// let quit = document.querySelector("#quit");


// let choice_que = document.querySelectorAll(".choice_que"); 
 
// let index = 0;

// let correct = 0;
// let UserAns = undefined;
// let interval = 0;

// let MCQS = [
//     {
//         question: "What do the colors of the American flag symbolize?",
//         choice1: "Nothing, the Founding Fathers simply found them aesthetically pleasing",
//         choice2: "Red: hardiness, White: purity, Blue: perseverance",
//         choice3: "Red: compassion, White: peace and unity, Blue: remembrance",
//         choice4: "Red: revolution, White: stability, Blue: integrity",
//         answer: 1 // Red: hardiness, White: purity, Blue: perseverance
//     },

//     {
//         question: "Where was the first fourth of July celebration with a fireworks display held?",
//         choice1: "Washington, D.C.",
//         choice2: "New York, New York",
//         choice3: "Boston, Massachusetts",
//         choice4: "Atlanta Georgia",
//         answer: 2 // Boston, Massachusetts
//     },

//     {
//         question: "2014 marked the 200th birthday of:",
//         choice1: "The Lincoln Memorial",
//         choice2: "The Smithsonian Institution",
//         choice3: "The Star-Spangled Banner",
//         choice4: "The American flag",
//         answer: 2 // The Star-Spangled Banner
//     },

//     {
//         question: "Which of the following is not one of the original 13 colonies?",
//         choice1: "Pennsylvania",
//         choice2: "Virginia",
//         choice3: "Delaware",
//         choice4: "Vermont",
//         answer: 3 //Vermont
//     },

//     { 
//         question: "Who was the tenth president of the United States?",
//         choice1: "Martin Van Buren",
//         choice2: "William Henry Harrison",
//         choice3: "James K. Polk",
//         choice4: "John Tyler",
//         answer: 3 //John Tyler
//     },

//     {
//         question: "Which of these did the United States not gain through the Louisiana Purchase?",
//         choice1: "Tennessee",
//         choice2: "Arkansas",
//         choice3: "Nebraska",
//         choice4: "South Dakota",
//         answer: 0 //Tenessee
//     },

//     {
//         question: "World War 2 began in 1939. What year did it end?",
//         choice1: 1943,
//         choice2: 1945,
//         choice3: 1947,
//         choice4: 1951,
//         answer: 1 //1945
//     },

//     {
//         question: "Which of the following did not take place in the 1960s?",
//         choice1: "The Vietnam War",
//         choice2: "The Korean War",
//         choice3: "The Civil Rights Movement",
//         choice4: "JFK was assassinated",
//         answer: 1 //The Korean war
//     },

//     {
//         question: "What war did the Treaty of Versailles bring to an end?",
//         choice1: "French and Indian War",
//         choice2: "War of 1812",
//         choice3: "World War 1",
//         choice4: "World War 2",
//         answer: 2 // World war 1
//     },

//     {
//         question: "What was the era after the Civil War called?",
//         choice1: "The New Deal Coalition",
//         choice2: "The Market Revolution",
//         choice3: "Reconstruction",
//         choice4: "Manifest Destiny",
//         answer: 2 //Reconstruction
//     }
// ];

// start.addEventListener("click", ()=> {
//     start.style.display = "none";
//     guide.style.display = "block";
// })


// let loadData = ()=> {
//     questionNo.innerText = index + 1 + ". "; 
//     questionText.innerText = MCQS[index].question;
//     option1.innerText = MCQS[index].choice1;
//     option2.innerText = MCQS[index].choice2;
//     option3.innerText = MCQS[index].choice3;
//     option4.innerText = MCQS[index].choice4;
// }

// loadData();

// continueBtn.addEventListener("click", ()=> { 
//     quiz.style.display = "block",
//     guide.style.display = "none";
//     loadData();
    
//     choice_que.forEach(removeActive => {
//         removeActive.classList.remove("active");
//     })
//     total_correct.style.display = "block";
//     total_correct.innerHTML = `${correct = 0} out of ${MCQS.length} Questions`;
// })  


// choice_que.forEach((choices, choiceNo) => {
//     choices.addEventListener("click", ()=> {
//         choices.classList.add("active"); 

//         if(choiceNo === MCQS[index].answer) {
//             correct++;
//         }else {
//             correct += 0;
//         }

//         for(i = 0; i <= 3; i++ ) {
//             choice_que[i].classList.add("disabled");
//         }
//     });
// });

// next_question.addEventListener("click", () => {
//     if(index !== MCQS.length - 1) {
//         index++;
//         choice_que.forEach(removeActive => {
//             removeActive.classList.remove("active");
//         })

//         loadData();

//         total_correct.style.display = "block";
//         total_correct.innerHTML = `${correct} out of ${MCQS.length} Questions correct`;
//     } else {
//         index = 0;
//         quiz.style.display = "none";
//         points.innerHTML = `You got ${correct} out of ${MCQS.length} Questions correct`;
//         result.style.display = "block";
//     }
//     for(i = 0; i <= 3; i++) {
//         choice_que[i].classList.remove("disabled");
//     }
// })  
  
// quit.addEventListener("click", ()=> { 
//     start.style.display = "block";
//     result.style.display = "none";
// })

const startQuizBtn = document.querySelector(".quizStartQuizBtn");
const startQuizBtn2 = document.querySelector(".quizStartQuizBtn2");
const quizContainer = document.querySelector(".quizContainer");
const links = document.querySelectorAll("#quizChoicesContainer > a");
const quizGuide = document.querySelector(".quizGuide");
const continueBtn = document.querySelector(".quizContinueBtn");
const quiz = document.querySelector(".quizAssessment");
const quizNextBtn = document.querySelector(".quizNextBtn");
const quizQuestion = document.querySelector(".quizQuestion");
const quizChoice1 = document.querySelector(".quizChoice1");
const quizChoice2 = document.querySelector(".quizChoice2");
const quizChoice3 = document.querySelector(".quizChoice3");
const quizChoice4 = document.querySelector(".quizChoice4");
const quizFinished = document.querySelector(".quizFinished");
const quizScore = document.querySelector(".quizScore");
const h3 = document.querySelector(".quizResults");

let i = 1;

quizGuide.style.display = "none"; 
quiz.style.display= "none";
quizFinished.style.display = "none";

// ALL QUESTIONS

const questionsAnswers = [
        {
            question: "What do the colors of the American flag symbolize?",
            a: "Nothing, the Founding Fathers simply found them aesthetically pleasing",
            b: "Red: hardiness, White: purity, Blue: perseverance",
            c: "Red: compassion, White: peace and unity, Blue: remembrance",
            d: "Red: revolution, White: stability, Blue: integrity",
            answer: "Red: hardiness, White: purity, Blue: perseverance" 
        },
    
        {
            question: "Where was the first fourth of July celebration with a fireworks display held?",
            a: "Washington, D.C.",
            b: "New York, New York",
            c: "Boston, Massachusetts",
            d: "Atlanta Georgia",
            answer: "Boston, Massachusetts" 
        },
    
        {
            question: "2014 marked the 200th birthday of:",
            a: "The Lincoln Memorial",
            b: "The Smithsonian Institution",
            c: "The Star-Spangled Banner",
            d: "The American flag",
            answer: "The Star-Spangled Banner" 
        },
    
        {
            question: "Which of the following is not one of the original 13 colonies?",
            a: "Pennsylvania",
            b: "Virginia",
            c: "Delaware",
            d: "Vermont",
            answer: "Vermont" 
        },
    
        { 
            question: "Who was the tenth president of the United States?",
            a: "Martin Van Buren",
            b: "William Henry Harrison",
            c: "James K. Polk",
            d: "John Tyler",
            answer: "John Tyler"
        },
    
        {
            question: "Which of these did the United States not gain through the Louisiana Purchase?",
            a: "Tennessee",
            b: "Arkansas",
            c: "Nebraska",
            d: "South Dakota",
            answer: "Tennessee" 
        },
    
        {
            question: "World War 2 began in 1939. What year did it end?",
            a: 1943,
            b: 1945,
            c: 1947,
            d: 1951,
            answer: "1945" 
        },
    
        {
            question: "Which of the following did not take place in the 1960s?",
            a: "The Vietnam War",
            b: "The Korean War",
            c: "The Civil Rights Movement",
            d: "JFK was assassinated",
            answer: "The Korean War"
        },
    
        {
            question: "What war did the Treaty of Versailles bring to an end?",
            a: "French and Indian War",
            b: "War of 1812",
            c: "World War 1",
            d: "World War 2",
            answer: "World War 1" 
        },
    
        {
            question: "What was the era after the Civil War called?",
            a: "The New Deal Coalition",
            b: "The Market Revolution",
            c: "Reconstruction",
            d: "Manifest Destiny",
            answer: "Reconstruction"  
        }
];


startQuizBtn.addEventListener("click", () => { 
    startQuizBtn.style.display = "none";
    quizGuide.style.display = "block";
});

function initialQuestions() {
    quizQuestion.textContent = questionsAnswers[0].question;
    quizChoice1.textContent = questionsAnswers[0].a;
    quizChoice2.textContent = questionsAnswers[0].b;
    quizChoice3.textContent = questionsAnswers[0].c;
    quizChoice4.textContent = questionsAnswers[0].d; 
};

const loadQuestionsAnswers = function(i) {

    quizQuestion.textContent = questionsAnswers[i].question;
    quizChoice1.textContent = questionsAnswers[i].a; 
    quizChoice2.textContent = questionsAnswers[i].b;
    quizChoice3.textContent = questionsAnswers[i].c; 
    quizChoice4.textContent = questionsAnswers[i].d;

};



continueBtn.addEventListener("click", () => {
    quizGuide.style.display = "none";
    quiz.style.display = "block";
    initialQuestions();
    quizScore.textContent = `You have ${counter} out of 10 questions correct`;
});

let counter = 0;

for(let k = 0; k < 4; k++) {
    links[k].addEventListener('click', () => { 
        for(let j = 0; j < questionsAnswers.length; j++) {
            if(links[k].textContent === questionsAnswers[j].answer) {
                counter++;
                links[k].classList.add("rightAnswerActive");
                quizScore.textContent = `You have ${counter} out of 10 questions correct`;
                allDisable();
                quizNextBtn.style.backgroundColor = "seagreen";
            }
            else if(links[k].textContent !== questionsAnswers[j].answer) {
                allDisable();
                quizNextBtn.style.backgroundColor = "seagreen";
            } 
        }
    })
}

function allDisable() {
    for(let z = 0; z < 4; z++) {
        links[z].classList.add("noPointer");
    }
}

quizNextBtn.addEventListener("click", () => {
    if(i < questionsAnswers.length) {
       loadQuestionsAnswers(i);
        i++; 
    } else {
        console.log(i);
        quiz.style.display= "none";
        quizFinished.style.display = "block";
        h3.textContent = `You got ${counter} out of 10 questions correct`;
        counter = 0;
    }    
    const rightAnswerActive = document.querySelector(".rightAnswerActive");
    const wrongAnswerActive = document.querySelector(".wrongAnswerActive");
    for(let k = 0; k < 4; k++) {
        links[k].classList.remove("rightAnswerActive");
        links[k].classList.remove("wrongAnswerActive");  
        links[k].classList.remove("noPointer");
    }
    quizNextBtn.style.backgroundColor = "white";
});


startQuizBtn2.addEventListener("click", () => { 
    quizGuide.style.display = "block";
    quizFinished.style.display = "none";
    i = 1;
});