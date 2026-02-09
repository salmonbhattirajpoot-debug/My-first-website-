/* =========================
   GLOBAL SELECTORS
========================= */
const navLinks = document.getElementById("navLinks");
const menuBtn = document.querySelector(".menu-btn");
const navAnchors = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

/* =========================
   MOBILE MENU TOGGLE
========================= */
function toggleMenu() {
    navLinks.classList.toggle("active");
}

/* Close menu when clicking outside (better UX) */
document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove("active");
    }
});

/* =========================
   SMOOTH SCROLL + AUTO CLOSE
========================= */
navAnchors.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (!targetSection) return;

        const offset = 70; // fixed header height
        const position =
            targetSection.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: position,
            behavior: "smooth"
        });

        navLinks.classList.remove("active");
    });
});

/* =========================
   ACTIVE NAV ON SCROLL
   (Optimized – no heavy loops)
========================= */
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navAnchors.forEach(link => {
                    link.classList.remove("active-link");
                    if (link.getAttribute("href") === `#${entry.target.id}`) {
                        link.classList.add("active-link");
                    }
                });
            }
        });
    },
    {
        root: null,
        threshold: 0.6
    }
);

sections.forEach(section => observer.observe(section));

/* =========================
   CONTACT FORM (NO RELOAD)
========================= */
function submitForm(e) {
    e.preventDefault();

    // Fast + user-friendly feedback (no blocking alert)
    const btn = e.target.querySelector("button");
    btn.innerText = "Sending...";
    btn.disabled = true;

    setTimeout(() => {
        btn.innerText = "Message Sent ✅";
        e.target.reset();

        setTimeout(() => {
            btn.innerText = "Send Message";
            btn.disabled = false;
        }, 2000);
    }, 800);
}

/* =========================
   PERFORMANCE BOOST
   (Remove focus after click)
========================= */
navAnchors.forEach(link => {
    link.addEventListener("mouseup", () => link.blur());
});
