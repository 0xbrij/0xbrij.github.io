document.addEventListener("DOMContentLoaded", () => {
  let questionCount = 10;
  let questionType = "addition";
  let currentQuestion = 0;
  let correctAnswers = 0;
  let questions = [];
  let startTime = 0;
  let totalTime = 0;

  const operationTypeDropdown = document.getElementById("operationType");
  const questionCountInput = document.getElementById("questionCount");
  const startQuizBtn = document.getElementById("startQuizBtn");
  const quizContainer = document.getElementById("quizContainer");
  const questionElement = document.getElementById("question");
  const answerInput = document.getElementById("answerInput");
  const feedback = document.getElementById("feedback");
  const timerElement = document.getElementById("timer");
  const remainingQuestions = document.getElementById("remainingQuestions");
  const resultSummary = document.getElementById("resultSummary");
  const resultsContainer = document.getElementById("resultsContainer");
  const viewPastPerformanceBtn = document.getElementById("viewPastPerformanceBtn");
  const pastPerformanceTable = document.getElementById("pastPerformanceTable").querySelector("tbody");
  const pastPerformanceContainer = document.getElementById("pastPerformanceContainer");
  const clearHistoryBtn = document.getElementById("clearHistoryBtn");

  const localStorageKey = "mathPracticePerformance";

  answerInput.addEventListener("input", () => {
    checkAnswer(); // Call the updated checkAnswer function
  });

  function generateRandomNumber(digits, difficulty) {
    let min = Math.pow(10, digits - 1);
    let max = Math.pow(10, digits) - 1;

    // Adjust ranges based on difficulty for multiplication
    if (difficulty === "easy" && digits === 1) {
      min = 1;
      max = 9; // Single digits
    } else if (difficulty === "median" && digits === 2) {
      min = 10;
      max = 20; // Double digits between 10 to 20
    } else if (difficulty === "difficult" && digits === 2) {
      min = 20;
      max = 50; // Double digits between 20 to 50
    } else if (difficulty === "veryDifficult" && digits === 2) {
      min = 50;
      max = 100; // Double digits between 50 to 100
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateQuestion() {
    const difficulty = document.getElementById("difficulty").value;
    let num1,
      num2,
      operation = questionType;

    // Adjust question based on difficulty
    if (questionType === "addition" || questionType === "subtraction") {
      let digits = 2; // Default to median (2 digits)
      if (difficulty === "easy") digits = 1;
      else if (difficulty === "difficult") digits = 3;
      else if (difficulty === "veryDifficult") digits = 4;

      num1 = generateRandomNumber(digits, difficulty);
      num2 = generateRandomNumber(digits, difficulty);
    } else if (questionType === "multiplication") {
      if (difficulty === "easy") {
        num1 = generateRandomNumber(1, "easy");
        num2 = generateRandomNumber(1, "easy");
      } else if (difficulty === "median") {
        num1 = generateRandomNumber(2, "median");
        num2 = generateRandomNumber(2, "median");
      } else if (difficulty === "difficult") {
        num1 = generateRandomNumber(2, "difficult");
        num2 = generateRandomNumber(2, "difficult");
      } else if (difficulty === "veryDifficult") {
        num1 = generateRandomNumber(2, "veryDifficult");
        num2 = generateRandomNumber(2, "veryDifficult");
      }
    }

    if (questionType === "all") {
      const operations = ["addition", "subtraction", "multiplication"];
      operation = operations[Math.floor(Math.random() * operations.length)];
    }

    let question = {};
    switch (operation) {
      case "addition":
        question = { num1, num2, operation: "+", answer: num1 + num2 };
        break;
      case "subtraction":
        question = { num1, num2, operation: "-", answer: num1 - num2 };
        break;
      case "multiplication":
        question = { num1, num2, operation: "x", answer: num1 * num2 };
        break;
    }
    questions.push(question);
    return question;
  }

  function displayQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = `${current.num1} ${current.operation} ${current.num2} = ?`;
    remainingQuestions.textContent = `Question ${currentQuestion + 1} of ${questionCount}`;
    answerInput.value = "";
    answerInput.focus();
    feedback.textContent = "";
  }

  function startTimer() {
    startTime = new Date().getTime();
    setInterval(() => {
      const now = new Date().getTime();
      const seconds = Math.floor((now - startTime) / 1000);
      timerElement.textContent = `Time: ${seconds}s`;
    }, 1000);
  }

  function checkAnswer() {
    const current = questions[currentQuestion];
    const userAnswer = answerInput.value; // Get the user input as a string

    // Check if the user input length matches the expected digits
    if (userAnswer.length >= current.answer.toString().length) {
      // Validate the answer only if the input length is sufficient
      if (parseInt(userAnswer, 10) === current.answer) {
        correctAnswers++;
        feedback.textContent = "Correct!";
        if (currentQuestion < questionCount - 1) {
          currentQuestion++;
          generateQuestion();
          displayQuestion();
        } else {
          finishQuiz();
        }
      } else {
        feedback.textContent = "Incorrect! Try again."; // Show incorrect message
        answerInput.value = ""; // Clear the input box for another attempt
      }
    }
  }

  function finishQuiz() {
    quizContainer.classList.add("hidden");
    resultsContainer.classList.remove("hidden");
    totalTime = Math.floor((new Date().getTime() - startTime) / 1000);
    resultSummary.textContent = `You got ${correctAnswers} out of ${questionCount} correct in ${totalTime} seconds.`;

    const pastPerformance = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const averageTimePerQuestion = totalTime / questionCount; // Calculate average time for current attempt
    let bestJobMessage = "";

    if (pastPerformance.length > 0) {
      const lastPerformance = pastPerformance[pastPerformance.length - 1];
      const pastAverageTime = lastPerformance.totalTime / lastPerformance.totalQuestions; // Calculate past average time

      if (averageTimePerQuestion < pastAverageTime) {
        bestJobMessage = "Best job!";
      }
    }

    performanceMessage.textContent = bestJobMessage; // Display message
    savePerformance();

    // Reset button to "Start Quiz"
    startQuizBtn.textContent = "Start Quiz";
  }

  function savePerformance() {
    let pastPerformance = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const averageTimePerQuestion = (totalTime / questionCount).toFixed(2); // Calculate average time per question
    pastPerformance.push({
      operation: questionType,
      totalQuestions: questionCount,
      correctAnswers: correctAnswers,
      totalTime: totalTime,
      timePerQuestion: averageTimePerQuestion, // Store the time per question
    });
    localStorage.setItem(localStorageKey, JSON.stringify(pastPerformance));
  }

  function loadPastPerformance() {
    pastPerformanceTable.innerHTML = "";
    const pastPerformance = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    if (pastPerformance.length === 0) {
      pastPerformanceTable.innerHTML = `<tr><td colspan="5">No past performance data available.</td></tr>`;
      pastPerformanceContainer.classList.remove("hidden");
      return;
    }
    pastPerformance.forEach((performance) => {
      const averageTimePerQuestion = (performance.totalTime / performance.totalQuestions).toFixed(2); // Calculate average dynamically
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${performance.operation}</td>
            <td>${performance.totalQuestions}</td>
            <td>${performance.correctAnswers}</td>
            <td>${performance.totalTime}s</td>
            <td>${averageTimePerQuestion}s</td>
        `;
      pastPerformanceTable.appendChild(row);
    });
    pastPerformanceContainer.classList.remove("hidden");
  }

  clearHistoryBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all past performance data?")) {
      localStorage.removeItem(localStorageKey);
      pastPerformanceTable.innerHTML = `<tr><td colspan="5">No past performance data available.</td></tr>`;
      pastPerformanceContainer.classList.remove("hidden");
    }
  });

  startQuizBtn.addEventListener("click", () => {
    if (startQuizBtn.textContent === "Start Quiz") {
      // Initialize and start the quiz
      questionType = operationTypeDropdown.value;
      questionCount = parseInt(questionCountInput.value, 10);
      questions = [];
      correctAnswers = 0;
      currentQuestion = 0;
      quizContainer.classList.remove("hidden");
      resultsContainer.classList.add("hidden");
      pastPerformanceContainer.classList.add("hidden");
      generateQuestion();
      displayQuestion();
      startTimer();

      // Change button to "End Quiz"
      startQuizBtn.textContent = "End Quiz";
    } else {
      // End the quiz if "End Quiz" is pressed
      finishQuiz();
    }
  });

  answerInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkAnswer();
    } else if (e.key === "Backspace") {
      answerInput.value = answerInput.value.slice(0, -1);
    }
  });

  viewPastPerformanceBtn.addEventListener("click", () => {
    loadPastPerformance();
    pastPerformanceContainer.classList.remove("hidden");
  });
});
