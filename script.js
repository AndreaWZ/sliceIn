const domA = document.getElementById('domA');
const domB = document.getElementById('domB');
const domC = document.getElementById('domC');
const domD = document.getElementById('domD');
const domE = document.getElementById('domE');
let y = 550;

window.addEventListener("scroll", function(){

    if(domA.getBoundingClientRect().y < y) {
        domA.classList.add("animationL");
    } 
    if(domB.getBoundingClientRect().y < y) {
        domB.classList.add("animationR");
    }
    if(domC.getBoundingClientRect().y < y) {
        domC.classList.add("animationL");
    }
    if(domD.getBoundingClientRect().y < y) {
        domD.classList.add("animationR");
    }
    if(domE.getBoundingClientRect().y < y) {
        domE.classList.add("animationL");
    }
})






