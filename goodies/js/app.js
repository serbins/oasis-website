/* App.Js */

// let sqFt = document.getElementById("#sqFt");


$("#generate").click(function() {
  let sqFt = document.getElementById("sqFt").value;

  if (sqFt < 1000 ) {
    document.getElementById("result").innerHTML = 'Your estimated service quote is less than $195 and will take about 1 - 1.5 hours to be completed';
  } else if (sqFt == 1000 || sqFt <= 1200 ) {
    document.getElementById("result").innerHTML = 'Your estimated service quote is $195 - $275+ and will take about 1.5 - 2 hours to be completed';
  } else if (sqFt == 1201 || sqFt <= 2000) {
    document.getElementById("result").innerHTML = 'Your estimated service quote is $300 - $400+ and will take about 2.5 - 3 hours to be completed';
  } else if (sqFt == 2001 || sqFt <= 3000) {
    document.getElementById("result").innerHTML = 'Your estimated service quote is $400 - $555+ and will take about 3 - 3.5 hours to be completed';
  } else if (sqFt == 3001 || sqFt <= 4500) {
    document.getElementById("result").innerHTML = 'Your estimated service quote is $600 - $800+ and will take about 4 - 5 hours to be completed';
  } else if (sqFt == 4501 || sqFt <= 5500) {
    document.getElementById("result").innerHTML = 'Your estimated service quote is $950 - $1,400+ and will take about 5 - 7 hours to be completed';
  } else if (sqFt >= 5501 ) {
    document.getElementById("result").innerHTML = 'Your estimated service quote is $1,400+ and will take about 5 - 7 hours to be completed';
  } else {
    document.getElementById("result").innerHTML = 'Looks like somethign went wrong! Be sure to use only numbers in the input field';
  }
  
  });