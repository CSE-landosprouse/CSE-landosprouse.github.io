/* Shows and hides the mobile navigation */
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

if (menuToggle && mainNav) {
    menuToggle.onclick = () => {
        mainNav.classList.toggle("show");

        const isOpen = mainNav.classList.contains("show");
        menuToggle.setAttribute("aria-expanded", isOpen);
    };
}

/* Featured Stories slideshow on the Home page */
const slides = document.querySelectorAll(".story-slide");
const previousStory = document.getElementById("previous-story");
const nextStory = document.getElementById("next-story");

let currentStory = 0;

const showStory = (storyNumber) => {
    slides.forEach((slide) => {
        slide.classList.remove("active-slide");
    });

    if (slides[storyNumber]) {
        slides[storyNumber].classList.add("active-slide");
    }
};

if (previousStory && nextStory) {
    previousStory.onclick = () => {
        currentStory--;

        if (currentStory < 0) {
            currentStory = slides.length - 1;
        }

        showStory(currentStory);
    };

    nextStory.onclick = () => {
        currentStory++;

        if (currentStory >= slides.length) {
            currentStory = 0;
        }

        showStory(currentStory);
    };
}

/* Reads the team information from the GitHub Pages JSON file */
const easternTeams = document.getElementById("eastern-teams");
const westernTeams = document.getElementById("western-teams");

async function loadTeams() {
    try {
        const response = await fetch(
            "https://cse-landosprouse.github.io/csce242/projects/part7/teams.json"
        );

        if (!response.ok) {
            throw new Error("Could not load team information.");
        }

        const teams = await response.json();

        teams.forEach((team) => {
            const teamCard = document.createElement("article");
            teamCard.classList.add("team-card");

            teamCard.innerHTML = `
                <img class="team-logo-img" src="${team.img_name}" alt="${team.name} logo">
                <h3>${team.name}</h3>
                <p><strong>City:</strong> ${team.city}</p>
                <p><strong>Arena:</strong> ${team.arena}</p>
                <p><strong>Championships:</strong> ${team.championships}</p>
            `;

            if (team.conference === "Eastern Conference") {
                easternTeams.append(teamCard);
            } else {
                westernTeams.append(teamCard);
            }
        });
    } catch (error) {
        easternTeams.innerHTML = "<p>Team information could not be loaded.</p>";
        westernTeams.innerHTML = "<p>Team information could not be loaded.</p>";
        console.error(error);
    }
}

if (easternTeams && westernTeams) {
    loadTeams();
}