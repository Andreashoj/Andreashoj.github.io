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
let image = document.querySelector('.modal img')

function modalPop() {
    modal.style.display = "flex";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    image.style.opacity = "1";
} 


