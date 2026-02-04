/* ===== Mobile Menu Toggle ===== */
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active'); // Mobile menu open/close
}

/* ===== Smooth Scroll for Navigation ===== */
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Default link behavior roko

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Mobile menu automatically close ho jaye after click
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.remove('active');
    });
});

/* ===== Form Submission ===== */
function submitForm(event) {
    event.preventDefault(); // Form reload roko

    // Friendly alert message
    alert("✅ Thank you! Your message has been sent. I will get back to you soon.");

    // Form reset kar do
    event.target.reset();
}

/* ===== Optional: Active Nav Highlight on Scroll ===== */
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // Header height consider
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(a => {
        a.classList.remove('active-link');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active-link');
        }
    });
});
