var color = ['black','red','green','yellow','white', 'gray'];
i = 0
$("#changeColor").click(function(event){
  $("#container").css("backgroundColor", color[i]);
  i = i > color.length-1 ? 0:i+1;
});