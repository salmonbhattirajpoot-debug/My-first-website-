// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });

        // Close menu on mobile after click
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.remove('active');
    });
});

// Form Submission (Friendly Alert)
function submitForm(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
    event.target.reset();
}
