// ===============================
// NAVIGATION DRAWER LOGIC
// ===============================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    // Open/Close toggle for mobile viewports
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Close mobile drawer when an inner item links away
    document.querySelectorAll("#navLinks a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });
    });
}

// Dynamic Header Border Shadow Effect on Page Scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (nav) {
        if (window.scrollY > 40) {
            nav.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.18)";
        } else {
            nav.style.boxShadow = "none";
        }
    }
});
