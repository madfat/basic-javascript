setInterval(function() {
  var currentTime = new Date();
  var hour = currentTime.getHours();
  var minute = currentTime.getMinutes();
  var second = currentTime.getSeconds();
  var period = "AM";

  if (hour >= 12) {
    period = "PM";
  }
  if (hour > 12){
    hour = hour - 12;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }

  var x = hour + ':' + minute + ':' + second + ' ' + period;
  var jam = document.getElementById('clock');
  jam.innerText = x;

}, 1000);