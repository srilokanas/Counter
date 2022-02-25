const content = document.getElementById('container');

function stopWatch() {
    content.innerHTML = `<div id="container">
    <h2>Stop Watch</h2>
    <h1 id="stopwatch">00:00:00</h1>
    <ul id="buttons">
        <li><button onclick="startTimer()"><i class="fa fa-play" aria-hidden="true"></i></button></li>
        <li><button onclick="resetTimer()"><i class="fa fa-stop" aria-hidden="true"></i></button></li>
        <li><button onclick="stopTimer()"><i class="fa fa-pause" aria-hidden="true"></i></button></li>
    </ul>
    </div>`;
}

function counter(){
    content.innerHTML = `<div id="container">
    <h2>Number Counter</h2>
        <h1 id="counting">0</h1>
        <ul id="buttons">
            <li><button onclick="increment()" id="increment"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></button></li>
            <li><button onclick="reset()"><i class="fa fa-stop" aria-hidden="true"></i></button></li>
            <li><button onclick="decrement()" id="decrement"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i></button></li>
        </ul>
    </div>`;
}

/* Stop Watch */

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    document.getElementById("stopwatch").innerText = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    hr = 0;
    min = 0;
    sec = 0;
    stoptime = true;
   
    document.getElementById("stopwatch").innerText = hr + ':' + min + ':' + sec;
}

/* Counter */

var data = parseInt(document.getElementById("counting").textContent);

function increment() {
	data = data + 1;
	document.getElementById("counting").innerText = data;
}

function decrement() {
	data = data - 1;
	document.getElementById("counting").innerText = data;
}

function reset() {
	data = 0;
	document.getElementById("counting").innerText = data;
}
