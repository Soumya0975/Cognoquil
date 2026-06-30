// ===============================
// Mobile Navigation
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    document.querySelectorAll("#navLinks a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });
    });

}

// ===============================
// Navbar Shadow on Scroll
// ===============================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (!nav) return;

    if (window.scrollY > 40) {
        nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.18)";
    } else {
        nav.style.boxShadow = "none";
    }

});

// ===============================
// Submission Modal
// ===============================

const modal = document.getElementById("submitModal");
const addCard = document.querySelector(".submit-card");
const closeBtn = document.querySelector(".close");

if (modal && addCard && closeBtn) {

    addCard.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

}

// ===============================
// Temporary Form Submission
// ===============================

const submissionForm = document.getElementById("submissionForm");

if (submissionForm) {

    submissionForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your submission feature will be connected soon.");

        submissionForm.reset();

        modal.style.display = "none";

    });

}
