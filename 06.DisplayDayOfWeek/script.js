var  d = new Date();

var day = new Array(7);
day[0] = 'Sunday';
day[1] = 'Monday';
day[2] = 'Tuesday';
day[3] = 'Wednesday';
day[4] = 'Thursday';
day[5] = 'Friday';
day[6] = 'Saturday';

var quote = new Array(7);
quote[0] = 'this is Sunday';
quote[1] = 'this is Monday';
quote[2] = 'this is Tuesday';
quote[3] = 'this is Wednesday';
quote[4] = 'this is Thursday';
quote[5] = 'this is Friday';
quote[6] = 'this is Saturday';

var displayDay = document.getElementById("weekday");
var displayQuote = document.getElementById("quote");

getQuote();

function getQuote(){
  displayDay.innerText = day[d.getDay()];
  displayQuote.innerText = quote[d.getDay()];
}