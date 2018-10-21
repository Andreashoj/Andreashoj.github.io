
let menuSwitch = true;
const menu = document.querySelector('.menu');
const menuLi = document.querySelector('.mobilList')
const menuSvg = document.querySelectorAll('.mobile-menu-svg');
let burgerAnime = document.querySelectorAll('.toggle span')
let sectionOneHeight = document.querySelector('.container').clientHeight;
let sectionTwoHeight = document.querySelector('.portfolio-container').clientHeight;
let sectionThreeHeight = document.querySelector('.about-container').clientHeight;
document.querySelector('.toggle').addEventListener('click', function(){
    if (menuSwitch == true) { 
        menu.style.width = '70%';
        menuSwitch = false;
        menuLi.style.opacity = 1;
        for(var i = 0; i < menuSvg.length; i++) {
            menuSvg[i].style.opacity = 1;
            burgerAnime[i] = burgerAnime[i].className = 'burger-anime'
        }
        } else { 
            menu.style.width = '0%';
            menuSwitch = true;
            menuLi.style.opacity = 0;
            for(var i = 0; i < menuSvg.length; i++) {
                menuSvg[i].style.opacity = 0;
                burgerAnime[i] = burgerAnime[i].className = ''
            }
        }
})

window.addEventListener('resize', function(){
    if (window.innerWidth > 769) {
        menu.style.width = '0%';
        menuSwitch = true;
        menuLi.style.opacity = 0;
        for(var i = 0; i < menuSvg.length; i++) {
            menuSvg[i].style.opacity = 0;
            burgerAnime[i] = burgerAnime[i].className = ''
        }
    }

})

const screenHeight = window.innerHeight;
const menuSpans = document.querySelectorAll('.toggle span');

window.addEventListener('scroll', function(){      
    if(window.scrollY > screenHeight) {
        for(var i = 0; i < menuSpans.length; i++) {
        menuSpans[i] = menuSpans[i].style.backgroundColor = '#232B37'; }
    } else if(window.scrollY < screenHeight) {
        for(var i = 0; i < menuSpans.length; i++) {
        menuSpans[i] = menuSpans[i].style.backgroundColor = 'white'; }
    } 
    if (window.scrollY > (sectionOneHeight+(sectionThreeHeight/1.7))) {
       var remover = window.document.querySelectorAll('.remover') 
       for(var i = 0; i < remover.length; i++) {
           remover[i].classList.remove('remover')
       }
       
    }
})


function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = Math.easeOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    Math.easeOutQuad = function (t, b, c, d) {
        t /= d;
        return -c * t*(t-2) + b;
    };

    requestAnimationFrame(animation)
}


var portfolio = document.querySelector('#portfolio-button');
var portfolioButton = document.querySelector('#workButton');
var about = document.querySelector('#about-button');
portfolio.addEventListener('click', function() {
    smoothScroll('#portfolio', 1000)
});

portfolioButton.addEventListener('click', function() {
    smoothScroll('#portfolio', 1000)
});

about.addEventListener('click', function() {
    smoothScroll('#about', 1000)
});


