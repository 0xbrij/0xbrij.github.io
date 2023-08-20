const questions1 = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London"],
        correctAnswer: 0,
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Venus", "Jupiter"],
        correctAnswer: 0,
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "CH4"],
        correctAnswer: 0,
    },
];

let totalQuestions = 900;
const departments = new Set();

String.prototype.splitCSV = function(sep) {
    var regex = /(\s*""[^""]+'|\s*[^,]+)(?=,|$)/g;
    return matches = this.match(regex);    
  }

  function parse(row){
    var insideQuote = false,                                             
        entries = [],                                                    
        entry = [];
    row.split('').forEach(function (character) {                         
      if(character === '"') {
        insideQuote = !insideQuote;                                      
      } else {
        if(character == "," && !insideQuote) {                           
          entries.push(entry.join(''));                                  
          entry = [];                                                    
        } else {
          entry.push(character);                                         
        }                                                                
      }                                                                  
    });
    entries.push(entry.join(''));                                        
    return entries;                                                      
  }

  let ministryQuestionsDict = {};

function csvToJson(csv) {
    // \n or \r\n depending on the EOL sequence
    const lines = csv.split('\n');
    totalQuestions = lines.length - 1;
    console.log('total questions :', totalQuestions);
    const delimeter = ',';
  
    const result = [];
  
    // const headers = lines[0].split(delimeter);
    const headers = lines[0].splitCSV();

    for (const line of lines) {
      const obj = {};
    //   const row = line.split(delimeter);
      const row = parse(line);
    //   console.log("==> - csvToJson - line:", line);
    //   console.log("==> - csvToJson - row:", row);
      
    let tempMinQuestArray = ministryQuestionsDict[row[1]];
    if(tempMinQuestArray == undefined) {
      let arr1 = [];
      arr1.push(row[0]);
      ministryQuestionsDict[row[1]] = arr1;
    } else {
      tempMinQuestArray.push(row[0]);
    }
      
    for (let i = 0; i < headers.length; i++) {
        const header = headers[i];
        obj[header] = row[i];
      }
  
      result.push(obj);
      departments.add(row[2]);
    }
  
    // Prettify output
    return result;
  }
  
  console.log('All Questions DB :', ministryQuestionsDict);

  function uniqueDepartments(departments){
    let outputArray = departments.filter(function (v, i, self) {
        return i == self.indexOf(v);
    });
 
    return outputArray;
  }

  const questions = csvToJson(csv);
//   const alldepartments = uniqueDepartments(departments);
//   const alldepartments = departments.values();
  const alldepartments = Array.from(departments);

  const jsonString = JSON.stringify(questions, null, 2);
  
//   console.log(jsonString);
//   console.log('-----------------------');
  // console.log(alldepartments);



let score = 0;
let correctAnswer = '';
let correctMinistry = '';
let selectedAnswer = '';
let ansRemark = '';
let attemptedNo = 0;
let Ministries = {};
let checkboxStatus = false;
let currentQuestion;
let previousQuestion;
let isBackClicked = false;
let optionLabels;
let options;
let randomQuesArray ;
let impQuestIndex = 0;
let impQuestArray = [];
let ifShowImpQuestions = false;

// set important question in localstorage;
// console.log('Questions marked as Important :', getImportantQuestArray());

function setCurrentQuestion(no){
  localStorage.setItem('currentQuestion', no);
}

function getCurrentQuestion(){
  let cq = localStorage.getItem('currentQuestion');
  if(isNaN(cq) || !cq || cq < 1 || cq > totalQuestions) {cq = 1;}
  return cq;
}

currentQuestion = getCurrentQuestion();
document.getElementById("idSpanShowTotalQuestions").innerHTML = totalQuestions;

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

function randomQuestionArray(totalQuestions){
  for (var a=[],i=0;i<totalQuestions;++i) a[i]=i;
  return shuffle(a);
}



function randomQuestionFromRange(){
  let start = document.getElementById("idShuffleStartNo").value;
  let end = document.getElementById("idShuffleEndNo").value;
  if(isNaN(start) || start > totalQuestions || start < 1) start = 1;
  if(isNaN(end) || end > totalQuestions || end < 1) end = totalQuestions;
  let lengthOfArray = end-start +1;
  console.log('length of Array :', lengthOfArray);
  let tempArray = randomQuestionArray(lengthOfArray);
  tempArray = tempArray.map( a => parseFloat(a) + parseFloat(start));
  console.log('final temp array :', tempArray);
  return tempArray;
}
// let randomQuesArray = randomQuestionArray(totalQuestions);

// randomQuesArray  = randomQuestionFromRange();

// On input of custom question in text box
function onUpdateCurrentQuestion(){
    currentQuestion = document.getElementById("idStartQuesNo").value;
    if(isNaN(currentQuestion)) {
      return;
    };

    console.log('updateCurrentQuestion:crrent questions :', currentQuestion);
    document.getElementsByClassName('randomCheckBox')[0].checked = false;
    checkboxStatus = false;
    setCurrentQuestion(currentQuestion);
    displayQuestion();
}


function displayQuestion1() {
    const questionElement = document.getElementById("question");
    const optionLabels = document.querySelectorAll("[id^='label']");
    const options = document.querySelectorAll("[id^='option']");

    questionElement.textContent = questions1[currentQuestion].question;

    for (let i = 0; i < optionLabels.length; i++) {
        optionLabels[i].textContent = questions1[currentQuestion].options[i];
        options[i].checked = false;
    }
}


// selecting random question checkbox
function onRandomQuestionCheckboxSelect(){
  checkboxStatus = document.getElementsByClassName('randomCheckBox')[0].checked
  console.log('Random questions on - ', checkboxStatus);
  if(checkboxStatus === true) {
    console.log('Random questions selected on');
    randomQuesArray  = randomQuestionFromRange();
    updateCurrentQuestion();
    displayQuestion();
  }
}

function onClickBackQuestion(){
  isBackClicked = true;
  if(isNaN(previousQuestion) || previousQuestion <= 0 || (currentQuestion == previousQuestion)) return;
  ifShowImpQuestions = document.getElementsByClassName('showImpCheckBox')[0].checked;
  if(ifShowImpQuestions) {
    --impQuestIndex;
  }
  else {
    console.log('FIX IT - pushing to random array :');
    if(randomQuesArray) randomQuesArray.push(parseFloat(currentQuestion-1));
  }
  currentQuestion = previousQuestion;
  if(!checkboxStatus) --previousQuestion;
  --attemptedNo;
  displayQuestion();
}

function onClickImportantQuestion(){
  if(isNaN(currentQuestion)) return;
  let questionImpStatus = document.getElementsByClassName('selectImpCheckBox')[0].checked;
  let tempImpQuestArray = getImportantQuestArray();

  let index = tempImpQuestArray.indexOf(parseFloat(currentQuestion));
  console.log('index:',index,'status:', questionImpStatus);
  if(questionImpStatus){
    if(index > -1) return;
    setImportantQuestInArray(currentQuestion);
  } else {
    if(index >= 0){
      tempImpQuestArray.splice(index, 1);
      setImpQuestionArray(tempImpQuestArray);
    }
  }

}

function showImportantQuestions(){
  ifShowImpQuestions = document.getElementsByClassName('showImpCheckBox')[0].checked;
  if(ifShowImpQuestions){
    updateCurrentQuestion();
    displayQuestion();
  }
}

function resetImportantQuestions(){
  if(document.getElementsByClassName('resetImpCheckBox')[0].checked){
    document.getElementsByClassName('showImpCheckBox')[0].checked = false;
    impQuestArray = [];
    impQuestIndex = 0;
    setImpQuestionArray([]);
  }
}

function toggleMarkImportant(){
  let starQStatus = document.getElementsByClassName('selectImpCheckBox')[0].checked;
  if(starQStatus){
    document.getElementsByClassName('selectImpCheckBox')[0].checked = false;
  }else {
    document.getElementsByClassName('selectImpCheckBox')[0].checked = true;
  }
  onClickImportantQuestion();
}

function displayQuestion() {
      const questionElement = document.getElementById("question");
      
     optionLabels = document.querySelectorAll("[id^='label']");
     options = document.querySelectorAll("[id^='option']");

     if(isNaN(currentQuestion) || !currentQuestion || currentQuestion < 0 || currentQuestion > totalQuestions) {
       console.log('currentQuestion :', currentQuestion);
      console.log('Not a valid questions :');
      document.getElementById("idmessage").textContent = "No question left"
      return;
    };

    if(checkImpQuestInArray(currentQuestion)){
      document.getElementsByClassName('selectImpCheckBox')[0].checked = true;
      document.getElementById("question").classList.add('red-font');
    } else {
      document.getElementsByClassName('selectImpCheckBox')[0].checked = false;
      document.getElementById("question").classList.remove('red-font');
    }

    document.getElementById("idmessage").textContent = "";
    console.log('current Qno :', questions[currentQuestion].SNo);
    console.log('Subject     :', questions[currentQuestion].Item);
    console.log('Department  :', questions[currentQuestion].Department);
    console.log('Ministry    :', questions[currentQuestion].Ministry);
    console.log('------------------------------');

    questionElement.textContent = questions[currentQuestion].SNo +". "+ questions[currentQuestion].Item;
    attemptedNo+=1;
    document.getElementById("idattempted").textContent = "Attempted:"+attemptedNo;
    if(checkboxStatus) {
      document.getElementById("idRemainingQuestionsNo").textContent = "   (Remaining:"+randomQuesArray.length+" ) ";
    }

    // let opts = [];
    // opts[0] = questions[currentQuestion].Department;
    // for (let i = 1; i < optionLabels.length; i++) {
    //     opts[i] = questions[randomQuestionNo()].Department;
    // }


    ansRemark = questions[currentQuestion].Remarks;
    document.getElementById("idanswer").textContent = questions[currentQuestion].Department;
    // console.log('questions[currentQuestion].Ministry :',questions[currentQuestion].Ministry);
    document.getElementById("idministry").textContent = questions[currentQuestion].Ministry;

    if(ansRemark)
        document.getElementById("idremarks").textContent = "Remarks::"+ansRemark;
    else
        document.getElementById("idremarks").textContent = "";

    hideAnswer();
    correctAnswer = questions[currentQuestion].Department;

    let randomOption = Math.floor(Math.random()*4);
    // console.log(' ansOptionNO:',randomOption);
    // for (let i = 0; i < optionLabels.length; i++) {
    //     if(i == randomOption) {
    //         optionLabels[i].textContent = questions[currentQuestion].Department;
    //         options[i].value = questions[currentQuestion].Department;
    //     }else{
    //         let randQues = randomQuestionNo();
    //         console.log('randOptions:',randQues, alldepartments[randQues]);
    //         optionLabels[i].textContent = alldepartments[randQues];
    //         options[i].value = alldepartments[randQues];

    //     }
    //     options[i].checked = false;
    //     console.log('option quest :',options[i].value);
    //     console.log('optionLabel quest :',optionLabels[i].textContent);
    // }
    if(isBackClicked) showAnswerDiv();
}

function randomQuestionNo(){
   return Math.floor(Math.random() * 90);
}

function submitAnswer() {
    // const options = document.querySelectorAll("[id^='option']");
    // const optionLabels = document.querySelectorAll("[id^='label']");

    let userChoice = -1;
    attemptedNo+=1;

    for (let i = 0; i < options.length; i++) {
        console.log('option ans :',options[i].value);
        console.log('optionLabel ans :',optionLabels[i].textContent);

        if (options[i].checked) {
            userChoice = optionLabels[i].textContent;
            break;
        }
    }

    console.log('userChoice answer:',userChoice);
    console.log('correct answer:',questions[currentQuestion].Department);

    if (userChoice == correctAnswer) {
        score++;
    }

  
    let percent = score*100/attemptedNo;
    console.log("==> - submitAnswer - percent:", percent);
    document.getElementById("idscore").textContent = "Score:"+score +"("+ percent +")";
    document.getElementById("idattempted").textContent = "Attempted:"+attemptedNo;

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }

}

function hideAnswer(){
    let ans = document.getElementById("idanswer");
    ans.style.display = "none";
    let rem = document.getElementById("idremarks");
    rem.style.display = "none";
    let min = document.getElementById("idministry");
    min.style.display = "none";
}

function onQuestionBtnClick(){
    isBackClicked = false;
    let btn = document.getElementById("idShowBtn");
    if(btn.innerHTML == "ShowAnswer"){
        showAnswerDiv();
    } else {
        btn.innerHTML = "ShowAnswer";
        updateCurrentQuestion();
        displayQuestion();
    }

}

function showAnswerDiv(){
  let ans = document.getElementById("idanswer");
  let btn = document.getElementById("idShowBtn");
  ans.style.display = "block";
  let min = document.getElementById("idministry");
  min.style.display = "block";
  let rem = document.getElementById("idremarks");
  rem.style.display = "block";
  btn.innerHTML = "Next"
}

function updateCurrentQuestion(){
  previousQuestion = currentQuestion;
  ifShowImpQuestions = document.getElementsByClassName('showImpCheckBox')[0].checked;
  checkboxStatus =  document.getElementsByClassName('randomCheckBox')[0].checked;
  if(ifShowImpQuestions) {
    let tempArray = getImportantQuestArray();
    impQuestArray = tempArray;
    if(impQuestIndex >= impQuestArray.length) impQuestIndex = 0;
    currentQuestion = impQuestArray[impQuestIndex]; 
    console.log('Showing imp Questions no : ', impQuestIndex + 1, " of ", impQuestArray.length);
    console.log('Remaining imp Questions  :', impQuestArray.length - impQuestIndex -1);
    impQuestIndex++;
  }
  else if(checkboxStatus){
      console.log('showing random questions :', checkboxStatus);
      currentQuestion = randomQuesArray.pop() + 1;
  } else {
    currentQuestion++;
  }

  setCurrentQuestion(currentQuestion);
}

function checkImpQuestInArray(no){
  let tempString = localStorage.getItem("impQuestions");
  if(!tempString) return false;

  let tempArray = JSON.parse(tempString);
  let index = tempArray.indexOf(parseFloat(no));

  if(index > -1) return true;
  else return false;
}


function setImportantQuestInArray(no){
  let tempString = localStorage.getItem("impQuestions");
  if(!tempString) return [parseFloat(no)];

  let tempArray = JSON.parse(tempString);
  tempArray.push(parseFloat(no));
  localStorage.setItem("impQuestions", JSON.stringify(tempArray))
  console.log('New Imp Quest Array :', tempArray);
}

function setImpQuestionArray(arr){
  localStorage.setItem("impQuestions", JSON.stringify(arr));
  console.log('reset array is :', getImportantQuestArray());
}

function getImportantQuestArray(){
  let tempString = localStorage.getItem("impQuestions");
  if(!tempString) return [];

  let tempArray = JSON.parse(tempString);
  // console.log('impQuestArray :', tempArray);
  return tempArray; 
}

function showResult() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h2>Quiz Completed!</h2><p>Your score: ${score}/${questions.length}</p>`;
}

document.onkeydown = checkKey;

function checkKey(e) {
    // console.log('key pressed :', e.keyCode);
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
       onClickBackQuestion();
    }
    else if (e.keyCode == '39' || e.keyCode == '17') { // 17 - fn key of mac
       // right arrow
       onQuestionBtnClick();
    } else if (e.keyCode == '32') {
      // left arrow
      toggleMarkImportant();
   }
}

displayQuestion();


  
