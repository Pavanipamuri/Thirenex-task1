// ================================
// Load Projects from Backend
// ================================

async function loadProjects() {

    try {

        const response = await fetch("/api/projects");

        const projects = await response.json();

        const container = document.getElementById("project-container");

        container.innerHTML = "";

        projects.forEach(project => {

            container.innerHTML += `

            <div class="project-card">

                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <p><strong>Technology:</strong> ${project.technology}</p>

            </div>

            `;

        });

    }

    catch(error){

        console.log(error);

    }

}

loadProjects();


// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('nav a').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});
// ======================================
// Contact Form Submission
// ======================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const response = await fetch("/contact", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name,
                email,
                message
            })

        });

        const result = await response.text();

        alert(result);

        contactForm.reset();

    });

}

// ======================================
// Active Navigation
// ======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "white";

        if (link.getAttribute("href") === "#" + current) {

            link.style.color = "#38bdf8";

        }

    });

});

// ======================================
// Hero Button
// ======================================

const resumeButton = document.querySelector(".hero button");

if (resumeButton) {

    resumeButton.addEventListener("click", () => {

        console.log("Resume Download Button Clicked");

    });

}

// ======================================
// Footer Year
// ======================================

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML = `© ${year} Pamuri Pavani. All Rights Reserved.`;

}

console.log("Portfolio Loaded Successfully");
// ======================================
// Contact Form Submission
// ======================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const response = await fetch("/contact", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name,
                email,
                message
            })

        });

        const result = await response.text();

        alert(result);

        contactForm.reset();

    });

}

// ======================================
// Active Navigation
// ======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "white";

        if (link.getAttribute("href") === "#" + current) {

            link.style.color = "#38bdf8";

        }

    });

});

// ======================================
// Hero Button
// ======================================

const resumeButton = document.querySelector(".hero button");

if (resumeButton) {

    resumeButton.addEventListener("click", () => {

        console.log("Resume Download Button Clicked");

    });

}

// ======================================
// Footer Year
// ======================================

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML = `© ${year} Pamuri Pavani. All Rights Reserved.`;

}

console.log("Portfolio Loaded Successfully");
