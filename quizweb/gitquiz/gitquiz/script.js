document.addEventListener("DOMContentLoaded", function () {
    const startPage = document.querySelector(".start-page");
    const quizSection = document.querySelector(".quiz-section");
    const playerNameInput = document.getElementById("playerName");
    const questionElm = document.getElementById("question");
    const option_1 = document.getElementById("option_1");
    const option_2 = document.getElementById("option_2");
    const option_3 = document.getElementById("option_3");
    const option_4 = document.getElementById("option_4");
    const answerElm = document.querySelectorAll(".answer");
    const submitBtn = document.getElementById("submit");
    const timerDiv = document.getElementById("timer");
    
    let currentQuiz = 0;
    let score = 0;
    let timer;
  
    const questions = [
      {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
        correctAnswer: 0,
      },
      {
        question: "Which programming language is often used for web development?",
        options: ["Java", "Python", "JavaScript", "C++"],
        correctAnswer: 2,
      }, {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correctAnswer: 1,
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
      correctAnswer: 3,
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: 1,
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correctAnswer: 2,
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["1905", "1912", "1920", "1931"],
      correctAnswer: 1,
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
      correctAnswer: 1,
    },
    {
      question: "What is the currency of Brazil?",
      options: ["Peso", "Euro", "Dollar", "Real"],
      correctAnswer: 3,
    },
    {
      question: "What is the largest mammal on Earth?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: 1,
    },
  
      // Add more questions here...
    ];
  
    // Define startQuiz globally
    window.startQuiz = () => {
      const playerName = playerNameInput.value.trim();
      if (playerName !== "") {
        startPage.style.display = "none";
        quizSection.classList.remove("hidden");
        loadQuiz();
        startTimer();
      } else {
        alert("Please enter your name to start the quiz.");
      }
    };
  
    const loadQuiz = () => {
      const { question, options } = questions[currentQuiz];
  
      questionElm.innerText = `${currentQuiz + 1}: ${question}`;
  
      options.forEach((curOption, index) => {
        window[`option_${index + 1}`].innerText = curOption;
      });
    };
  
    const startTimer = () => {
      let time = 60; // Set the quiz duration in seconds
  
      timer = setInterval(function () {
        timerDiv.innerText = `Time Remaining: ${time} seconds`;
  
        if (time === 0) {
          clearInterval(timer);
          finishQuiz();
        }
  
        time--;
      }, 1000);
    };
  
    const getSelectedoption = () => {
      const answerElement = Array.from(answerElm);
      return answerElement.findIndex((curElem) => curElem.checked);
    };
  
    const deselectedAnswers = () => {
      answerElm.forEach((curElem) => {
        curElem.checked = false;
      });
    };
  
    const finishQuiz = () => {
      quiz.innerHTML = `
        <div class="result"> 
          <h2>⏰ Time's up! Your Score: ${score}/${questions.length} Correct Answers</h2>
          <p> Congratulations on completing the Quiz, ${playerName}! 🎉</p>
          <button class="reload-button" onclick="resetQuiz()">Play Again 🔁</button>
        </div>
      `;
    };
  
    const resetQuiz = () => {
      currentQuiz = 0;
      score = 0;
      clearInterval(timer);
      startPage.style.display = "block";
      quizSection.classList.add("hidden");
      playerNameInput.value = "";
    };
  
    submitBtn.addEventListener("click", () => {
      const selectedOptionIndex = getSelectedoption();
  
      if (selectedOptionIndex === questions[currentQuiz].correctAnswer) {
        score += 1;
      }
  
      currentQuiz++;
  
      if (currentQuiz < questions.length) {
        deselectedAnswers();
        loadQuiz();
      } else {
        clearInterval(timer);
        finishQuiz();
      }
    });
  
    const quizButtons = document.querySelectorAll(".quiz-button");
  
    quizButtons.forEach((button) => {
      button.addEventListener("click", startQuiz);
    });
  });
  