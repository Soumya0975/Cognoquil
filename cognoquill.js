// ===============================
// MOBILE NAVIGATION DRAWER
// ===============================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// ===============================
// SUBMISSION MODAL OPEN & CLOSE
// ===============================
// Using a click listener on the document makes sure it catches the click no matter what!
document.addEventListener("click", (event) => {
    const modal = document.getElementById("submitModal");
    
    // Find if they clicked the submit card or anything inside it (like the "+" or the text)
    const addCard = event.target.closest(".submit-card");
    
    // Check if they clicked the close button
    const closeBtn = event.target.closest(".close");

    // If they clicked the "+" card, open the modal
    if (addCard && modal) {
        modal.style.display = "flex";
    }

    // If they clicked the 'x', close the modal
    if (closeBtn && modal) {
        modal.style.display = "none";
    }

    // If they clicked outside the modal container box, close it
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// ===============================
// SUBMISSIONS HANDLING
// ===============================
const form = document.getElementById("submissionForm");
const cardsContainer = document.querySelector(".cards");

if (form && cardsContainer) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("workTitle").value;
        const author = document.getElementById("workAuthor").value;
        const image = "placeholder.jpg"; 

        const card = document.createElement("div");
        card.className = "work-card";
        card.innerHTML = `
            <img src="${image}" alt="submission thumbnail">
            <div class="work-content">
                <h3>${title}</h3>
                <p>by ${author}</p>
            </div>
        `;

        cardsContainer.appendChild(card);
        
        form.reset();
        const modal = document.getElementById("submitModal");
        if (modal) modal.style.display = "none";
    });
}
