console.log("started");
let clock=document.getElementById("clock");
let hours,minutes,seconds;
let date=new Date();
hours=date.getHours();
minutes=date.getMinutes();
seconds=date.getSeconds();
clock.innerText=hours+":"+minutes+":"+seconds;
console.log(date);

setInterval(function(){
     date=new Date();
     hours=date.getHours();
     minutes=date.getMinutes();
     seconds=date.getSeconds();
     clock.innerText=hours+":"+minutes+":"+seconds;
}, 1000);
