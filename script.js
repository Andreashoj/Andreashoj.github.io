
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
let toTop = document.querySelector('.to-top');
let toTopSvg = document.querySelectorAll('.to-top svg .cls-1');
let portfolioCon = document.querySelector('.portfolio-container').clientHeight;
let aboutCon = document.querySelector('.about-container').clientHeight;
let contactCon = document.querySelector('.contact-section').clientHeight;


window.addEventListener('scroll', function(){      
    if(window.scrollY > screenHeight) {
        for(var i = 0; i < menuSpans.length; i++) {
        menuSpans[i] = menuSpans[i].style.backgroundColor = '#232B37'; }
    } else if(window.scrollY < screenHeight) {
        for(var i = 0; i < menuSpans.length; i++) {
        menuSpans[i] = menuSpans[i].style.backgroundColor = 'white'; }
    }
    if(window.scrollY > 0) {
        toTop.style.opacity = "1";
    } else if (window.scrollY <= 0) {
        toTop.style.opacity = "0";
    }
    
    if (window.scrollY > portfolioCon) {
        toTop.classList.add('to-top-white');
        toTop.classList.replace('to-top-blue', 'to-top-white');
        console.log('1')
    } else if (window.scrollY < portfolioCon) {
        toTop.classList.replace('to-top-white', 'to-top-blue');
        console.log('2')
    }

    if (window.scrollY < (aboutCon+portfolioCon-15) && window.scrollY > portfolioCon) {
        toTop.classList.replace('to-top-blue', 'to-top-white');
        console.log('3')
    } else if(window.scrollY > (aboutCon+portfolioCon-15)) {
        toTop.classList.replace('to-top-white', 'to-top-blue');
        console.log('4')
    }
    
    if (window.scrollY > (aboutCon+portfolioCon+contactCon-15)) {
        toTop.classList.replace('to-top-blue', 'to-top-white');
        toTop.classList.add('to-top-white'); 
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

toTop.addEventListener('click', function(){
    smoothScroll('.intro', 1000)
} )


