// timeLeft = document.querySelector("#timeLeft");
// startBtn = document.querySelector("#startBtn");
// pauseBtn = document.querySelector("#pauseBtn");

// let timeLeftNum = parseInt(timeLeft.innerText);
// let timer;

// startBtn.addEventListener("click", function() {
//     timer = setInterval(changeTime, 1000)
// });

// pauseBtn.addEventListener("click", function(){
//     clearInterval(timer);
// });

// function changeTime() {
//     if(timeLeftNum === 0) {
//         clearInterval(timer);
//         document.body.style.backgroundColor = "#d400933d";
//         timeLeft.innerText = "Time's Up!"
//     }
//     else {
//         timeLeftNum -= 1;
//         timeLeft.innerText = timeLeftNum;
//         moveTime();
//     }
// }

// function moveTime() {
//     const x = Math.floor(Math.random() * (window.innerWidth - 100) - 0);
// 	const y = Math.floor(Math.random() * (window.innerHeight - 110) - 80);
// 	timeLeft.style.top = `${y}px`;
// 	timeLeft.style.left = `${x}px`;
// }


const durationInput = document.querySelector("#duration");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const circle = document.querySelector("circle");
const alert = document.querySelector(".alert");

const circumference = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", circumference);

let duration;

const timer = new Timer(durationInput, startBtn, pauseBtn, {
onStart(totalDuration) {
    alert.classList.toggle("displayAlert");
    alert.setAttribute("class", "alert");
    duration = totalDuration;
}, 
onTick(timeRemaining){
    let dashOffset = timeRemaining / duration * circumference - circumference;
    circle.setAttribute("stroke-dashoffset", dashOffset);
}, 
onComplete(){
    document.body.style.backgroundColor = "#f4c2e5";
    document.body.querySelector("#duration").style.backgroundColor = "#f4c2e5";
    alert.setAttribute("class", "displayAlert");
}
});