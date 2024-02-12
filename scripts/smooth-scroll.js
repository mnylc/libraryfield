// Select all anchor links with the class "smooth-scroll"
const anchorLinks = document.querySelectorAll('a.smooth-scroll');

// Add click event listeners to each anchor link
anchorLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

// Smooth scroll function
function smoothScroll(event) {
    event.preventDefault();

    // Get the target element's ID from the href attribute
    const targetId = this.getAttribute('href');

    // Get the target element
    const targetElement = document.querySelector(targetId);

    // Calculate the distance to scroll with an offset
    const offsetTop = targetElement.offsetTop - 60; // Adjust the offset value as needed

    // Scroll smoothly to the target element
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}
