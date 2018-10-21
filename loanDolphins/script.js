function imageAppear() {
    var image = document.getElementById('image-popup');
    var yPos = window.pageYOffset;
    
    if (yPos > 2700) {
        image.style.opacity = "1";
    } else {
        image.style.opacity = "0";
    }
}

window.addEventListener('scroll', imageAppear);


//const links = document.getElementById('firstLink');

// links.addEventListener('clicks', function(e) {
//    e.preventDefault();
//    return false;
// });


// let modal = document.querySelector('.modal');
/* let opener = document.querySelectorAll('.image-popup a');
let image = document.querySelectorAll('.image-popup a img')[0];

function modalPop() {
    modal.style.display = "flex";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    image.style.display = "block";
} */

let modal = document.querySelector('.modal');
let image = document.querySelector('.modal img');
let links = document.querySelectorAll('.image-popup a');


function modalPop() {
    modal.style.display = "flex";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    image.style.display = "block";
}

window.addEventListener('mouseup', function(event) {
    if (event.target != image) {
        modal.style.display = "none";
    }
});

const toggleText = document.querySelector('.toggle-text p');
const divider = document.querySelectorAll('.qna-divider')[0];
let reverser = 0;

function toggle() {
    toggleText.style.display = "block";
    if (reverser == 0 || reverser == -1) {
        reverser =+ 1;
        toggleText.style.display = "block";
        toggleText.style.opacity = 1;
        divider.style.transform = "translateY(50px)";
        divider.style.paddingBottom = "50px";
        toggleText.classList.add('animate-opacity');
    } else if (reverser == 1) {
        reverser =- 1;
        toggleText.style.display = "none";
        toggleText.style.opacity = "0";
        divider.style.transform = "translateY(0px)";
        divider.style.paddingBottom = "0px";
        toggleText.classList.add('animate-opacity-remove');
    }
};

const toggleText1 = document.querySelectorAll('.toggle-text p')[1];
const divider1 = document.querySelectorAll('.qna-divider')[1];
var reverser1 = 0;

function toggle_second() {

    toggleText1.style.display = "block";
    if (reverser == 0 || reverser == -1) {
        reverser =+ 1;
        toggleText1.style.display = "block";
        toggleText1.style.opacity = 1;
        divider1.style.transform = "translateY(50px)";
        divider1.style.paddingBottom = "50px";
        toggleText1.classList.add('animate-opacity');
    } else if (reverser == 1) {
        reverser =- 1;
        toggleText1.style.display = "none";
        toggleText1.style.opacity = "0";
        divider1.style.transform = "translateY(0px)";
        divider1.style.paddingBottom = "0px";
        toggleText1.classList.add('animate-opacity-remove');
    }
};

let toggleText2 = document.querySelectorAll('.toggle-text p')[2];
let reverser2 = 0;
const divider2 = document.querySelectorAll('.qna-divider')[2];

function toggle_third() {

    toggleText2.style.display = "block";
    if (reverser == 0 || reverser == -1) {
        reverser =+ 1;
        toggleText2.style.display = "block";
        toggleText2.style.opacity = 1;
        divider2.style.transform = "translateY(50px)";
        divider2.style.paddingBottom = "50px";
        toggleText2.classList.add('animate-opacity');
    } else if (reverser == 1) {
        reverser =- 1;
        toggleText2.style.display = "none";
        toggleText2.style.opacity = "0";
        divider2.style.transform = "translateY(0px)";
        divider2.style.paddingBottom = "0px";
        toggleText2.classList.add('animate-opacity-remove');
    }
};






