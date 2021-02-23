var modal = document.getElementById("modal-window")
var img = document.getElementById("modal-img")
var scrollToTopButton = document.getElementById("scrollToTopBtn");
var submitMsg = document.getElementById("submitMsg");
var root = document.documentElement;

// Resource used for image/video modal: https://www.w3schools.com/howto/howto_css_modal_images.asp
function openModal(source) {
    modal.style.visibility = "visible";
    img.src = source.src;
    img.style.opacity = "100%"
    modal.addEventListener("click", function(event) {
        if (event.target.id == "modal-window") {
            if (img.tagName == "VIDEO") {
                img.pause();
            }
            modal.style.visibility = "hidden";
        }
    });
}
// Resource used for scroll-to-top button: https://css-tricks.com/how-to-make-an-unobtrusive-scroll-to-top-button/ 
// document.addEventListener("scroll", () => {
//     var scroll = root.scrollHeight - root.clientHeight;
//     if ((root.scrollTop / scroll) >= .25) {
//         // show scroll to top here
//         scrollToTopButton.classList.add("showButton");
//     } else {
//         scrollToTopButton.classList.remove("showButton");
//     }
// });

// Regex for valid email addresses: https://www.w3resource.com/javascript/form/email-validation.php
function validateEmail(email) {
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    submitMsg.style.visibility = "visible";
    if (email.match(regex)) {
        submitMsg.textContent = "Email successfully recorded."
    } else {
        submitMsg.textContent = "Invalid email address."
    }
}