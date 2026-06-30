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


// ===================================================
// SUBMISSION MODAL POPUP LOGIC
// ===================================================
document.addEventListener("click", function(event) {
    const modal = document.getElementById("submitModal");
    if (!modal) return; 

    // Opens the modal when clicking the card box, the "+" icon, or the text
    if (event.target.closest(".submit-card")) {
        modal.style.display = "flex";
    }

    // Close on 'x' click
    if (event.target.closest(".close")) {
        modal.style.display = "none";
    }

    // Close when clicking empty space outside the modal box
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// ===================================================
// SUBMISSION FORM HANDLING (MATCHES YOUR ORIGINAL HTML)
// ===================================================
const submissionForm = document.getElementById("submissionForm");

if (submissionForm) {
    submissionForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Safely grabs values using your exact placeholders
        const titleInput = submissionForm.querySelector('input[placeholder="Title"]');
        const authorInput = submissionForm.querySelector('input[placeholder="Your Name"]');
        const cardsContainer = document.querySelector(".cards");

        if (titleInput && authorInput && cardsContainer) {
            const newCard = document.createElement("div");
            newCard.className = "work-card";
            newCard.innerHTML = `
                <img src="placeholder.jpg" alt="Poem">
                <div class="work-content">
                    <h3>${titleInput.value}</h3>
                    <p>by ${authorInput.value}</p>
                </div>
            `;
            cardsContainer.appendChild(newCard);
        }

        // Reset fields and hide modal
        submissionForm.reset();
        document.getElementById("submitModal").style.display = "none";
    });
}
