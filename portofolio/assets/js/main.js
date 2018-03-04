"use strict"

document.addEventListener("DOMContentLoaded",init);

function init(){
    let whaleSwam = false;
    document.addEventListener("scroll",scroller);


}

function swimmingwhale(){
    let whale = document.querySelector("#whale");
    let maxRotate = -25;
    let currentRotated = 0;
    let currentLeft = 0;
    let swimwhale = setInterval(function(){
        if(currentRotated > -25){
            whale.style.transform = "rotate(" + currentRotated + "deg)";
            whale.style.marginLeft = currentLeft + "px";
            currentRotated -= 1;
            currentLeft += 5;
            console.log("i work" + currentRotated);
        }else {
            clearInterval(swimwhale);
            console.log("I stopped!");
        }

    },20);

}

function scroller() {
    let projectSection = document.querySelector("#whale");
    if(isInViewport(projectSection)){
        document.removeEventListener("scroll", scroller);
        swimmingwhale();
    }
}

function calculateWhalePosition(){
    let projectSection = document.querySelector('#whale');
    let position = projectSection.getBoundingClientRect();
    return position.y;

}

var isInViewport = function ( elem ) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

