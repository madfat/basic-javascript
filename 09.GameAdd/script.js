var num1;
var num2;

num1 = Math.floor((Math.random()*10) + 1);
num2 = Math.floor((Math.random()*10) + 1);

document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;

var answer = num1 + num2;

var checkAnswer = document.querySelector('input[type=text]');
var value = checkAnswer.value;
var btn = document.querySelector('input[type=button][value=Check]');

btn.onclick = function() {
  value=checkAnswer.value;
  if(value==answer){
    alert('true');
  }else{
    alert('false');
  }
}

// $('#check').onclick = function(){
//   var guest = $('#result').val();
//   if (guest==answer){
//     alert('true');
//   } else {
//     alert('false');
//   }
// }