/* Shows and hides the mobile navigation */
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.onclick = () => {
    mainNav.classList.toggle("show");

    const isOpen = mainNav.classList.contains("show");
    menuToggle.setAttribute("aria-expanded", isOpen);
};

/* Featured Stories slideshow on the Home page */
const slides = document.querySelectorAll(".story-slide");
const previousStory = document.getElementById("previous-story");
const nextStory = document.getElementById("next-story");

let currentStory = 0;

const showStory = (storyNumber) => {
    slides.forEach((slide) => {
        slide.classList.remove("active-slide");
    });

    slides[storyNumber].classList.add("active-slide");
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