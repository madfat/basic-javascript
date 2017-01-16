function print(message) {
  document.getElementById("output").innerHTML = 'the length is: ' + message;
}
  
document.getElementById("check").onclick = function(event){
  print(document.getElementById("str").value.length);
}
