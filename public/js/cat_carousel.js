// Course: CS290 - Web Development
// Student Name: Dave Huston
// Assignment: CS290 Project - front end
// Description: Real House Cats of Seattle

document.addEventListener('DOMContentLoaded', showSlides);

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    slideIndex += n;
    var slides = document.getElementsByClassName("mySlides");
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    if (slideIndex < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}