// Select all sections that should appear when scrolling
const sections = document.querySelectorAll(
    ".features, .preview, .how-it-works"
);

// Add initial hidden state
sections.forEach(function(section) {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});


// Check which sections are visible
function revealSections() {

    sections.forEach(function(section) {

        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

}


// Run when the page is scrolled
window.addEventListener("scroll", revealSections);

// Run once when the page first loads
revealSections();


// Button interaction
const buttons = document.querySelectorAll(
    ".primary-button, .nav-button"
);

buttons.forEach(function(button) {

    button.addEventListener("click", function() {
        alert("Thanks for checking out TaskFlow!");
    });

});