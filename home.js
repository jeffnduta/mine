var toggle_btn;
var big_wrapper;
var humbager_menu;

function declare() {
    toggle_btn = document.querySelector(".humbager-menu"); // Change the selector
    big_wrapper = document.querySelector(".big-wrapper");
    humbager_menu = document.querySelector(".humbager-menu");
}

function toggleAnimation() {
    big_wrapper.classList.toggle("active");
}

function events() {
    toggle_btn.addEventListener("click", toggleAnimation);
}

declare();
events();

//-----================text change=====----
const span = document.querySelector('.text-change');

const jobTitles = ["Graphic Designer ", "web Designer "];

let currentTitleIndex = 0;
function changeTextAndColor() {
    span.textContent = jobTitles[currentTitleIndex];
    currentTitleIndex = (currentTitleIndex + 1) % jobTitles.length;
}
setInterval(changeTextAndColor, 1000);

//-----=====================TOP NAVIGATION END======-

const light = document.querySelector(".light");
const grid = document.querySelector("#hex-grid");

function moveLight() {
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;
    light.style.transition = "left 0.5s ease-out, top 0.5s ease-out";
    light.style.left = `${newX}px`;
    light.style.top = `${newY}px`;
}
setInterval(moveLight, 2000);





