class Vacation {
    constructor(title, type, description, thingsToDo, imageFile, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.imageFile = imageFile;
        this.mapSrc = mapSrc;
    }

    getCard() {
        const card = document.createElement("article");
        card.classList.add("vacation-card");

        const title = document.createElement("h3");
        title.innerText = this.title;

        const type = document.createElement("p");
        type.innerText = `${this.type} Vacation`;

        const image = document.createElement("img");
        image.src = `images/${this.imageFile}`;
        image.alt = `${this.title} vacation destination`;

        card.append(title);
        card.append(type);
        card.append(image);

        card.onclick = () => {
            showVacationDetails(this);
        };

        return card;
    }
}

const vacations = [
    new Vacation(
        "Asheville",
        "Mountain",
        "A creative mountain city surrounded by the Blue Ridge Mountains.",
        "Visit the Biltmore Estate, explore downtown Asheville, and hike scenic trails.",
        "asheville.jpg",
        "https://www.google.com/maps?q=Asheville%20North%20Carolina&output=embed"
    ),

    new Vacation(
        "Boone",
        "Mountain",
        "A charming college town with beautiful mountain views and outdoor activities.",
        "Go skiing, visit Appalachian State University, and hike Grandfather Mountain.",
        "boone.jpg",
        "https://www.google.com/maps?q=Boone%20North%20Carolina&output=embed"
    ),

    new Vacation(
        "Hot Springs",
        "Mountain",
        "A peaceful small town known for natural mineral springs and mountain scenery.",
        "Relax in hot springs, go rafting, and explore Pisgah National Forest.",
        "hot-springs.jpg",
        "https://www.google.com/maps?q=Hot%20Springs%20North%20Carolina&output=embed"
    ),

    new Vacation(
        "Sunset Beach",
        "Beach",
        "A quiet coastal getaway with wide beaches and beautiful sunset views.",
        "Walk the beach, visit Bird Island, and watch the sunset over the water.",
        "sunset-beach.jpg",
        "https://www.google.com/maps?q=Sunset%20Beach%20North%20Carolina&output=embed"
    ),

    new Vacation(
        "Edisto Beach",
        "Beach",
        "A relaxing South Carolina beach town with natural beauty and a laid-back atmosphere.",
        "Swim, fish, visit Edisto Beach State Park, and look for seashells.",
        "edisto-beach.jpg",
        "https://www.google.com/maps?q=Edisto%20Beach%20South%20Carolina&output=embed"
    ),

    new Vacation(
        "Oak Island",
        "Beach",
        "A family-friendly coastal destination with beaches, a pier, and a lighthouse.",
        "Visit the Oak Island Lighthouse, fish from the pier, and enjoy the beach.",
        "oak-island.jpg",
        "https://www.google.com/maps?q=Oak%20Island%20North%20Carolina&output=embed"
    )
];

const vacationList = document.getElementById("vacation-list");
const modal = document.getElementById("vacation-modal");
const closeModal = document.getElementById("close-modal");

const showVacationDetails = (vacation) => {
    document.getElementById("modal-title").innerText = vacation.title;
    document.getElementById("modal-type").innerText = vacation.type;
    document.getElementById("modal-description").innerText = vacation.description;
    document.getElementById("modal-things-to-do").innerText = vacation.thingsToDo;

    const modalImage = document.getElementById("modal-image");
    modalImage.src = `images/${vacation.imageFile}`;
    modalImage.alt = `${vacation.title} vacation destination`;

    document.getElementById("modal-map").src = vacation.mapSrc;

    modal.classList.remove("hidden");
};

const closeVacationDetails = () => {
    modal.classList.add("hidden");
    document.getElementById("modal-map").src = "";
};

vacations.forEach((vacation) => {
    vacationList.append(vacation.getCard());
});

closeModal.onclick = closeVacationDetails;

modal.onclick = (event) => {
    if (event.target === modal) {
        closeVacationDetails();
    }
};