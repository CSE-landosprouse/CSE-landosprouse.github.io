const destinationSelect = document.getElementById("destination-type");
const destinationLinks = document.getElementById("destination-links");
const mapContainer = document.getElementById("map-container");
const map = document.getElementById("map");

/* Associative array for mountain destinations */
const mountains = {
    "Asheville, North Carolina": "Asheville, North Carolina",
    "Boone, North Carolina": "Boone, North Carolina",
    "Gatlinburg, Tennessee": "Gatlinburg, Tennessee",
    "Hot Springs, North Carolina": "Hot Springs, North Carolina"
};

/* Associative array for beach destinations */
const beaches = {
    "Myrtle Beach, South Carolina": "Myrtle Beach, South Carolina",
    "Folly Beach, South Carolina": "Folly Beach, South Carolina",
    "Hilton Head Island, South Carolina": "Hilton Head Island, South Carolina",
    "Wrightsville Beach, North Carolina": "Wrightsville Beach, North Carolina"
};

/* Shows a live embedded Google map */
const showMap = (destination) => {
    map.src = `https://www.google.com/maps?q=${encodeURIComponent(destination)}&output=embed`;
    mapContainer.classList.remove("hidden");
};

/* Creates the four clickable destination links */
const displayDestinations = (destinations) => {
    destinationLinks.innerHTML = "";
    mapContainer.classList.add("hidden");

    Object.keys(destinations).forEach((destinationName) => {
        const link = document.createElement("a");

        link.href = "#";
        link.textContent = destinationName;

        link.onclick = (event) => {
            event.preventDefault();
            showMap(destinations[destinationName]);
        };

        destinationLinks.append(link);
    });
};

/* Responds when the user chooses Mountains or Beaches */
destinationSelect.onchange = () => {
    const selectedType = destinationSelect.value;

    if (selectedType === "mountains") {
        displayDestinations(mountains);
    } else if (selectedType === "beaches") {
        displayDestinations(beaches);
    } else {
        destinationLinks.innerHTML = "";
        mapContainer.classList.add("hidden");
    }
};