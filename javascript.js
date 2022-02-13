var timeleft = 10;

// global variables for reference
var downloadTimer;

function startInterval() {  // everything inside this function that is called with click on button
  downloadTimer = setInterval(function function1(){
    document.getElementById("countdown").innerHTML = timeleft + "&nbsp";

    timeleft -= 1;
    if(timeleft <= -1){
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Bast off!"
    }
  }, 1000);
}