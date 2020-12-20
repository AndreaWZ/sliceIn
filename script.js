const imagesL = document.getElementsByClassName("imagesLeft");
let imagesR = document.getElementsByClassName("imagesRight");

window.addEventListener("scroll", function(){
    for(let i = 0; i < imagesL.length; i++) {
        imagesL[i].classList.add("animationL")
    }
})




