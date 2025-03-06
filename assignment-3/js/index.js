// // can use get element by class to link to gallery in the footer OR just leave it out if necessary
// var myIndex = 0;
// var contactbtn = document.querySelector(".contact-button");
// var flavourbtn = document.querySelector(".flavour-button");
//
//
// openContactForm();
// openFlavourForm();
// closeContactForm();
// closeFlavourForm();
// showSlides();
// plusSlides();
// currentSlide();
//
// // using js to open and close the contact and flavour forms
// function openContactForm(){
//     document.getElementById("contact-form").style.display = "block";
// }
// function closeContactForm(){
//     document.getElementById("contact-form").style.display = "none";
// }
// function openFlavourForm(){
//     document.getElementById("flavour-form").style.display = "block";
// }
// function closeFlavourForm(){
//     document.getElementById("flavour-form").style.display = "none";
// }
// // Flavour Slideshow Functions
// // slideshow controls
// let slideIndex = 1;
// showSlides(slideIndex);
//
// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
//
// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("flavour-image");
//     let dots = document.querySelector(".slider-nav");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
// }
//
//
// //event listener for onclick actions
// // open
// flavourbtn.addEventListener("click", openContactForm);
// contactbtn.addEventListener("click", openFlavourForm);
// // close
// flavourbtn.addEventListener("click", closeContactForm);
// contactbtn.addEventListener("click", closeFlavourForm);
// // carousel/slideshow for jellybean flavours
// //
