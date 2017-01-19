var Questions = [
  {question:"What is the day after Friday?",
  choices:["Sunday","Tuesday","Saturday", "Wednesday"],
  correctAnswer: 2},
  {question:"What is the day before Friday?",
  choices:["Sunday","Thursday","Saturday", "Wednesday"],
  correctAnswer: 1},
  {question:"What is the day after Monday?",
  choices:["Sunday","Tuesday","Saturday", "Wednesday"],
  correctAnswer: 1},
]

var currentQuestion = 0;
var correctAnswer = 0;
var quizOver = false;

$(document).ready(function(){
  displayCurrentQuestion();
  $(this).find('.quizMessage').hide();
  $(this).find('.nextButton').on('click',function(){
    if (!quizOver){
      value=$('input[type="radio"]:checked').val();
      quizMsg=$(document).find('.quizMessage');
      if (value==undefined){
        quizMsg.text('Please select an answer');
        quizMsg.show();
      }else{
        quizMsg.hide();
        if (value == Questions[currentQuestion].correctAnswer){
          correctAnswer++;
        }
        currentQuestion++;
        if (currentQuestion < Questions.length){
          displayCurrentQuestion();
        }else{
          displayScore();
          $(document).find('.nextButton').text('Play again?');
          quizOver=true
        }
      }
    }else{
      quizOver=false;
      $(document).find('.nextButton').text('Next Question');
      resetQuiz();
      displayCurrentQuestion();
      hideScore();
    }
  })
})

function displayCurrentQuestion(){
  console.log("in displaying current question");

  var question = Questions[currentQuestion].question;
  //?????
  //var questionClass = $(document).find('.quizContainer > .question');
  var questionClass = $(document).find('.question');
  var choiceList = $(document).find("#choiceList");
  //?????
  var numChoices = Questions[currentQuestion].choices.length;
  $(questionClass).text(question);
  $(choiceList).find("li").remove();

  var choice;
  for (i=0; i < numChoices; i++){
    choice = Questions[currentQuestion].choices[i];
    $('<li><input type="radio" value='+ i +' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
  }
}

function resetQuiz(){
  currentQuestion = 0;
  correctAnswer = 0;
  hideScore();
}

function displayScore(){
  $(document).find(".result").text("your score :" + correctAnswer);
  $(document).find(".result").show();
}

function hideScore(){
  $(document).find(".result").hide();
}
