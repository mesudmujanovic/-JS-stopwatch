const timeDiv = document.querySelector(".time");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let seconds = 0;
let interval;


const stopwatch = function(){
 seconds++;
 let hours = Math.floor(seconds/3600);
 let minute = Math.floor((seconds-hours*3600)/60);
 let secs = seconds % 60;

 secs < 10 ? secs =`0${secs}` : secs;

 timeDiv.innerHTML=`${hours}:${minute}:${secs}`;}


 const start = function(){
  if(interval){
    return;
  }
interval = setInterval(stopwatch,1000);}

 const stop = function (){
  clearInterval(interval);
  interval=null;

}


  const reset = function (){
    stop();
    timeDiv.innerHTML="00:00:00";
  }

startBtn.addEventListener("click",start);
stopBtn.addEventListener("click",stop);
resetBtn.addEventListener("click",reset);