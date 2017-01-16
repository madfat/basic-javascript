$(document).ready(function(){
  function init(){
    if (localStorage["name"]){
      $('#name').val(localStorage["name"]);
    }
    if(localStorage["message"]){
      $('#message').val(localStorage["message"]);
    }
    if(localStorage["email"]){
      $('#email').val(localStorage["email"]);
    }
  }
  init();
});

$('.stored').change(function(){
  localStorage[$(this).attr('name')] = $(this).val();
});