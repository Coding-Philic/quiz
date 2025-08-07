const quizData = {
  tech: {
    1: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "HighText Machine Language",
          "Hyper Transfer Protocol",
          "Home Text Modern Language"
        ],
        correctAnswer: "Hyper Text Markup Language",
        reason: "HTML stands for Hyper Text Markup Language."
      }
    ],
    2: [
      {
        question: "What does DOM stand for in JavaScript?",
        options: [
          "Document Object Model",
          "Data Output Method",
          "Digital Object Map",
          "Direct Output Mode"
        ],
        correctAnswer: "Document Object Model",
        reason: "DOM represents the page structure as objects in JavaScript."
      }
    ],
    3: [
      {
        question: "Which of the following is NOT a valid JavaScript variable name?",
        options: [
          "_value",
          "$number",
          "1stValue",
          "myVar"
        ],
        correctAnswer: "1stValue",
        reason: "Variable names cannot start with a number in JavaScript."
      }
    ],
    4: [
      {
        question: "What is 'this' keyword in JavaScript?",
        options: [
          "It refers to the previous variable.",
          "It always refers to the global object.",
          "It refers to the object calling the function.",
          "It refers to the function itself."
        ],
        correctAnswer: "It refers to the object calling the function.",
        reason: "`this` refers to the owner object in context."
      }
    ],
    5: [
      {
        question: "What is the result of `typeof null` in JavaScript?",
        options: ["null", "object", "undefined", "boolean"],
        correctAnswer: "object",
        reason: "`typeof null` returns 'object' due to a historical JavaScript bug."
      }
    ]
  },

  management: {
    1: [
      {
        question: "What is the full form of CEO?",
        options: ["Chief Executive Officer", "Central Executive Officer", "Corporate Executive Officer", "Chief Event Officer"],
        correctAnswer: "Chief Executive Officer",
        reason: "CEO stands for Chief Executive Officer."
      }
    ],
    2: [
      {
        question: "What does SWOT in SWOT analysis stand for?",
        options: ["Strengths, Weaknesses, Options, Trends", "Strategy, Work, Output, Task", "Strengths, Weaknesses, Opportunities, Threats", "Success, Work, Output, Timeline"],
        correctAnswer: "Strengths, Weaknesses, Opportunities, Threats",
        reason: "SWOT is a tool used for strategic planning."
      }
    ],
    3: [
      {
        question: "Who proposed the 'Hierarchy of Needs' theory?",
        options: ["Peter Drucker", "Elton Mayo", "Abraham Maslow", "Frederick Taylor"],
        correctAnswer: "Abraham Maslow",
        reason: "Maslow's theory explains human motivation through a hierarchy."
      }
    ],
    4: [
      {
        question: "Which of the following is a leadership style?",
        options: ["Aggressive", "Autocratic", "Delegative", "Collaborative"],
        correctAnswer: "Autocratic",
        reason: "Autocratic leadership involves individual control over decisions."
      }
    ],
    5: [
      {
        question: "What does KPI stand for in performance management?",
        options: ["Key People Involved", "Knowledge Performance Index", "Key Performance Indicator", "Kinetic Performance Idea"],
        correctAnswer: "Key Performance Indicator",
        reason: "KPIs are measurable values showing how effectively goals are met."
      }
    ]
  },

  medical: {
    1: [
      {
        question: "What is the normal body temperature?",
        options: ["98.6°F", "97.2°F", "100.5°F", "96.4°F"],
        correctAnswer: "98.6°F",
        reason: "Normal body temperature is around 98.6°F or 37°C."
      }
    ],
    2: [
      {
        question: "Which organ pumps blood throughout the body?",
        options: ["Liver", "Heart", "Lungs", "Kidney"],
        correctAnswer: "Heart",
        reason: "The heart is responsible for circulating blood."
      }
    ],
    3: [
      {
        question: "Which vitamin is produced when the skin is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        correctAnswer: "Vitamin D",
        reason: "Vitamin D is synthesized when sunlight hits the skin."
      }
    ],
    4: [
      {
        question: "Which part of the brain controls balance and coordination?",
        options: ["Cerebrum", "Cerebellum", "Brainstem", "Medulla"],
        correctAnswer: "Cerebellum",
        reason: "Cerebellum manages body movement and balance."
      }
    ],
    5: [
      {
        question: "Which disease is caused by the deficiency of insulin?",
        options: ["Cancer", "Asthma", "Diabetes", "Arthritis"],
        correctAnswer: "Diabetes",
        reason: "Diabetes occurs when the pancreas doesn’t produce enough insulin."
      }
    ]
  },

  science: {
    1: [
      {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Jupiter", "Mars", "Venus"],
        correctAnswer: "Mars",
        reason: "Mars is called the Red Planet due to its reddish appearance."
      }
    ],
    2: [
      {
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide",
        reason: "Plants absorb CO₂ for photosynthesis."
      }
    ],
    3: [
      {
        question: "Which part of the cell contains DNA?",
        options: ["Ribosome", "Nucleus", "Cell wall", "Cytoplasm"],
        correctAnswer: "Nucleus",
        reason: "DNA is stored inside the nucleus of a cell."
      }
    ],
    4: [
      {
        question: "Water boils at what temperature under normal pressure?",
        options: ["90°C", "100°C", "80°C", "110°C"],
        correctAnswer: "100°C",
        reason: "At sea level, water boils at 100°C."
      }
    ],
    5: [
      {
        question: "What is the chemical formula of table salt?",
        options: ["NaCl", "KCl", "CaCO3", "MgSO4"],
        correctAnswer: "NaCl",
        reason: "Table salt is made of sodium and chlorine (NaCl)."
      }
    ]
  },

 aptitude: {
  1: [
    {
      question: "If the sum of the digits of a two-digit number is 9 and the difference between the digits is 3, what is the number?",
      options: ["36", "45", "54", "63"],
      correctAnswer: "63",
      reason: "Digits sum to 9 and difference is 3. Possible pairs: (6,3) or (3,6). Number 63 fits both."
    }
  ],
  2: [
    {
      question: "A man can row 18 km downstream and 12 km upstream in 4 hours. If the speed of the stream is 2 km/h, what is the speed of the man in still water?",
      options: ["6 km/h", "8 km/h", "7 km/h", "5 km/h"],
      correctAnswer: "7 km/h",
      reason: "Using downstream speed = (x + 2), upstream speed = (x - 2), solve (18/(x+2)) + (12/(x-2)) = 4."
    }
  ],
  3: [
    {
      question: "In a class, 60% of boys and 75% of girls passed an exam. If 52 students passed and the class has 70 students, how many boys are there?",
      options: ["30", "40", "35", "25"],
      correctAnswer: "40",
      reason: "Let boys = x, girls = 70 - x. Equation: 0.6x + 0.75(70 - x) = 52."
    }
  ],
  4: [
    {
      question: "The ratio of ages of two brothers is 5:7. After 5 years, the sum of their ages will be 60. What are their present ages?",
      options: ["20 and 28", "25 and 35", "15 and 21", "30 and 42"],
      correctAnswer: "20 and 28",
      reason: "Let ages be 5x and 7x. (5x+5) + (7x+5) = 60 → solve for x."
    }
  ],
  5: [
    {
      question: "A train 240 meters long passes a man walking at 6 km/h against the direction of the train in 12 seconds. What is the speed of the train?",
      options: ["54 km/h", "66 km/h", "72 km/h", "78 km/h"],
      correctAnswer: "72 km/h",
      reason: "Relative speed = 240/12 = 20 m/s; convert to km/h: 20 × 18/5 = 72 km/h."
    }
  ]
}

};




let selectedCategory = "";
let currentLevel = 1;
let currentQuestion = 0;
let score = 0;
let questionSet = [];

function selectCategory(cat) {
  selectedCategory = cat;
  document.getElementById("category-box").classList.add("hidden");
  document.getElementById("level-box").classList.remove("hidden");
}

function startQuiz(level) {
  currentLevel = level;
  currentQuestion = 0;
  score = 0;
  questionSet = quizData[selectedCategory][level];
  document.getElementById("level-box").classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  const q = questionSet[currentQuestion];
  document.getElementById("question-text").innerText = q.question;
  document.getElementById("reason-box").classList.add("hidden");
  document.getElementById("correctOption").classList.add("hidden");

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((option, index) => {
  const div = document.createElement("div");
  div.className = "option";
  div.innerText = `${index+1}. ${option}`;
  console.log("This is option", option, "at index", index);
  div.onclick = () => handleAnswer(div, option);
  optionsDiv.appendChild(div);
});

  document.getElementById("next-btn").disabled = true;
}

function handleAnswer(element, selected) {function handleAnswer(element, selected) {
  const q = questionSet[currentQuestion];
  const allOptions = document.querySelectorAll(".option");

  allOptions.forEach(opt => {
    opt.onclick = null;
    // Match using endsWith due to the '1. Option' format
    if (opt.innerText.endsWith(q.correctAnswer)) {
      opt.classList.add("correct");
    }
    if (opt.innerText.endsWith(selected) && selected !== q.correctAnswer) {
      opt.classList.add("wrong");
    }
  });

  document.getElementById("reason-box").innerText = `Explanation: ${q.reason}`;
  document.getElementById("reason-box").classList.remove("hidden");
  document.getElementById("correctOption").innerText = `correctAnswer: ${q.correctAnswer}`;
  document.getElementById("correctOption").classList.remove("hidden");




  if (selected === q.correctAnswer) score++;

  document.getElementById("next-btn").disabled = false;
}

  const q = questionSet[currentQuestion];
  const allOptions = document.querySelectorAll(".option");

  allOptions.forEach(opt => {
    opt.onclick = null;
    if (opt.innerText === q.correctAnswer) {
      opt.classList.add("correct");
    }
    if (opt.innerText === selected && selected !== q.correctAnswer) {
      opt.classList.add("wrong");
    }
  });


  document.getElementById("reason-box").innerText = `Explanation: ${q.reason}`;
  document.getElementById("reason-box").classList.remove("hidden");

  
  // Show the correct answer
  document.getElementById("correctOption").innerText = `Correct Answer: ${q.correctAnswer}`;
  document.getElementById("correctOption").classList.remove("hidden");

  if (selected === q.correctAnswer) score++;

  document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questionSet.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("result-box").classList.remove("hidden");
    document.getElementById("score-text").innerText = `You scored ${score} / ${questionSet.length}`;
  }
}

function restart() {
  document.getElementById("result-box").classList.add("hidden");
  document.getElementById("category-box").classList.remove("hidden");
}

function handleAnswer(element, selected) {
  const q = questionSet[currentQuestion];
  const allOptions = document.querySelectorAll(".option");

  allOptions.forEach(opt => {
    opt.onclick = null;
    if (opt.innerText === q.correctAnswer) {
      opt.classList.add("correct");
    }
    if (opt.innerText === selected && selected !== q.correctAnswer) {
      opt.classList.add("wrong");
    }
  });

  document.getElementById("reason-box").innerText = `Explanation: ${q.reason}`;
  document.getElementById("reason-box").classList.remove("hidden");
    document.getElementById("correctOption").innerText = `Correct Answer: ${q.correctAnswer}`;
  document.getElementById("correctOption").classList.remove("hidden");

  if (selected === q.correctAnswer) score++;

  document.getElementById("next-btn").disabled = false;
}
