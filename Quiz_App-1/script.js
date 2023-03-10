let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;


/*<!--Questions and Answers-->*/

const quizArray = [
    {
        id: "0",
        question: "What is jQuery slogan",
        options: [
            "Write more do less",
            "Write less do more",
            "Dont write do something",
            "Write and do nothing",
        ],
        correct: "Write less do more",
    },

    {
        id: "1",
        question: "What does NYSC stands for....?",
        options: [
            "National Youth Service Corps",
            "Nations Youth Service Corps",
            "National Young Service Corps",
            "Nations Youth Services Corps",
        ],
        correct: "National Youth Service Corps",
    },

    {
        id: "2",
        question: "What's the full meaning of JS...?",
        options: [
            "Java Scripts",
            "JavaScripts",
            "Java Script",
            "JavaScript",
        ],
        correct: "JavaScript",
    },

    {
        id: "3",
        question: "Who is the President of Nigeria",
        options: [
            "Buhari",
            "Atiku",
            "Obi",
            "Tinubu",
        ],
        correct: "Buhari",
    },

    {
        id: "4",
        question: "What does NTA stands for?",
        options: [
           "National Television Authority",
           "Nigerians Television Authority",
           "Nations Television Authority",
           "National Television Authorities",
        ],
        correct:  "National Television Authority"
    },

    {
        id: "5",
        question: "What is the slogan of Kwara State?",
        options: [
           "State of Harmony",
           "State of Peace",
           "State of Joy",
           "State of Alimi",
        ],
        correct:  "State of Harmony",
    },

    {
        id: "6",
        question: "What Local Government is not in Niger State?",
        options: [
           "Mariga",
           "Mashegu",
           "Rijau",
           "Oyun",
        ],
        correct: "Oyun",
    },

    {
        id: "7",
        question: "What Local Government is in Kwara State? ",
        options: [
           "Offa",
           "Tanke",
           "Oke odo",
           "Elenjare"
        ],
        correct: "Offa",
    },

    {
        id: "8",
        question: "What State is in Nigeria?",
        options: [
           "Georgia",
           "Barcelona",
           "Borno",
           "Texas"
        ],
        correct: "Borno",
    },

    {
        id: "9",
        question: "What is the full meaning of USA?",
        options: [
            "United States of Americans",
            "Unity State of America",
            "United State of Americans",
            "United State of America",
        ],
        correct: "United State of America",
    },

    {
        id: "10",
        question: "What is the capital of Enugu?",
        options: [
           "Ebonyi",
           "Abia",
           "Enugu",
           "Owerri",
        ],
        correct: "Enugu",
    },
];

restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventListener("click", (displayNext = () => {
    questionCount += 1;

    if(questionCount == quizArray.length){
        displayContainer.classList.add('hide');
        scoreContainer.classList.remove("hide");
        userScore.innerHTML = "Your Score is " +
        scoreCount + " out of " + questionCount;
    }
    else{
        countOfQuestion.innerHTML = questionCount + 1 +
        " of " + quizArray.length + " Question";

        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay();
    }
})
);

const timerDisplay = () => {
    countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
        clearInterval(countdown);
        displayNext();
    }

    }, 1000);
};

const quizDisplay = (questionCount) =>{
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};

function quizCreater() {
    quizArray.sort(() => Math.random() - 0.5 );

    for (let i of quizArray) {
        i.options.sort(() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
        <button class="option-div" onclick="checker(this)"> ${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)"> ${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)"> ${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)"> ${i.options[3]}</button>

        `;

        quizContainer.appendChild(div);

    }
}

function checker(userOption){
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if(userSolution === quizArray[questionCount].correct){
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");

        options.forEach((element) => {
            if((element.innerText == quizArray[questionCount].correct)) {
                element.classList.add("correct");
            }
        });
    }

    clearInterval(countdown);
    options.forEach((element) => {
        element.disabled = true;
    });
}

function initial(){
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount= 0;
    scoreCount=0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreater();
    quizDisplay(questionCount);
}

startButton.addEventListener("click", () =>{
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

window.onload= () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};