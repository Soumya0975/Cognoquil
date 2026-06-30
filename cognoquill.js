// ===============================
// MOBILE NAVIGATION
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if(menuBtn && navLinks){

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

}

window.addEventListener("scroll", () => {

    const nav=document.querySelector("nav");

    if(nav){

        if(window.scrollY>40){

            nav.style.boxShadow="0 5px 15px rgba(0,0,0,.18)";

        }

        else{

            nav.style.boxShadow="none";

        }

    }

});


// ===============================
// SUBMISSION MODAL
// ===============================

const modal=document.getElementById("submitModal");

const addCard=document.querySelector(".submit-card");

const closeBtn=document.querySelector(".close");

if(addCard){

addCard.onclick=()=>{

modal.style.display="flex";

}

}

if(closeBtn){

closeBtn.onclick=()=>{

modal.style.display="none";

}

}

window.onclick=(e)=>{

if(e.target==modal){

modal.style.display="none";

}

};


// ===============================
// SUBMISSIONS
// ===============================

const form=document.getElementById("submissionForm");

const cards=document.querySelector(".cards");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const title=form.querySelectorAll("input")[0].value;

const author=form.querySelectorAll("input")[1].value;

const image="placeholder.jpg";

const card=document.createElement("div");

card.className="work-card";

card.innerHTML=`

<img src="${image}" alt="submission">

<div class="work-content">

<h3>${title}</h3>

<p>by ${author}</p>

</div>

`;

cards.appendChild(card);

form.reset();

modal.style.display="none";

});

}
